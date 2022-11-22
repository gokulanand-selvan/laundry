import { Box, Divider, Image } from '@chakra-ui/react'
import React from 'react'
import Promac from "./images/logo.webp"


export const End = () => {

    return (
        <Box sx={{ display: "flex", justifyContent: "space-evenly", height: '20em', paddingTop: "90px", backgroundColor: "gray" }} >
            <Box sx={{ width: "15rem" }}>
                <a href='link' style={{ textDecoration: "none", color: ' inherit' }}> <Image height="40px" width="120px" src={Promac} /> </a>
                <br />
                <p style={{ color: 'white' }}>
                    Promac is one of the largest online laundry service providers in Bangalore. We are dedicated to provide you with the best care for your garments. Call / Drop-In or Schedule a Pick-Up through our App !
                </p>
            </Box>
            <Divider orientation='vertical' />
            <Box>
                <h3>
                    Quick Links
                </h3>
                <ul style={{
                    listStyleType: "none",

                }}>

                    <li>
                        <a href='link' style={{ textDecoration: "none", color: 'white' }}>   ABOUT</a>
                    </li>
                    <li>
                        <a href='link' style={{ textDecoration: "none", color: 'white' }} >  PRICING</a>
                    </li>
                    <li>
                        <a href='link' style={{ textDecoration: "none", color: 'white' }}>  OFFER</a>
                    </li>
                    <li>
                        <a href='link' style={{ textDecoration: "none", color: 'white' }}>  SERVICE</a>
                    </li>
                    <li>
                        <a href='link' style={{ textDecoration: "none", color: 'white' }}>    LOCATION</a>
                    </li>
                    <li>
                        <a href='link' style={{ textDecoration: "none", color: 'white' }}>  CONTACT</a>
                    </li>
                    <li>
                        <a href='link' style={{ textDecoration: "none", color: 'white' }}>   BLOG</a>
                    </li>
                </ul>
            </Box>
            <Divider orientation='vertical' />
            <Box>
                <h3>
                    Our services
                </h3>
                <ul style={{
                    listStyleType: "none",
                }}>
                    <li>
                        <a href='link' style={{ textDecoration: "none", color: 'white' }}>    Steam Ironing Service</a>
                    </li>
                    <li>
                        <a href='link' style={{ textDecoration: "none", color: 'white' }} >  Dry Cleaning Service</a>
                    </li>
                    <li>
                        <a href='link' style={{ textDecoration: "none", color: 'white' }}>  Shoe Laundry Service</a>
                    </li>
                    <li>
                        <a href='link' style={{ textDecoration: "none", color: 'white' }}>  Deep Cleaning Service</a>
                    </li>
                    <li>
                        <a href='link' style={{ textDecoration: "none", color: 'white' }}>    Franchise Opportunity
                        </a>
                    </li>
                    <li>
                        <a href='link' style={{ textDecoration: "none", color: 'white' }}>  Laundry & Dry Cleaning Franchise India
                        </a>
                    </li>
                    <li>
                        <a href='link' style={{ textDecoration: "none", color: 'white' }}>   Franchise Opportunity in India with Low Investment
                        </a>
                    </li>
                </ul>
            </Box>
            <Divider orientation='vertical' />
            <Box>
                Google play
            </Box>
        </Box>
    )
}