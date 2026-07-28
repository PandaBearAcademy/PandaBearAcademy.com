import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import SignIn from './Modules/SignIn.jsx'
import SignUp from './Modules/SignUp.jsx'
import Courses from './Modules/Courses.jsx'
import UserHome from './Modules/UserHome.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <UserHome />,
  },
  {
    path: "sign-in",
    element: <SignIn />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "courses",
    element: <Courses />,
  }
]);


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
