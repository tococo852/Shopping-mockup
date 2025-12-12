import { useState } from 'react'
import routes from './routes'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import styled from 'styled-components'
import { Theme } from "@radix-ui/themes";

import './App.css'

const router= createBrowserRouter(routes)
const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;
`;
function App() {

  return (
    <Wrapper>  
      <Theme accentColor='amber' grayColor="sand" radius="large" scaling="95%">

        <Header/>
        <RouterProvider router={router} />
        <Footer/>
      </Theme>
        
    </Wrapper>
  )
}

export default App
