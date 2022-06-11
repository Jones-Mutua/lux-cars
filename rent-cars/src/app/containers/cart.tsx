// import React from 'react'




import React from 'react';
import styled from 'styled-components';
import { Foot } from '../components/footer/footer';
import { Navbar } from '../components/NavBar';
import Add, { faAd, faRemoveFormat } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Remove from '@material-ui/icons'

const Container = styled.div`


`
const Wrapper = styled.div`
padding: 20px;

`
const Title = styled.h1`
font-weight: 600;
text-align: center;
`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`
const Bottom = styled.div`
display: flex;
justify-content: space-between;

`
const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;

`;

const TopTexts = styled.div``
const TopText = styled.span`
text-decoration: overline;
cursor: pointer;
margin: 0px 10px;
`


const Info = styled.div`
flex: 3;
`
const Summary = styled.div`
flex: 1;
border: 0.5px  solid lightblue;
border-radius: 10px;
padding: 20px;
height: 50h;
background-color: whitesmoke;
`
const Product = styled.div`
display: flex;
justify-content: space-between;
`
const ProductDetail = styled.div`
flex: 2;
display: flex;
`
const CarPrice = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Details = styled.div`
display: flex;
padding: 20px;
flex-direction: column;
justify-content: space-around;
`
const CarName = styled.span`
padding: 20px;
`
const CarSize = styled.span`
padding: 20px;
`
const CarId = styled.span`
padding: 20px;
`
const Image = styled.img`
width: 200px;
`
const PriceAmoutContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`

const ProductAmount = styled.div`
font-style: 24px;
margin: 5px;
`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
`


const SummaryTitle = styled.h1`
font-weight: 200;
text-transform: uppercase;
`

const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: 500;
font: 20px;
`

const Button = styled.button`
width: 100%;
padding: 10px;
border-color: blue;
color: green;
font-weight: 600;
`

const SummaryItemPrice = styled.h1`
`

const SummaryItemText = styled.h1`
`







const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Title>Lux Cars</Title>
                <Top>
                    <TopButton>Reserve your car</TopButton>
                    <TopTexts>
                    <TopText>Rentals</TopText>
                    <TopText > your cars</TopText>
                    </TopTexts>
                    <TopButton >Checkout Now</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                            
                                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl75b8I7wNg0azfkuGDYPhG33Jjq_Il3UvPw&usqp=CAU"/>
                                <Details>
                                    <CarName><b>Product: </b>TX CARS</CarName>
                                    <CarId><b>Id: </b> 97655432</CarId>
                                    <CarSize><b>Size: </b>4 seats</CarSize>
                                </Details>
                                </ProductDetail>
                                <CarPrice>
                                    <PriceAmoutContainer>
                                        <FontAwesomeIcon icon={faAd} />
                                        <ProductAmount>500</ProductAmount>
                                        <FontAwesomeIcon icon={faRemoveFormat} />
                                        {/* <Remove /> */}
                                    </PriceAmoutContainer>
                                    <ProductPrice>$ 666</ProductPrice>
                            </CarPrice>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>your order</SummaryTitle>
                            <SummaryItem>
                            <SummaryItemText>Car price</SummaryItemText>
                                <SummaryItemPrice>$ 388</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                            <SummaryItemText>Discout</SummaryItemText>
                                <SummaryItemPrice>$ 388</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                            <SummaryItemText>V.A.T</SummaryItemText>
                                <SummaryItemPrice>$ 388</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                            <SummaryItemText >  Total</SummaryItemText>
                                <SummaryItemPrice>$ 388</SummaryItemPrice>
                            </SummaryItem>
                            <Button>Checkout Now</Button>
                    </Summary>
                </Bottom>
            </Wrapper>


            <Foot />
        </Container>
    )
}

export default Cart
