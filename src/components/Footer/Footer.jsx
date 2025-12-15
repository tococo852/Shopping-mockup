
import styled from "styled-components";
import { Box, Section} from "@radix-ui/themes";
const Wrapper = styled.section`
  background: papayawhip;
`;

const Footer =()=>{
    return <>


        <Box
            py="3"
            style={{ backgroundColor: "papayawhip", borderRadius: "var(--radius-3)" }}
        >

                <Section size="1" 
                style={{ display: "flex", justifyContent:"center", gap:"3rem", fontSize:"0.8rem"}}
                > 
                <div>
                   <p>contact:</p>
                   <p>+5690000000</p>
                </div>
                <div>
                    <p>Location:</p>
                    <p>Next to REDACTED</p>
                </div>
                <div>
                    <p>by</p>
                    <p>luciano gitlink</p>
                </div>
                </Section>

        </Box>
        </>
}

export default Footer