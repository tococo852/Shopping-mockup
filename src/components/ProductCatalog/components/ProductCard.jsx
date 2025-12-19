import { Card, Inset, Text} from "@radix-ui/themes"


const ProductCard=({itemInfo})=>{
    console.log(itemInfo)
    return <>
        <Card variant="surface">
            <img src="" alt="" style={{}} />
		<Text as="div" size="2" weight="bold">
			{itemInfo.name}
		</Text>
		<Text as="div" color="gray" size="2">
			{itemInfo.price}
		</Text>
	    </Card>

        </>
}
export default ProductCard