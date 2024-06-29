import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Signup from './pages/SignUp.jsx'

const router= createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='signup' element={<Signup/>}/>
    </Route>
  )
 )

 ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
