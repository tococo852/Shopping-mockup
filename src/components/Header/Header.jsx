import styled from "styled-components";
import { Box, Section} from "@radix-ui/themes";

import { Link } from "react-router";

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
gap: 3rem;
padding-right: 1rem;
`;

const Header =()=>{
    return <Box
            py="3"
            style={{ backgroundColor: "papayawhip", borderRadius: "var(--radius-3)" }}>

                <Section size="1" 
                style={{ display: "flex", justifyContent:"space-between"}}
                > 
                 <div>
                    <Link to={`/`}> 
                        <>logo</>

                    </Link>
                </div>
                <Wrapper>
                    <div>
                        <Link to={`/`}>
                        <>home</>
                        </Link>
                </div>
                <div>
                    products
                </div>
                <div>
                    cart
                </div>

                </Wrapper>
                
                </Section>

        </Box>
               
}

export default Header