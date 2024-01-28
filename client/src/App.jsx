import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import BadPage from "./components/pages/BadPage";
import Notfound from "./components/pages/Notfound";
import Home from "./components/pages/Home";
import $ from "jquery";
import Cookies from 'js-cookie';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
useEffect(() => {
  const checkLoginStatus = async () => {
    try {
      const req = await fetch("http://localhost:1337/api/checkLogStatus", {
        headers: {
          "x-access-token": Cookies.get('token')
        },
      });

      const data = await req.json();
      //console.log(data);

      if (data.status === "ok") {
        $(".authLink").parent().remove()
        if (location.pathname.includes("/login") || location.pathname.includes("/register")) {
          navigate(-1);
        }
      } else {
        Cookies.remove('token');
        if (location.pathname.includes("/admin")) {
          navigate('/403');
        }
        $(".normLink").parent().remove()
      }
    } catch (error) {
      console.error("Error checking login status:", error);
    }
  };

  checkLoginStatus();
}, [location.pathname, navigate]);


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/Dashboard" element={<Dashboard />} />
        <Route path="/403" element={<BadPage />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default App;
