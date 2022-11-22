import { Box } from '@chakra-ui/react'
import React from 'react'

export default function Client() {
    
    return (
        <Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: 'center',
                height: "12vh",
                alignItems: "center",
                position: "relative",
            }}>
                <h2 style={{color:"GrayText",fontWeight:"bolder",fontSize:"50px"}}>
                    Our Clients
                </h2>
                <p>
                    <i> Promac works with big brands in short period of time. </i>
                </p>
            </Box>
        </Box>
    )
}
