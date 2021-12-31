import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {
  faCalendarAlt,
  faMapMarkedAlt,
  faCarSide,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
/* background: whitesmoke; */
  ${tw`flex flex-col items-center w-full pt-3 pb-3 lg:pt-28 lg:pb-28`};
`;

const Title = styled.div`
  ${tw`text-3xl font-extrabold text-black lg:text-5xl`}
`;
const StepsContainer = styled.div`
  ${tw`flex flex-wrap justify-evenly mt-7 lg:mt-16`};
`;

const StepContainer = styled.div`
  ${tw`flex flex-col items-center m-3 transition-colors md:w-96 hover:text-red-500`};
`;

const Step = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`flex items-center justify-center p-6 rounded-lg `}
`;

const StepTitle = styled.h4`
  ${tw`mt-4 text-lg font-black text-black `};
`;

const StepDescription = styled.p`
  ${tw`w-10/12 text-xs text-center text-gray-600 md:text-sm`};
`;

const StepIcon = styled.span`
  ${tw`text-3xl text-purple-500 `}
`;

export function BookSteps() {
  return (
    <Container>
      <Title>Our working sites</Title>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Choose Location</StepTitle>
          <StepDescription>Get better time for the <br/>next move</StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Pick up Time</StepTitle>
          <StepDescription>Take at your own convinient<br/> time</StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCarSide} />
            </StepIcon>
          </Step>
          <StepTitle>Check your Car</StepTitle>
          <StepDescription>Pick the best which you<br/> can </StepDescription>
        </StepContainer>
      </StepsContainer>
    </Container>
  );
}
