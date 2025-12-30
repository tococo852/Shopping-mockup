import { Container,Box, Section, Flex,Button, Text } from "@radix-ui/themes"
import { useNavigate } from "react-router"
import useCart from "../../App/context/cart/useCart"
import { useState } from "react"
const CartAddPopUp=({ProductInfo, setDisplay})=>{
    const navigate=useNavigate()
    const { addToCart, removeFromCart} =useCart()
    const [quantity, setQuantity]= useState(1)
    return <Container style={{
        position:"fixed", 
        zIndex:"1000", 
        backgroundColor:"rgba(128, 128, 128, 0.5)",
        inset:"0",
        display:"flex",
        justifyContent:"center"}}>
            <Flex justify={"center"} align={"center"} direction={"column"}> 
                <Flex>
                <Box>
                    <img src={ProductInfo.image_url} alt="" />
                </Box>

                <Text> {ProductInfo.name}</Text>

                <Box>
                    <Button onClick={()=>{
                        setQuantity(prev=>Math.max(1, prev-1))
                    }}>-</Button>
                    <input type="number" min="1" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
                    <Button onClick={()=>{
                        setQuantity(prev=>prev+1)
                    }}>+</Button>
                </Box>

                </Flex>

                <Box>
                    <Button onClick={()=>{
                        addToCart(ProductInfo,Number(quantity))
                        setDisplay(false)}}>
                        Add and Continue Buying
                    </Button>
                    <Button onClick={()=>{
                        addToCart(ProductInfo,Number(quantity))
                        navigate("/checkout")
                        }}> Add And go to Checkout</Button>


                        <Button onClick={()=>setDisplay(false)}> 
                            close
                        </Button>
                </Box>
            </Flex>
        </Container>
    

}

export default CartAddPopUp