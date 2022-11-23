import React from 'react'
import { Box, Button, Image, } from '@chakra-ui/react'
import Promac from "./images/logo.webp"

export const Navbar = () => {

    return (
            
        <Box sx={{position:"fixed",width:"100%",zIndex:1,}}>
            <Box sx={{
            }} >
                <ul style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    height:"30px",
                    listStyleType: "none",
                    margin: '0px',
                    width: "100%",
                    backgroundColor: "black",
                    // position:"fixed",
                    alignItems:"center",
                    textAlign:"center",
                    paddingTop:"4px",

                }}>
                    <li>
                        <a href='link' style={{ textDecoration: "none", color: ' white' }}>  Request </a>
                    </li>
                    <li>
                        📞  <a href='link' style={{ textDecoration: "none", color: ' white' }}> 8754916425 </a>
                    </li>
                    <li>
                        <a href='link' style={{ textDecoration: "none", color: ' white' }}>  Find the laundry room colsest to you </a>
                    </li>
                </ul>
            </Box>

            <Box sx={{ textAlign: "center", display: "flex", flexDirection: "row", justifyContent: "space-evenly" }} >
                <ul style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    listStyleType: "none",
                    alignItems: "center",
                    background: "white",
                    width: "100%",
                    // position:"fixed",
                    // marginTop: '-14px'
                    height:"80px",
                }}>
                    <li>
                    </li>
                    <a href='link' style={{ textDecoration: "none", color: ' inherit', }}> <Image height="40px" width="120px" color="GrayText" src={Promac} /> </a>
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
        </Box>

    );
}