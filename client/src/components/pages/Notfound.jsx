import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Outlet, Link} from "react-router-dom";

function Notfound() {
  
  const navigate = useNavigate();


  return (
    <div>
      <h1>404 Not Found</h1>
      <nav>
        <ul>
          <li>
            <Link to="/login" className="authLink">Login</Link>
          </li>
          <li>
            <Link to="/register" className="authLink">Register</Link>
          </li>
          <li>
            <Link to="/Home">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Notfound;


