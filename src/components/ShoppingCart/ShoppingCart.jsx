import {
  Container,
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Card
} from "@radix-ui/themes";

import useCart from "../../App/context/cart/useCart";
const ShoppingCart=()=>{
    const {cart,removeFromCart, emptyCart}= useCart()
    return <> here is the shopping cart</>
}
export default ShoppingCart