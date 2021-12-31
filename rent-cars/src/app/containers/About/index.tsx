import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SCREENS } from "../../components/responsive";
import Img33 from "../../assents/images/undraw_order_a_car_3tww.svg"

const AboutusContainer = styled.div`
  ${tw`flex flex-wrap items-center justify-center w-full pt-4 pb-4 bg-white lg:pb-28 pr-7 pl-7 md:pl-0 md:pr-0`};
`;

const CarsContainer = styled.div`
  width: auto;
  height: 15em;

  margin-left: -50px;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }
  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InContainer = styled.div`
${tw`flex flex-col md:w-1/2 md:ml-6 2xl:ml-16`};


`;

const TitleCar = styled.h1`
${tw`text-2xl font-extrabold text-black md:text-5xl md:font-black md:leading-normal`};

`;

const InforText = styled.p`
${tw`mt-4 text-sm font-normal text-gray-500 md:max-w-2xl md:text-base`}
`



export function Aboutus() {
    return (
        <AboutusContainer>
           
            <InContainer>
                <TitleCar>
                   Fill the experience with our rentals deals and get the best deals with us
                </TitleCar>
                <InforText>
                    Are you with try our best primium cars for your luxy.
                </InforText>
            </InContainer>
             <CarsContainer>
                <img src={Img33} alt=""/>
            </CarsContainer>
        </AboutusContainer>

    )
}
