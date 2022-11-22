import { Box } from '@chakra-ui/react';
import ramesh from '../images/ramesh.png'
import kuppu from '../images/kuppu.png'
import React from 'react'
import EmployeeImageSlider from './EmployeeImageSlider';

export default function EmployeeSlide() {

    const employeeImage = [
        {name:ramesh , identity:"BaluDas" , posting:"customer" , Review: "  ❝Service is very Satisfactoary❞ " } ,
        {name : kuppu , identity: "RiyaRaj" , posting:"customer" , Review: " ❝Good Response❞ " },
        {name :ramesh , identity: "Ramesh" , posting:"customer" , Review: " ❝Quick Delivery❞ "},
    ]

    // <img src={employeeImage[currentIndex].name} alt="emim"/>
    
    // {employeeImage.map((empimages,currentIndex) => (
    //     <img src={empimages.name} alt="emim"/>
    // ) )}

    return (
        <Box>
            <EmployeeImageSlider employeeImage={employeeImage} />
        </Box>
    )
}
