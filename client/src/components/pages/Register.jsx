import { useState } from "react";
import { useNavigate , Outlet, Link } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [fname , setFname] = useState('')
  const [lname , setLname] = useState('')
  const [contact_no , setContact_no] = useState('')
  const [email , setEmail] = useState('')
  const [password , setpassword] = useState('')

  async function registerUser(e){
    e.preventDefault()

    const response = await fetch("http://localhost:1337/api/register" , {
      method : 'POST' ,
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        fname , lname , email , contact_no , password
      }),
    })

    const data = await response.json()

    if(data.status === "ok"){
      alert(`Registered Successfully!`)
      navigate('/login');
    }
    // console.log(data)
  }

  return (
    <div>
      <h1>Resgister</h1>

      <form onSubmit={registerUser}>
        <input type="text"  
        placeholder="Enter First Name"
        value={fname} 
        onChange={(e) => setFname(e.target.value)}
        required/>
        <br /><br />
        <input type="text"  
        placeholder="Enter Last Name"
        value={lname} 
        onChange={(e) => setLname(e.target.value)}
        required/>
        <br /><br />
        <input type="email" 
        placeholder="Enter Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}  
        required/>
        <br /><br /> 
        <input type="tel" 
        placeholder="Enter Phone"
        value={contact_no}
        onChange={(e)=>setContact_no(e.target.value)}  />
        <br /><br />        
        <input type="password" 
        placeholder="Enter Password"
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
        required/>
         <br /><br /> 
         <input type="submit"  value="signup"/>
      </form>
      <Link to="/login" className="authLink">Login</Link>
    </div>
  );
}

export default Register;
