import useCart from "../../../App/context/cart/useCart"
import ProductCard from "./ProductCard"
import catalog from '../assets/catalog.json'
import { Grid } from "@radix-ui/themes"
import { useState } from "react"

const ProductDisplay=({searchFilter, setSearchFilter,categoryFilter })=>{
    const {cart, setCart} =useCart()
    const itemsPerPage=12
    const [currentPage, setCurrentPage] = useState(1)
    const start= (currentPage-1) * itemsPerPage
    const end= start + itemsPerPage
    const filteredInventory=catalog.inventory
    const pageItems=filteredInventory.slice(start,end)
    console.log(currentPage)
    return <>
    <input type="text" name="" id="" placeholder="Search Bar" value={searchFilter} onChange={(e)=>setSearchFilter(e.target.value)}/>
    <div>{searchFilter}</div>
    <Grid columns="3" gap="3" rows="repeat(auto, 8rem)" 
    width="auto" 
    overflowY={'scroll'}>
        {pageItems.map(item=>(
            <ProductCard key= {item.ID} itemInfo={item}/>
        ))}
        </Grid>

    <button onClick={()=>setCurrentPage((prev)=> Math.max(prev-1,1))}>
        &lt;
    </button>

    <button onClick={()=>setCurrentPage((prev)=> Math.min(prev+1, Math.ceil(filteredInventory.length/itemsPerPage)))}>
        &gt;
    </button>
    </>
}

export default ProductDisplay