import { useState, useEffect } from "react";
import { isExpired, decodeToken } from "react-jwt";
import { useNavigate , Outlet, Link} from "react-router-dom";
function Dashboard() {
  

  /* Ignore this code */

  //const navigate = useNavigate();


  // async function quote() {
  //   const req = await fetch("http://localhost:1337/api/quote", {
  //     headers: {
  //       "x-access-token": localStorage.getItem("token")
  //     },
  //   });

  //   const data = await req.json()
  //   console.log(data)
  // }

  // useEffect(() => {
    
  //   quote();
    
  // }, []);
  
  /* Ignore this code */

  return (
    <div>
      <h1>DashBoard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;


