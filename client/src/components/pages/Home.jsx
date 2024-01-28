import { useState, useEffect } from "react";
import { Outlet, Link} from "react-router-dom";


function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <ul>
          <li>
            <Link to="/login" className="authLink">Login</Link>
          </li>
          <li>
            <Link to="/register" className="authLink">Register</Link>
          </li>
          <li>
            <Link to="/admin/dashboard" className="normLink">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;


