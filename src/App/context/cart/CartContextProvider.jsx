import {  useEffect, useState } from "react";
import CartContext from "./cart.context";

const CartProvider=({children})=>{
    const [cart, setCart]=useState({})
    useEffect(()=>{displayCart()},[cart])

    const addToCart=(item, quantity)=>{
        const id= String(item.ID)
        setCart (prev=>{
            const currItem=prev[id]
            return currItem?{
                //if item is inside the cart, update quantity
                ...prev,
                [id]:{
                    ...currItem,
                    quantity: currItem.quantity+quantity
                }
            }:{
                ...prev,
                [id]:{
                    item,
                    quantity
                }
            }
        })
       
    }
    const removeFromCart=(item, quantity)=>{
        const id= String(item.ID)
        setCart (prev=>{
            const currItem=prev[id]
            //exception, for some reason this function was somehow called when item is missing from cart
            if (!(currItem)) return prev
            
            //items reachest 0 or less quantity, means it has to be deleted
            if (currItem.quantity-quantity<=0){
                const cartUpdate={...prev}
                delete cartUpdate[id]
                return cartUpdate
            }
            else{
                //update quantity
               return {
                    ...prev,
                    [id]:{
                        ...currItem,
                        quantity: currItem.quantity-quantity
                    }
                }
            }
        })
    }
    const emptyCart=()=>{
            setCart({})
    }

    const displayCart=()=>{
        console.log(cart)
    }
    return (
    <CartContext.Provider value={{cart,addToCart, removeFromCart, emptyCart, displayCart}}>
        {children}
    </CartContext.Provider>
    )
}

export default CartProvider