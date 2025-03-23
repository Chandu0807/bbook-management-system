import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import About from './components/About'
import Contact from './components/Contact.jsx'
import Error from './components/Error.jsx'
import Search from './components/Search.jsx'
import Footer from './components/Footer.jsx'
import BookDetails from './components/BookDetails.jsx'

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Search/>
      },
      {
        path:"/About",
        element:<About/>
      },
      {
        path:"/Contact",
        element:<Contact/>
      },{
        path:"/book/:id",
        element:<BookDetails/>
      }
    ],
    errorElement:<Error/>
  },{
    path:"/About",
    element:<About/>
  },
  {
    path:"/Contact",
    element:<Contact/>
  },{
    path:"/Footer",
    element:<Footer/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
