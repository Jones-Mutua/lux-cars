import React from "react";
import styled from "styled-components";
import tw from "twin.macro";


import  CarLogoImg from "../../assents/images/vintage-cars-png-33048.png";

interface ILogoProps {
    color?: "white" | "dark";
}

const LogoContainer = styled.div`
${tw`flex items-center `}
`

const LogoText = styled.div`
${tw`m-1 text-xl font-bold text-black md:text-2xl`}
 ${({color} : any) =>
 color === "white" ? tw`text-white `: tw`text-black`} 
`

const Image = styled.div`
width: auto;
${tw`h-6 md:h-9`}
img {
    width: auto;
    height: 100%;
}

`

export function Logo(props: ILogoProps) {
    const {color} = props;

  return <LogoContainer>
      <Image>
          <img src={CarLogoImg} alt=""/>
      </Image>
      <LogoText color={color || "dark"}>LuxCars</LogoText>
  </LogoContainer>
}