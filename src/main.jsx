import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import routes from './app/routes.jsx'
import './index.css'

const router= createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <RouterProvider router={router} />
    <Footer/>
  </StrictMode>,
)
