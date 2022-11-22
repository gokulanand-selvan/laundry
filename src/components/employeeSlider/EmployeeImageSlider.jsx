import { Box, } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import testimonial from '/Users/gokulanand/Documents/react/laundry/src/components/images/testimonial.jpg'

// const sliderStyles = {
//     position: "relative",
//     height: "100vh",
// };

const EmployeeImageSlider = ({ employeeImage }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
            const timer = setInterval(() => {
                // console.log("render", currentIndex, employeeImage.length ,);
                if(currentIndex === employeeImage.length - 1){
                    setCurrentIndex(0);   
                }
                else setCurrentIndex(currentIndex + 1);
            },5000)
            return () => clearInterval(timer)
},[currentIndex]);
    
const imageStyle = {
    borderRadius: '90px',
}
    return (
        <Box >
            <Box sx={{ backgroundImage: `url(${testimonial})`,paddingBottom:"10rem",paddingLeft:"45rem",backgroundSize:'100%',backgroundRepeat:'no-repeat',top:"80px",paddingTop:'20rem',}} >
            <img style={imageStyle} src={employeeImage[currentIndex].name} alt="emim"/>
            </Box>
        </Box>
    );
};

export default EmployeeImageSlider;

