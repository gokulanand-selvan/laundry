import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'
import { About } from './About'
import Client from './Client'
import Promac from "./images/logo.webp"
import clip from "./images/clip.png"
import EmployeeSlide from './employeeSlider/EmployeeSlide'
import Work from './Work'

export default function Home() {
   
    return (
        <Box>
            <Box>
                <FormControl sx={{
                    display: "flex",
                    justifyContent: 'center',
                    backgroundColor: '#c0c0c0',
                    height: "12vh",
                    alignItems: "center",
                    position: "relative",
                }} >
                    <FormLabel sx={{
                        paddingRight: "5%", lineHeight: '44px', fontSize: '18px', fontFamily: 'inherit', fontWeight: 500,
                    }}>
                        <h4> Get Our App In Your Phone </h4> </FormLabel>
                    <Input sx={{
                        width: "15%", height: "40px"
                    }}
                        type='tel' placeholder='phone number' />

                    <Button type="submit" sx={{
                        height: "46px", background: "#df6518"
                    }} >GET UPDATES </Button>
                </FormControl>
            </Box>
            <Client />
            <About
                image={Promac}
                title="About Us.."
                subtitle=" is a full service garment care company offering a wide range of services including laundry, ironing and dry cleaning in Kolkata, India. Whether it's men's, women's or children's wear or beddings and upholstery; we are capable of taking care of all. We provide our services to organizations like hotels, hospitals and institutions as well. We are staffed with adequately trained and experienced professionals who are skilful enough to take care of all your laundry and dry cleaning needs. We have a state of the art workshop having environment friendly equipments that gives out best results without compromising with the environment"
                sideimage={clip}
                discription="WHY WE ARE BEST FOR YOU Over more than 55 years Hollywood Dry Cleaners has made significant business growth and market share in the cleaning and launderette industry.OUR HISTORYEstablished in 1962. Hollywood dry cleaners is a full service garment care company with more than 50 years of experience. VISION & MISSION Our company provides top quality service, combining the newest in technology and environmentally-friendly equipments.GUIDING VALUES & BELIEFS We believe in “Actions speak louder than words” and it reflects in our work clearly. Our Quality of work is our first promotional step. MORE THAN JUST DRY CLEANING Wide range of dry cleaning include not only clothing’s but also special items such as furnishing, leather, curtains, handbags & accessories.PERSONALIZED EXPERIENCE Our staff takes great care that your garments are cleaned and finished as per your satisfaction. Your precious garment is in safe hands with us. "
                />
            <EmployeeSlide  />    
            <Work />
        </Box>
    )
}
