import React from "react";
import { Button } from "../../components/Buttons";
import styled from "styled-components";







 const SectionContainer = styled.div`
 
 background: whitesmoke;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 500px;
position: relative;
z-index: 1; 


`


 



 const SectionContent = styled.div`
z-index: 3;
max-width: 1200px;
position: relative;
padding: 8px 24px;

flex-direction: column;
align-items: center;
`

 const SectionH1 = styled.h1`
color: black;
font-size: 48px;
align-items: center;
text-align: center;

@media screen and (max-width: 768px){
    font-size: 40px;
}
@media screen and ( max-width: 480px) {
    font-size: 32px;
}
`

 const SectionP = styled.p`
margin-top: 24px;
color: rebeccapurple;
 fill: currentColor;
position: relative;
justify-content: center;
align-items: center;
font-size: 24px;
text-align: center;
max-width: 600px;

@media screen and (max-width: 768px){
    font-size: 24px;
}
@media screen and ( max-width: 480px) {
    font-size: 18px;
}
`


 const SectionBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;

`

export function Section(){


     
  return (
    <SectionContainer>
      
      <SectionContent>
        <SectionH1>WELCOME TO  WEBCARS RENTALS  SYSTEM </SectionH1>

        <SectionP>Sign up now and get better experince with us  and get a ride towards your journey.</SectionP>
        <SectionBtnWrapper>
          
          <Button text="Get Your Now"/>
      
           
        </SectionBtnWrapper>
      </SectionContent>
    </SectionContainer>
  );
};

