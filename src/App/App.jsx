import { useState } from 'react'
import routes from './routes'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

import './App.css'

const router= createBrowserRouter(routes)

function App() {

  return (
    <>  
      <Header/>
      <RouterProvider router={router} />
      <Footer/>
        
    </>
  )
}

export default App
