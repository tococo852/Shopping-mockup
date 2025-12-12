import { useState } from "react"
import HomeCarrousel from "./components/HomeCarrousel"
const Home =() =>{
    const [count, setCount] = useState(0)

  return (
    <>  
        <HomeCarrousel/>
        
    </>
  )
}
export default Home