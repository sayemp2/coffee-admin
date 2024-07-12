import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AddCoffee from './Components/AddCoffee.jsx'
import UpdateCoffee from './Components/UpdateCoffee.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from './Components/SignUp/SignUp.jsx'
import SignIn from './Components/SignIn/SignIn.jsx'
import AuthProvider from './Components/Providers/AuthProvider.jsx'
import Users from './Components/Users.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=>fetch('http://localhost:5000/coffees')
  },
  {
    path:'AddCoffee',
    element:<AddCoffee></AddCoffee>
  },
  {
    path:'UpdateCoffee/:id',
    element:<UpdateCoffee></UpdateCoffee>,
    loader:({params})=>fetch(`http://localhost:5000/coffees/${params.id}`)
  },
  {
    path:'/signup',
    element:<SignUp></SignUp>
  },
  {
    path:'/signin',
    element:<SignIn></SignIn>
  },
  {
    path:'/userlist',
    element:<Users></Users>,
    loader:()=>fetch(`http://localhost:5000/user`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
