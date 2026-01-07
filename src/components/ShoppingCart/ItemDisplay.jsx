import {
  Container,
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Card
} from "@radix-ui/themes";

const ItemDisplay =({itemInfo, quantity, add, clear,reduce})=>{

    return <Card>
        <Box>
            <img src="" alt="" />
        </Box>
        <Flex>
            <Text>{itemInfo.name}</Text>
            <Box>
                <Button onClick={()=>reduce()}>-</Button>
                <Text>{quantity}</Text>
                <Button onClick={()=>add()}>+</Button>
                <Button onClick={()=>clear()}>X</Button>

            </Box>
            <Text>total: {itemInfo.price*quantity}</Text>
        </Flex>
    </Card>

}
export default ItemDisplay