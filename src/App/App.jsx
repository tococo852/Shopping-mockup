import { useState } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import styled from 'styled-components'
import { Theme } from "@radix-ui/themes";
import { Outlet } from "react-router";
import './App.css'

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
          <Outlet/>
        <Footer/>
      </Theme>
        
    </Wrapper>
  )
}

export default App
