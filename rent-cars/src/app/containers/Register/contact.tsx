import { Navbar } from "../../components/NavBar";
import { Marginer } from "../../components/marginer";
import React from "react";
import {  SignUp } from "../../components/Sign Up";




export function ContactPage(){
    return (
        <>
        <Navbar />
        
        <Marginer direction="vertical" margin="10em"/>
        <SignUp />
        </>
    )
}