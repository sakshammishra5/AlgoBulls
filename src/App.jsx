import React, { createContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Slidebar from "./Components/Slidebar";


const App = () => {
  const [login, SetLogin] = useState(localStorage.getItem("loggedin"));
  const navigate = useNavigate();
  useEffect(() => {
    if (!login) {
      navigate("/signin");
    }
  }, []);

  return (
    <>
        <div className="flex">
          <Slidebar className="w-1/12" />
          <Outlet className="w-11/12" />
        </div>
    </>
  );
};

export default App;
