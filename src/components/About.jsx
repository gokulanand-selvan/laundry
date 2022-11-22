import { Box } from '@chakra-ui/react'
import React from 'react'
import bg from "./images/patternBg.jpg"

export const About = ({ title, subtitle, image,sideimage ,discription}) => {
    return (
        <Box sx={{
         backgroundImage: `url(${bg})`
        }}>
            <Box sx={{display:"flex",justifyContent:"center"}}>
                <h1>
                    {title}
                </h1>
            </Box>
                <Box >
                <img style={{ width: "120px", height: '40px' }} src={image} alt="i" />
                {subtitle}
                </Box>
            <Box>
                <Box sx={{display:"flex",justifyContent:"space-around", lineHeight: 1.42857143,paddingTop:"15px"}}>
                    <img src={sideimage} alt="img" />
                    <br />
                    <p style={{width:"50%"}} >WHY WE ARE BEST
FOR YOU <br />
Over more than 55 years Hollywood Dry Cleaners has made significant business growth and market share in the cleaning and launderette industry.
<br />
OUR HISTORY <br />
Established in 1962. Hollywood dry cleaners is a full service garment care company with more than 50 years of experience.
<br />
VISION & MISSION <br />
Our company provides top quality service, combining the newest in technology and environmentally-friendly equipments.
<br />
GUIDING VALUES & BELIEFS <br />
We believe in “Actions speak louder than words” and it reflects in our work clearly. Our Quality of work is our first promotional step.
<br />
MORE THAN JUST DRY CLEANING <br />
Wide range of dry cleaning include not only clothing’s but also special items such as furnishing, leather, curtains, handbags & accessories.
<br />
PERSONALIZED EXPERIENCE <br />
Our staff takes great care that your garments are cleaned and finished as per your satisfaction. Your precious garment is in safe hands with us.</p>
                </Box>
            </Box>
        </Box>
    )
}