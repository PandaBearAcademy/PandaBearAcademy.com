import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import SignIn from './Modules/SignIn.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "sign-in",
    element: <SignIn />,
  }
]);


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
