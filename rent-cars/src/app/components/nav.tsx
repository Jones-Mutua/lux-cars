
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import tw from "twin.macro";
// import { fa-faShoppingCart } from "@fortawesome/free-brands-svg-icons";

const Navbar = styled.nav`
justify-content: center;
padding: 0 20px;
height: 50px;
display: flex;
top: 0;
left: 0;
right: 0;
background-color: #adabab;
color: rebeccapurple;
width: 100%;
align-items: center;
/* position: fixed; */

`
const Store = styled.div`
flex: 1;
`

const Middle = styled.div`
background: #adabab;
flex: 1;
`

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 8px;
border-radius: 25px;
background-color: gainsboro;
`
const Right = styled.div`
flex: 1;
`
const Cart = styled.div`
position: relative;
width: max-content;
margin-left: auto;
display: flex;
align-items: center;
justify-content: center;


`
const Input = styled.div`
width: 100%;
padding: 0 10px;
border: none;
display: block;

`
const Next = styled.div`

cursor: pointer;
`

export function Nav ()  {
    return (
        <Navbar>
            <Store  >Store</Store>
            <Middle >
                <Wrapper >
                    <Input>
                    <input type="text" />
                    </Input>
                    <FontAwesomeIcon icon={ faSearch} />
                </Wrapper>
            </Middle>
            <Right >
                <Cart >
                    <Next>
                    <FontAwesomeIcon icon={ faShoppingCart}
                    aria-hidden='true' />
                    </Next>
                </Cart>
            </Right>
        </Navbar>
    )
}


