import { Box } from '@chakra-ui/react'
import React from 'react'
import bg from "./images/patternBg.jpg"

export const About = ({ title, subtitle, image,sideimage ,discription}) => {
    return (
        <Box sx={{
         backgroundImage: `url(${bg})`
        }}>
            <Box>
                <h1>
                    {title}
                </h1>
            </Box>
                <Box>
                <img style={{ width: "120px", height: '40px' }} src={image} alt="i" />
                {subtitle}
                </Box>
            <Box>
                <Box sx={{display:"flex",justifyContent:"space-evenly"}}>
                    <img src={sideimage} alt="img" />
                    <p>{discription}</p>
                </Box>
            </Box>
        </Box>
    )
}