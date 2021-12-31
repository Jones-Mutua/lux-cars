import React from "react";
import { Foot } from "../../components/footer/footer";
import { Navbar } from "../../components/NavBar";
import { AppSection } from "./appsection";
import {Aboutus} from "./index"
import { Section } from "./section";


export function AboutPage() {
 return (
     <>
     <Navbar />
     <Section />
     <Aboutus />
     {/* <Section /> */}
     
     <AppSection />
     <Foot />
     </>
 )
}