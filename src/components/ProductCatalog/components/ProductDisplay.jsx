import useCart from "../../../App/context/cart/useCart"
import ProductCard from "./ProductCard"
import catalog from '../assets/catalog.json'
import { Button, Grid } from "@radix-ui/themes"
import { useState } from "react"
import styled from "styled-components"

const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

`
const ProductDisplay=({searchFilter, setSearchFilter,categoryFilter })=>{
    const {cart, setCart} =useCart()
    const itemsPerPage=12
    const [currentPage, setCurrentPage] = useState(1)
    const start= (currentPage-1) * itemsPerPage
    const end= start + itemsPerPage
    const filteredInventory=catalog.inventory
    const pageItems=filteredInventory.slice(start,end)
    console.log(currentPage)
    return <Wrapper>
        <div>
            <input type="text" name="" id="" placeholder="Search Bar" value={searchFilter} onChange={(e)=>setSearchFilter(e.target.value)}/>

        </div>
    <Grid gap="3" columns="repeat(3, max-content)" rows="repeat(4, max-content)"
    overflowY={'scroll'}
    style={{
        flex: "1 0 70%",
        justifyContent: "center",
        alignContent: "center"
    }}>
        {pageItems.map(item=>(
            <ProductCard key= {item.ID} itemInfo={item}/>
        ))}
        </Grid>

    <div>
        <button onClick={()=>setCurrentPage((prev)=> Math.max(prev-1,1))}>
        &lt;
    </button>
    {Array.from({length :Math.ceil(filteredInventory.length/itemsPerPage)}).map((_,i)=>(
         <button style={{color:(i+1)==currentPage?"blue":"inherit"}}key={i} onClick={()=>{setCurrentPage(i+1)}}>{i+1}</button>
    ))}
    <button onClick={()=>setCurrentPage((prev)=> Math.min(prev+1, Math.ceil(filteredInventory.length/itemsPerPage)))}>
        &gt;
    </button>
    </div>
    </Wrapper>
}
// (page)=> setCurrentPage(page)

export default ProductDisplay