import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Layout from "./components/Layout";
import CreatePost from "./pages/CreatePost";

import App from "./App"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import "./index.css";
import Loginpage from "./pages/Loginpage";
import { UserContextProvider } from "./UserContext";
import Registerpage from "./pages/Registerpage";


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
        element:<Loginpage/>
      },
      {
        path:"/register",
        element:<Registerpage/>
      },
      {
        path:"/create",
        element:<CreatePost/>
      }
    ]
  }
 
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <UserContextProvider>
    <RouterProvider router={router} />
    </UserContextProvider>
   {/* <App/> */}
  </React.StrictMode>
);