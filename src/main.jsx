import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffe from './components/AddCoffe.jsx';
import UpdateCoffe from './components/UpdateCoffe.jsx';
import SignUp from './components/SignUp.jsx';
import Signin from './components/Signin.jsx';
import AuthProviders from './providers/AuthProviders.jsx';
import Users from './components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=>fetch('http://localhost:5000/coffee')
  },
  {
    path:"addCoffee",
    element:<AddCoffe></AddCoffe>
  },
  {
    path:"updateCoffee/:id",
    element:<UpdateCoffe></UpdateCoffe>,
    loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path:"/signup",
    element:<SignUp></SignUp>
  },
  {
    path:"/signin",
    element:<Signin></Signin>
  },
  {
    path:"/users",
    element:<Users></Users>,
    loader:()=> fetch('http://localhost:5000/users')
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProviders>    <RouterProvider router={router} />
</AuthProviders>  </React.StrictMode>,
)
