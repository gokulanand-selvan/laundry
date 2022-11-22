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
                title="About Us.."
                image={Promac}
                subtitle=" Promac is a full service garment care company offering a wide range of services including laundry, ironing and dry cleaning in Kolkata, India. Whether it's men's, women's or children's wear or beddings and upholstery; we are capable of taking care of all. We provide our services to organizations like hotels, hospitals and institutions as well. We are staffed with adequately trained and experienced professionals who are skilful enough to take care of all your laundry and dry cleaning needs. We have a state of the art workshop having environment friendly equipments that gives out best results without compromising with the environment"
                sideimage={clip}
            />
            <EmployeeSlide />
            <Work />
        </Box>
    )
}
