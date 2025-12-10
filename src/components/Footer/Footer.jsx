
import styled from "styled-components";
import "@radix-ui/themes/styles.css";
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Footer =()=>{
    return <>
            <Wrapper>
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
            </Wrapper>
        </>
}

export default Footer