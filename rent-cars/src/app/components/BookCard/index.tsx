import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { Button } from '../Buttons';
import { Marginer } from "../marginer";
import { faCalendarAlt, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import  { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import { SCREENS } from '../responsive';




const ItemContainer = styled.div`
${tw`relative flex `}


`


const CardContainer = styled.div`
min-height: 5.3em;
box-shadow: 0 1.3px 12px -3px rgba(0,0,0,0.4);
${tw`flex items-center 
justify-center pt-1 pb-1
pl-2 pr-2 bg-white rounded-md
 md:pt-2 md:pb-2 md:pl-9 md:pr-9`};

`;
 const Icon = styled.span`
 ${tw`mr-1 text-xs text-red-500 fill-current md:text-base md:mr-3`};
 
 `;


 const   Name  = styled.span`
 ${tw`text-xs text-gray-600 cursor-pointer select-none md:text-sm`};
 
 `;
 const SmallIcon = styled.span`
 ${tw`ml-1 text-xs text-gray-500 fill-current md:text-base`}
 `

const LineSeparator = styled.span`
width: 2px;
height: 45%;
${tw`ml-2 mr-2 bg-gray-300 md:mr-5 md:ml-5`};


`;


const DateCalendar = styled(Calendar)`
position: absolute;
max-width: none;
top: 2em;
left: -6em;
user-select: none;

${({ offset } :any)  => offset && css`
left: -6em;
` }



@media (min-width: ${SCREENS.md}) {
  top: 3.5em;
  left: -2em;
}
`as any;

export function     BookCard () {
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
    const [returnDate, setReturnDate] = useState<Date>(new Date());
    const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

    const toggleStartDateCalendar = () => {
            

       setStartCalendarOpen(!isStartCalendarOpen);
       if(isReturnCalendarOpen)setReturnCalendarOpen(false);
    }
    const toggleReturnDateCalendar = () => {
            

        setReturnCalendarOpen(!isReturnCalendarOpen);
        if(isStartCalendarOpen)setStartCalendarOpen(false);
     }
 

  return <CardContainer>
      <ItemContainer>
          <Icon>
              <FontAwesomeIcon  icon={faCalendarAlt}   />
          </Icon>
          <Name onClick={toggleStartDateCalendar}>Pick up date</Name>
          <SmallIcon>
              <FontAwesomeIcon icon={isStartCalendarOpen ? faCaretUp :    faCaretDown}/>
          </SmallIcon>
          {isStartCalendarOpen &&
          <DateCalendar value={startDate} onChange={setStartDate as any} />}
      </ItemContainer>
      <LineSeparator />
      <ItemContainer>
          <Icon>
              <FontAwesomeIcon  icon={faCalendarAlt}   />
          </Icon>
          <Name onClick={toggleReturnDateCalendar}>Return date</Name>
          <SmallIcon>
              <FontAwesomeIcon icon={isReturnCalendarOpen ? faCaretUp :    faCaretDown}/>
          </SmallIcon>
          {isReturnCalendarOpen && ( <DateCalendar offset value={returnDate} onChange={setReturnDate as any}/>)}
      </ItemContainer>
      <Marginer direction="horizontal" margin="2em" />
      <Button text="book your Ride" />
  </CardContainer>
}