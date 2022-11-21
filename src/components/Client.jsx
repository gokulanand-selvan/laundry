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
                <h2>
                    Our Clients
                </h2>
                <p>
                    Promac works some many big brands in short period of time.
                </p>
            </Box>
        </Box>
    )
}
