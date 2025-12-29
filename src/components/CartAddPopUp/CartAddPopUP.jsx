import { Container,Box, Section, Flex,Button } from "@radix-ui/themes"
import { useNavigate } from "react-router"
import useCart from "../../App/context/cart/useCart"
const CartAddPopUp=({ProductInfo, setDisplay})=>{
    const navigate=useNavigate()
    const {cart, setCart} =useCart()
    return <Container style={{
        position:"fixed", 
        zIndex:"1000", 
        backgroundColor:"rgba(128, 128, 128, 0.5)",
        inset:"0",
        display:"flex",
        justifyContent:"center"}}>
            <Flex justify={"center"} align={"center"}>
                <Box>
                
                </Box>

                <Box>
                    <Button onClick={()=>setDisplay(false)}>Continue Buying</Button>
                    <Button onClick={()=>{
                        //more things happen
                        navigate("/checkout")
                        }}> Add to Cart And Checkout</Button>
                </Box>
            </Flex>
        </Container>
    

}

export default CartAddPopUp