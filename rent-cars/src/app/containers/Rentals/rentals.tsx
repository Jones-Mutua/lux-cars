

import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import { Car } from "../../components/car";
import { Foot } from "../../components/footer/footer";
import { Nav } from "../../components/nav";
import { Navbar } from "../../components/NavBar";

const TopCarsContainer = styled.div`
${tw`flex flex-col items-center justify-center w-full  pl-4 pr-4 mb-10 md:pl-0 md:pr-0`};

`;

const Title = styled.div`
  ${tw`text-3xl font-extrabold text-black lg:text-5xl`}
`;

const CarsContainer = styled.div`
${tw`flex flex-wrap justify-center w-full mt-7 md:mt-10`};
`;

export function RentalsPage() {

   
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
      const testCar3: ICar = {
        name: "Chevloret",
        mileage:"20",
        thumbnailSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl75b8I7wNg0azfkuGDYPhG33Jjq_Il3UvPw&usqp=CAU',
        dailyPrice: 4556,
        monthlyPrice: 676,
        gearType: "manual",
        gas: "Diesel"  
      };
      const testCar4: ICar = {
        name: "Chevloret",
        mileage:"20",
        thumbnailSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkuw3dPWi_OOppB2JBxZtVlUueSP_fU2vf4Q&usqp=CAU',
        dailyPrice: 4556,
        monthlyPrice: 676,
        gearType: "manual",
        gas: "Diesel"  
      };
      const testCar5: ICar = {
        name: "Chevloret",
        mileage:"20",
        thumbnailSrc: 'data:image/jpeg;base64,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',
        dailyPrice: 4556,
        monthlyPrice: 676,
        gearType: "manual",
        gas: "Diesel"  
      };
      const testCar6: ICar = {
        name: "Chevloret",
        mileage:"20",
        thumbnailSrc: 'data:image/jpeg;base64,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',
        dailyPrice: 4556,
        monthlyPrice: 676,
        gearType: "manual",
        gas: "Diesel"  
      };
      const testCar7: ICar = {
        name: "Chevloret",
        mileage:"20",
        thumbnailSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIoK-IYcQYGZsm_FPOoFSkInBkX7xWy4LeKg&usqp=CAU',
        dailyPrice: 4556,
        monthlyPrice: 676,
        gearType: "manual",
        gas: "Diesel"  
      };
      const testCar8: ICar = {
        name: "Chevloret",
        mileage:"20",
        thumbnailSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHYcj0Y7ByTRRoSQjYDzfmVofS2N-sSeoXaw&usqp=CAU',
        dailyPrice: 4556,
        monthlyPrice: 676,
        gearType: "manual",
        gas: "Diesel"  
      };
      const testCar9: ICar = {
        name: "Chevloret",
        mileage:"20",
        thumbnailSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiWjM6c9xFwOcrGBJ4SlNUp3iprFFYUy4yqg&usqp=CAU',
        dailyPrice: 4556,
        monthlyPrice: 676,
        gearType: "manual",
        gas: "Diesel"  
      };
      const testCar10: ICar = {
        name: "Chevloret",
        mileage:"20",
        thumbnailSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcWhpLCWyTMOWnIb3oDhOElcadmeUsbpjX-A&usqp=CAU',
        dailyPrice: 4556,
        monthlyPrice: 676,
        gearType: "manual",
        gas: "Diesel"  
      };
      const testCar11: ICar = {
        name: "Chevloret",
        mileage:"20",
        thumbnailSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRONLxZd0ibZynsHV1bErXtMtWFxodhBxu7cA&usqp=CAU',
        dailyPrice: 4556,
        monthlyPrice: 676,
        gearType: "manual",
        gas: "Diesel"  
      };
      const testCar12: ICar = {
        name: "Chevloret",
        mileage:"20",
        thumbnailSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqlJQNw2x6V8NYM9neeWFV_CH-pRtOCM2SsA&usqp=CAU',
        dailyPrice: 4556,
        monthlyPrice: 676,
        gearType: "manual",
        gas: "Diesel"  
      };
      const testCar13: ICar = {
        name: "Chevloret",
        mileage:"20",
        thumbnailSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1VlyF_K74VrhsCh12DfKgv8vpBGQQQyG0Hg&usqp=CAU',
        dailyPrice: 4556,
        monthlyPrice: 676,
        gearType: "manual",
        gas: "Diesel"  
      };
      const testCar14: ICar = {
        name: "Chevloret",
        mileage:"20",
        thumbnailSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRnXQt58WYjdFsRdtYQRZ3f3APBisk8tEh5g&usqp=CAU',
        dailyPrice: 4556,
        monthlyPrice: 676,
        gearType: "manual",
        gas: "Diesel"  
      };
      const testCar15: ICar = {
        name: "Chevloret",
        mileage:"20",
        thumbnailSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4cFgsyzxTi78gkwTH5rm1IaOeSshM5KD5tw&usqp=CAU',
        dailyPrice: 4556,
        monthlyPrice: 676,
        gearType: "manual",
        gas: "Diesel"  
      };
      const testCar16: ICar = {
        name: "Chevloret",
        mileage:"20",
        thumbnailSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJyYV6Hw7Hu5I-iH-opqccVlbzIJrMej4_Q&usqp=CAU',
        dailyPrice: 4556,
        monthlyPrice: 676,
        gearType: "manual",
        gas: "Diesel"  
      };

    
      
     
 return <TopCarsContainer>
     <Navbar />
     <Nav />
     <Title>Get Your Favorite Motor Car </Title>
     <CarsContainer>
         <Car {...testCar3} />
         <Car {...testCar11} />
         <Car {...testCar12} />
         <Car {...testCar13} />
         <Car {...testCar14} />
         <Car {...testCar1} />
         <Car {...testCar15} />
         <Car {...testCar2} />
         <Car {...testCar6} />
         <Car {...testCar7} />
         <Car {...testCar8} />
         <Car {...testCar9} />
         <Car {...testCar10} />
         <Car {...testCar16} />
         <Car {...testCar5} />
         <Car {...testCar4} />
         
     </CarsContainer>
     <Foot />
 </TopCarsContainer>
}


