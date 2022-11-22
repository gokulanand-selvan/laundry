import { Box } from '@chakra-ui/react';
import React from 'react';
import work1 from '../components/images/work1.gif';
import work2 from '../components/images/work2.gif';
import work3 from '../components/images/work3.gif';
import work4 from '../components/images/work4.gif';
import work5 from '../components/images/work5.gif';
import work6 from '../components/images/work6.gif';
import process from '../components/images/process.png';

export default function Work() {

    const workImages = [
        { image: work1 },
        { image: work2 },
        { image: work3 },
        { image: work4 },
        { image: work5 },
        { image: work6 },
    ]

    return (
        <Box sx={{height:"30rem", paddingBottom:"13rem"}} >
            <div style={{alignItems:"center",textAlign:"center", }}>

                <p>How we work</p> <br />
                <p>
                    Just drop-off your clothes at any of our stores or request for
                    a pick up online. We will do the rest!
                </p>
            </div>
            <Box sx={{ display: "flex",}} >
                {workImages.map((working, index) => (
                    <img style={{ width: "15rem" }} src={working.image} key={index} alt="local" />
                ))}
            </Box>
            <Box sx={{  }}>
                <img style={{  width: "93rem",}} src={process} alt="process" />
            </Box>
        </Box>
    )
}
