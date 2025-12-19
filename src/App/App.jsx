import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import styled from 'styled-components'
import { Theme } from "@radix-ui/themes";
import { Outlet } from "react-router";
import CartProvider from './context/cart/CartContextProvider';
import './App.css'

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
`;

function App() {
  return (
    <Theme accentColor="amber" grayColor="sand" radius="large" scaling="95%">
      <CartProvider>
        <Wrapper>
          <Header />
          <Main>
            <Outlet />
          </Main>
          <Footer />
        </Wrapper>
      </CartProvider>
    </Theme>
  );
}

export default App;
