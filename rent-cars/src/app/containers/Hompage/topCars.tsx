import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import { Car } from "../../components/car";

const TopCarsContainer = styled.div`
/* background: whitesmoke; */
${tw`flex flex-col items-center justify-center w-full max-w-screen-lg pl-4 pr-4 mb-10 md:pl-0 md:pr-0`};

`;

const Title = styled.div`
  ${tw`text-3xl font-extrabold text-black lg:text-5xl`}
`;

const CarsContainer = styled.div`
${tw`flex flex-wrap justify-center w-full mt-7 md:mt-10`};
`;

export function TopCars() {

    const testCar: ICar = {
      name: "Audi",
      mileage:"20",
      thumbnailSrc: 'https://clipground.com/images/adobe-photoshop-7-clipart.png',
      dailyPrice: 4556,
      monthlyPrice: 676,
      gearType: "auto",
      gas: "petrol"  
    };
    const testCar1: ICar = {
        name: "Mercedes",
        mileage:"203",
        thumbnailSrc: 'https://www.pcclean.io/wp-content/gallery/geely-cars-wallpapers/Geely-2.jpg',
        dailyPrice: 4556,
        monthlyPrice: 676,
        gearType: "auto",
        gas: "petrol"  
      };
      const testCar2: ICar = {
        name: "Chevloret",
        mileage:"20",
        thumbnailSrc: 'https://th.bing.com/th/id/OIP.vciTP1uxTfwTREKTw2brcAHaEs?pid=ImgDet&rs=1',
        dailyPrice: 4556,
        monthlyPrice: 676,
        gearType: "manual",
        gas: "Diesel"  
      };

      

 return <TopCarsContainer>
     <Title>Premium  Top Deals</Title>
     <CarsContainer>
         <Car {...testCar} />
         <Car {...testCar1} />
         <Car {...testCar2} />
         
     </CarsContainer>
 </TopCarsContainer>
}