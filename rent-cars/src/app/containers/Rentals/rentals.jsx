import { faEllipsisH, faFillDrip, faTachometerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState,useEffect} from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {ICar} from "../../../typings/car";
import { Button } from "../../components/Buttons/index";
import {Link}  from 'react-router-dom';
import axios from "axios";
import { useParams } from 'react-router';


// interface ICarProps extends ICar {

// }


const CarContainer = styled.div`
width: 16.5em ;
min-height: 23em;
max-height: 24em;
box-shadow: 0 1.3px 17px -2px rgba(0,0,0,0.4);

${tw`flex flex-col items-center
 p-3 pb-4 m-1 bg-white rounded-md sm:m-3 md:m-6`}

`;


const CarThumbnail = styled.div`
    width: 100%;
    height: auto;

    img {
        width: 100%;
        height: 100%;
    }

`;

const CarName = styled.h3`
${tw`mt-1 mb-1 text-base font-bold text-black `}
`;

const PriceContainer = styled.div`
${tw`flex justify-start w-full mt-3 `};
`;

const DailyPrice = styled.h3`
${tw`mr-3 text-sm font-bold text-red-500 `};
`;

const MonthlyPrice = styled.h3`
${tw`text-sm font-bold text-gray-500 `};
`;

const SmallText = styled.p`
color: inherit;
${tw`inline-flex text-xs font-thin`}

`

const SmallIcon = styled.span`
${tw`mr-1 text-sm text-gray-400 `};
`;

const CarDetailsContainer = styled.div`
${tw`flex justify-between w-full `};
`;

const CarDetail = styled.span`
${tw`flex items-center `};
`;

const CarInfor = styled.h6`
${tw`text-xs text-gray-400 `};
`;

const Separator = styled.div`
min-width: 100%;
min-height: 1px;
${tw`flex mt-2 mb-2 bg-gray-300 `};

`;


const RentButton = styled(Button)``

// const {name, thumbnailSrc, dailyPrice, monthlyPrice, mileage, gearType,gas }= props;


export function RentalsPage(){

  const [cars, setCars] = useState([]);
  const {_id} = useParams();


  useEffect(() =>  {

  const getCars = async () => {
    try {
      const res = await axios.get("http://localhost:2500/api/car/");
      //  res.status(200).send('Data Successfully obtained');
      console.log("Data Successfully obtained");

const myCar = res.data;
setCars(myCar)
    } catch (error) {
      console.log(error)

    }
  };
  getCars();

}, [cars]);

 return (



<>
  {cars.map((cars, key) => (

 <CarContainer key={key}>

     <CarThumbnail>
         <img src={cars.thumbnailSrc} alt=""/>
     </CarThumbnail>
     <CarName>{cars.name}</CarName>
     <PriceContainer>
         <DailyPrice>${cars.dailyPrice}<SmallText>/day</SmallText></DailyPrice>
         <MonthlyPrice>${cars.monthlyPrice}<SmallText>/month</SmallText></MonthlyPrice>
     </PriceContainer>
     <Separator  />
     <CarDetailsContainer>
         <CarDetail>
             <SmallIcon>
                 <FontAwesomeIcon icon={faTachometerAlt}/>
             </SmallIcon>
             <CarInfor>{cars.mileage}</CarInfor>
         </CarDetail>
         <CarDetail>
             <SmallIcon>
                 <FontAwesomeIcon icon={faEllipsisH}/>
             </SmallIcon>
             <CarInfor>{cars.gearType}</CarInfor>
         </CarDetail>
         <CarDetail>
             <SmallIcon>
                 <FontAwesomeIcon icon={faFillDrip}/>
             </SmallIcon>
             <CarInfor>{cars.gas}</CarInfor>
         </CarDetail>
         
     </CarDetailsContainer>
     <Link to="/cart">
     <RentButton  text="Rent Now" />
     </Link>
 </CarContainer>
 ))}
 
 
</>

)}
