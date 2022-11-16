import React from 'react'
import { Box, Button, Divider, Image, } from '@chakra-ui/react'
import Promac from "./images/logo.webp"

export const Navbar = () => {

    return (
        <Box>
            <Box sx={{
                background: "#f4f4f4",
                height: '50px',
               
            }} >
                <ul style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    listStyleType: "none",
                    margin: '0px',
                    paddingTop:"13px"

                }}>
                    <li>
                        <a href='link' style={{ textDecoration: "none", color: ' inherit' }}>  Request </a>
                    </li>
                    <li>
                        mob number
                    </li>
                    <li>
                        <a href='link' style={{ textDecoration: "none", color: ' inherit' }}>  Find the laundry room colsest to you </a>
                    </li>
                </ul>
            </Box>

            <Box>
                <ul style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    listStyleType: "none",
                    alignItems: "center",
                }}>
                    <li>
                        <a href='link' style={{ textDecoration: "none", color: ' inherit' }}> <Image sx={{ height: "60", width: "158" }}
                            src={Promac} /> </a>
                    </li>
                    <li>
                        <a href='link' style={{ textDecoration: "none", color: ' inherit' }}>   ABOUT</a>
                    </li>
                    <li>
                        <a href='link' style={{ textDecoration: "none", color: ' inherit' }} >  PRICING</a>
                    </li>
                    <li>
                        <a href='link' style={{ textDecoration: "none", color: ' inherit' }}>  OFFER</a>
                    </li>
                    <li>
                        <a href='link' style={{ textDecoration: "none", color: ' inherit' }}>  SERVICE</a>
                    </li>
                    <li>
                        <a href='link' style={{ textDecoration: "none", color: ' inherit' }}>    LOCATION</a>
                    </li>
                    <li>
                        <a href='link' style={{ textDecoration: "none", color: ' inherit' }}>  CONTACT</a>
                    </li>
                    <li>
                        <a href='link' style={{ textDecoration: "none", color: ' inherit' }}>   BLOG</a>
                    </li>
                    <li>
                        <a href='link' style={{ textDecoration: "none", color: ' inherit' }}>  
                        
                         <Button colorScheme='teal' variant='outline' sx={{ padding: '11px 23px' }}>REQUEST PICK UP </Button> </a>
                    </li>
                    <li>
                        <a href='link' style={{ textDecoration: "none", color: ' inherit' }}>    LOGO</a>
                    </li>

                </ul>
            </Box>
            <Divider orientation='horizontal'  />

            
        </Box>

    );
}