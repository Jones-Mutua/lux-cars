import { Navbar } from "../../components/NavBar";
import { Marginer } from "../../components/marginer";
import React from "react";
import Login from "../../components/Sign In";
// import { useSelector } from "react-redux";
// import { selectUser } from "../../../features/userSlice";
// import { RentalsPage } from "../Rentals/rentals";



export function LoginPage(){
    // const user = useSelector(selectUser)
    return (
        <>
        <Navbar />
        <Marginer direction="vertical" margin="10em"/>
       {/* {user ? <RentalsPage /> : <Login />} */}
    <Login />
        </>
    )
}