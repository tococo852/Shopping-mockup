import {
  Container,
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Card
} from "@radix-ui/themes";
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import useCart from "../../App/context/cart/useCart";
const CartCheckout=()=>{
    const {emptyCart, cartValue}= useCart()
    return <Container align={"center"}>
        <Flex justify={"center"} gap={"10rem"}>

      <ShoppingCart/>
        <Box>
            <Text>
            Total Price
            </Text>
            <Box>
                $ {cartValue()}
            </Box>
        <Button onClick={()=>emptyCart()}>
          Checkout
        </Button>
        </Box>

        
      </Flex>
    </Container>
}

export default CartCheckout