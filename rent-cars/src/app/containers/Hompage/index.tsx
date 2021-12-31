import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { BookCard } from "../../components/BookCard";

import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/NavBar";
import { Foot } from "../../components/footer/footer";
import { AboutUs } from "./aboutUs";
import { BookSteps } from "./bookSteps";
import { TopCars } from "./topCars";
import { TopSection } from "./topSection";

const PageContainer = styled.div`
${tw`flex flex-col items-center w-full h-full overflow-x-hidden `

}
`

export function HomePage() {
    return (
    <PageContainer>
        <Navbar />
        <TopSection />
        
        
        <Marginer direction="vertical" margin="10em"/>
        <BookSteps />
        <Marginer direction="vertical" margin="10em"/>
        <TopCars />
        <Marginer direction="vertical" margin="3em"/>
        <BookCard />
        <Marginer direction="vertical" margin="8em"/>
        <AboutUs />
       
        <Foot />
        
    </PageContainer>
    )
}