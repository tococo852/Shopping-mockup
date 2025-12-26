import { useParams } from "react-router"
import catalog from '../assets/catalog.json'

const ProductInfo=()=>{
    const {productId} = useParams()
    const  product=catalog.inventory.find(item=> item.ID==productId)

    return <div>
        {product.name}
        </div>
}

export default ProductInfo