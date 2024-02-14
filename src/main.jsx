import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './modules/home/App.jsx'
import Login from './modules/login/Login.jsx'
import Register from './modules/register/Register.jsx'
import LoginBanner from './modules/login/LoginBanner.jsx'
import Error404 from './modules/error/Error404.jsx'
import './styles/css/styles.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/home',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/',
    element: <LoginBanner />,
  },
  {
    path: '*',
    element: <Error404 />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
