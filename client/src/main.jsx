import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Layout from "./components/Layout";

import App from "./App"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import "./index.css";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path: "",
        element: <App/>,
      },
      {
        path:"/login",
        element:<div>Login</div>
      },
      {
        path:"/register",
        element:<div>Registration</div>
      }
    ]
  }
  
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
   {/* <App/> */}
  </React.StrictMode>
);