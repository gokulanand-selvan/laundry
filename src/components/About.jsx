import { Box } from '@chakra-ui/react'
import React from 'react'
import bg from "./images/patternBg.jpg"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

export const About = ({ title, subtitle, image, sideimage, discription }) => {
    return (
        <Box sx={{
            backgroundImage: `url(${bg})`
        }}>
            <Box sx={{ display: "flex", justifyContent: "center", fontWeight: "bolder", fontSize: "40px" }}>
                <AnimationOnScroll animateIn="animate__bounceIn">
                <h1>
                    {title}
                </h1>
                </AnimationOnScroll>
            </Box>
            <Box >
                <p> <img style={{ width: "120px", height: '40px' }} src={image} alt="i" />
                    {subtitle} </p>
            </Box>
            <Box>
                <Box sx={{ display: "flex", justifyContent: "space-around", lineHeight: 1.42857143, paddingTop: "15px" }}>
                    <img src={sideimage} alt="img" />
                    <br />
                    <p style={{ width: "50%", lineHeight: "2em" }} >  <h1> <b>WHY WE ARE BESTFOR YOU </b> </h1>
                        Over more than 55 years Hollywood Dry Cleaners has made significant business growth and market share in the cleaning and launderette industry.
                        <br />
                        <h2> <b>  OUR HISTORY </b> </h2>
                        Established in 1962. Hollywood dry cleaners is a full service garment care company with more than 50 years of experience.
                        <br />
                        <h2> <b>VISION & MISSION </b> </h2>
                        Our company provides top quality service, combining the newest in technology and environmentally-friendly equipments.
                        <br />
                        <h2> <b>GUIDING VALUES & BELIEFS </b> </h2>
                        We believe in “Actions speak louder than words” and it reflects in our work clearly. Our Quality of work is our first promotional step.
                        <br />
                        <h2> <b>MORE THAN JUST DRY CLEANING </b> </h2>
                        Wide range of dry cleaning include not only clothing’s but also special items such as furnishing, leather, curtains, handbags & accessories.
                        <br />
                        <h2> <b>PERSONALIZED EXPERIENCE </b> </h2>
                        Our staff takes great care that your garments are cleaned and finished as per your satisfaction. Your precious garment is in safe hands with us.
                    </p>
                </Box>
            </Box>
        </Box>
    )
}