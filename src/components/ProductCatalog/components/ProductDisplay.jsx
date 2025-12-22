import useCart from "../../../App/context/cart/useCart"
import ProductCard from "./ProductCard"
import catalog from '../assets/catalog.json'
import { Grid } from "@radix-ui/themes"

const ProductDisplay=({searchFilter, setSearchFilter,categoryFilter })=>{
    const {cart, setCart} =useCart()
    return <>
    <input type="text" name="" id="" placeholder="Search Bar" value={searchFilter} onChange={(e)=>setSearchFilter(e.target.value)}/>
    <div>{searchFilter}</div>
    <Grid columns="3" gap="3" rows="repeat(auto, 8rem)" 
    width="auto" 
    overflowY={'scroll'}>
        {catalog.inventory.map(item=>(
            <ProductCard key= {item.ID} itemInfo={item}/>
        ))}
        </Grid>
    
    </>
}

export default ProductDisplay