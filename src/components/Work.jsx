import { Box } from '@chakra-ui/react';
import React from 'react';
import work1 from '../components/images/work1.gif';
import work2 from '../components/images/work2.gif';
import work3 from '../components/images/work3.gif';
import work4 from '../components/images/work4.gif';
import work5 from '../components/images/work5.gif';
import work6 from '../components/images/work6.gif';
import process from '../components/images/process.png';
import servicebground from '../components/images/servicebground.png';

export default function Work() {

const workImages = [
{image:work1},
{image:work2},
{image:work3},
{image:work4},
{image:work5},
{image:work6},
]

  return (
    <Box>
        <Box sx={{display:"flex" ,flexDirection:"column" ,justifyContent:"center",alignItems:"center" } }>

            <p>How we work</p> <br />
            <p>
            Just drop-off your clothes at any of our stores or request for
a pick up online. We will do the rest!
            </p>
        </Box>
        <Box >
 {workImages.map((working,index)=>(
    <img style={{width:"15rem"}} src={working.image} key={index} alt="local" />
 ))}
 <img style={{width:"90rem",paddingRight:'40%'}} src={process} alt="process" />
        </Box>

        <Box sx={{bacgroundImage:`url(${servicebground})`}}>

        </Box>
    </Box>
  )
}
