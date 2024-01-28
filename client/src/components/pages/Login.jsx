import { useState } from "react";
import { useNavigate , Outlet, Link } from 'react-router-dom';
import Cookies from 'js-cookie';
function Login() {
  const navigate = useNavigate();
  const [email , setEmail] = useState('')
  const [password , setpassword] = useState('')

  async function loginUser(e){
    e.preventDefault()

    const response = await fetch("http://localhost:1337/api/login" , {
      method : 'POST' ,
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email , password
      }),
    })

    const data = await response.json()

    if(data.user){
      Cookies.set('token', data.user, { expires: 7  , sameSite: 'strict' })
      // alert("Login Sucessful")
      navigate('/admin/dashboard');
    }else{
      alert("Login failed")
    }

    console.log(data)
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={loginUser}>
        <input type="email" 
        placeholder="Enter Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}  
        required/>
        <br /><br />     
        <input type="password" 
        placeholder="Enter Password"
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
        required/>
         <br /><br /> 
         <input type="submit"  value="Login"/>
      </form>
      <Link to="/register" className="authLink">Register</Link>
    </div>
  );
}

export default Login;
