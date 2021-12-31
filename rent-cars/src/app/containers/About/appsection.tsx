import React from "react";
import styled from "styled-components";
import tw from "twin.macro";


const Section = styled.div`
${tw`
pt-10
pb-10
`}
`;
const MainHeading = styled.div`
color: blue;
font-size: 26px;
`;

const Underline = styled.div`
height: 04px;
/* background-color: red; */
${tw`
// h-16
w-16
bg-purple-500
mt-2.5
mb-2.5
`}

`;

const Text = styled.p`
${tw`

items-center
text-3xl
flex
flex-wrap
`}

`

export function AppSection(){
    return (
        <Section >
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <MainHeading>Our Company</MainHeading>
                        <Underline className=" mx-auto"></Underline>
                   <Text>Lorem ipsum dolor sit amet, consectetur 
                       adipisicing elit. Aut magnam error facere, 
                       culpa distinctio saepe, quos velit expedita eos,
                       xercitationem rerum. Et numquam ipsum,
                        dicta veritatis nostrum tenetur deserunt nam.</Text>
                    </div>
                </div>
            </div>

        </Section>
    )
}