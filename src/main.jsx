import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignIn from "./Pages/SignIn.jsx";
import Signup from "./Pages/Signup.jsx";
import "./mirage/server.js";
import Mylikes from "./Pages/Mylikes.jsx";
import Mybookmark from "./Pages/Mybookmark.jsx";
import Myprofile from "./Pages/Myprofile.jsx";
import Myposts from "./Pages/Myposts.jsx";
import Allposts from "./Pages/Allposts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"/",
        element:<Allposts/>

      },
      {
        path: "mylikes",
        element: <Mylikes />,
      },
      {
        path: "/mybookmark",
        element: <Mybookmark />,
      },
      {
        path: "myposts",
        element: <Myposts />,
      },
      {
        path: "Myprofile",
        element: <Myprofile />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
