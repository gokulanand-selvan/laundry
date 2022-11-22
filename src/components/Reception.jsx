import { Box, Button, Image, Select } from '@chakra-ui/react'
import React from 'react'
import reception from '../components/images/reception.png';


export default function Reception() {

    return (
        <Box sx={{ backgroundColor: "orange", height: '80vh' }}>
            <p style={{ textAlign: 'center' }}>Locate Us</p>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <Box sx={{}}>
                    <Image
                        width='100%'
                        height='70vh'
                        src={reception}
                        alignItems="center" />
                </Box>
                <Box sx={{ paddingRight: '10rem', paddingTop: "13rem" }}>
                    <p>select Your City</p>
                    <Select sx={{ width: "25rem", height: '2rem' }} placeholder='Select City' size='lg'>
                        <option value='option1'> Erode</option>
                        <option value='option2'>salem</option>
                        <option value='option3'>coimbatore</option>
                    </Select><br />
                    <Button colorScheme='teal' variant='outline' color="Background"  > Locate Us </Button>
                </Box>
            </Box>
        </Box>
    )
}
