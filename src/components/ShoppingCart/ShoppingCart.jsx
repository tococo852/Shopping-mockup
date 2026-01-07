import {
  Container,
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Card
} from "@radix-ui/themes";
import ItemDisplay from "./ItemDisplay";

import useCart from "../../App/context/cart/useCart";
const ShoppingCart=()=>{
    const {cart,removeFromCart, addToCart,emptyCart}= useCart()
    return <Flex direction={"column"}>
        {Object.values(cart).map(cartItem=>{
          return <ItemDisplay itemInfo={cartItem.item} quantity={cartItem.quantity} add={()=>addToCart(cartItem.item, 1)} clear={()=>removeFromCart(cartItem.item,cartItem.quantity) } reduce={()=>removeFromCart(cartItem.item, 1)} />
        })}
      </Flex>
}
export default ShoppingCart