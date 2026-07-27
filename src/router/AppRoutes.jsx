import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from '../App'

const AppRoutes = () => {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<App />
    }
  ])

  return  <RouterProvider router={router} />
  
}

export default AppRoutes