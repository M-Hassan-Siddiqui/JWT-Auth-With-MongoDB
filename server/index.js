const {
    PORT,
    MONGODB_CONNECTION_STRING,
    MONGODB_useNewUrlParser,
    MONGODB_useUnifiedTopology,
    JWT_SECRET
  } = require('./config');

const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')

app.use(cors())
app.use(express.json())

// Connect to MongoDB database using Mongoose
mongoose.connect(MONGODB_CONNECTION_STRING, { useNewUrlParser: MONGODB_useNewUrlParser, useUnifiedTopology: MONGODB_useUnifiedTopology })


/*--Register Api START--*/
 app.post('/api/register', async (req,res)=>{
    console.log(req.body);
    try{
        const user = await User.create({
            fname : req.body.fname, 
            lname : req.body.lname, 
            email : req.body.email, 
            contact_no : req.body.contact_no, 
            password : req.body.password
        })
        res.json({ status : 'ok' })
    }
    catch(err){
        console.log(err)
        res.json({ status : 'error' , error : err })
    }
 })
/*--Register Api end--*/

/*--Login Api START--*/
app.post('/api/login', async (req,res)=>{
        const user = await User.findOne({
            email : req.body.email, 
            password : req.body.password
        })
       
        if(user){

            const token = jwt.sign({
              email: user.email,
              name: user.fname + " " + user.lname,
            }, JWT_SECRET)

            res.json({ status : 'ok' , user : token})
        }else{
            res.json({ status : 'error' , user : false})
        }
 })
/*--Login Api end--*/



/*--checklogin api  START--*/
app.get('/api/checkLogStatus', async (req,res)=>{

    const token = req.headers['x-access-token']

    try{
        const decoded = jwt.verify(token , JWT_SECRET)
        const email = decoded.email
        const user = await User.findOne({ email : email})
        res.json({status:'ok' , role : 'none'})
    }catch(err){
      console.log(err)
      res.json({status:'error' , error: err})
    }
})
/*--checklogin api end--*/

/*--testing Api START--*/
app.post('/hello' , (req,res) =>{
    res.send({message : 'Hello World!'})
})
/*--testing Api END--*/

/*--PORT Declaration START--*/
app.listen(PORT , ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})
/*--PORT Declaration END--*/