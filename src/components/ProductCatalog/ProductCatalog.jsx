import CategorySidebar from "./components/CategorySidebar"
import { useState } from "react"
import ProductDisplay from "./components/ProductDisplay"


const ProductCatalog=()=>{
    const [categoryFilter, setCategoryFilter] = useState([])
    const [searchFilter, setSearchFilter]=useState('')


    return <div>
        <div>
            <CategorySidebar 
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}/>
        </div>

        <div>
            <ProductDisplay
            searchFilter={searchFilter}
            setSearchFilter={setSearchFilter}
            />
        </div>
        </div>
}

export default ProductCatalog