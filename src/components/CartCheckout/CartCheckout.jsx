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
    const {cart,removeFromCart, addToCart,emptyCart}= useCart()
    return <Container>
      <ShoppingCart/>
      <Flex>
        <Box>

        </Box>

        <Button>
          Checkout
        </Button>
      </Flex>
    </Container>
}

export default CartCheckout