import styled from "styled-components";
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
`;

const Header =()=>{
    return <Wrapper>
                <div>
                    logo Place
                </div>
                <div>
                    home
                </div>
                <div>
                    products
                </div>
                <div>
                    cart
                </div>
        </Wrapper>
}

export default Header