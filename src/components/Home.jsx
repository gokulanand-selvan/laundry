import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'
import Client from './Client'

export default function Home() {
    //    const validateNumber = (value) =>{
    //     if (value != number()) {
    //         <p>Enter valid input</p>
    //     }
    //    }
    //   return (
    // validateName = (value) => {
    //     let error
    //     if (!value) {
    //       error = 'Name is required'
    //     } else if (value.toLowerCase() !== 'naruto') {
    //       error = "Jeez! You're not a fan 😱"
    //     }
    //     return error
    //   }


    // <div>
    //     <Box>
    //         <p>
    //         Get Our App In Your Phone
    //         </p>
    //         <FormControl>

    //         </FormControl>
    //     </Box>
    // </div>
    //   )

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
        </Box>
    )
}
