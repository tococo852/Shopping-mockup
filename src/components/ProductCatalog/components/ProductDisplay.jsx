import useCart from "../../../App/context/cart/useCart"
import ProductCard from "./ProductCard"
import catalog from '../assets/catalog.json'
import { Grid } from "@radix-ui/themes"

const ProductDisplay=({searchFilter, setSearchFilter,categoryFilter })=>{
    const {cart, setCart} =useCart()
    return <>
    <Grid columns="3" gap="3" rows="repeat(4, 8rem)" 
    width="auto" 
    overflowY={'scroll'}>
        {catalog.inventory.map(item=>(
            <ProductCard key= {item.ID} itemInfo={item}/>
        ))}
        </Grid>
    
    </>
}

export default ProductDisplay