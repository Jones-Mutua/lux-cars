import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
    theme?: "filled" | "outlined";
    text: string;
    className?: string;
    
}

const BaseButton = styled.button`
${tw`pt-3 pb-3 pl-5 pr-5 m-1 text-xs
 font-thin font-semibold text-white
  transition-all duration-200 ease-in-out 
  border-2 border-transparent rounded-md outline-none focus:outline-none`}
`;


const OutlineButton = styled(BaseButton)`
${tw`bg-purple-500 hover:bg-transparent hover:text-red-500 hover:border-green-500`}
`;

const FilledButton = styled(BaseButton)`
${tw`text-red-500 bg-transparent border-green-500 hover:text-green-800 hover:border-transparent`};


`;



export function  Button(props: IButtonProps) {
    const  { theme, text,className} = props;

    if(theme === "filled")
    return <FilledButton className={className}>{ text }</FilledButton>
    else 
    return <OutlineButton className={className}>{ text }</OutlineButton>

}