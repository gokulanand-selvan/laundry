import { Box, } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import testimonial from '/Users/gokulanand/Documents/react/laundry/src/components/images/testimonial.jpg'


const EmployeeImageSlider = ({ employeeImage }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            // console.log("render", currentIndex, employeeImage.length ,);
            if (currentIndex === employeeImage.length - 1) {
                setCurrentIndex(0);
            }
            else setCurrentIndex(currentIndex + 1);
        }, 5000)
        return () => clearInterval(timer)
    }, [currentIndex]);

    const imageStyle = {
        borderRadius: '90px',
        border: "solid yellow 4px",
        padding: "3px",
    }
    return (
        <Box>
            <Box sx={{ position: "relative", backgroundImage: `url(${testimonial})`, backgroundRepeat: 'no-repeat', height: '100%', filter: "blur(8px)", webkiFilter: "blur(8px)", backgroundPosition: 'center', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", padding: '30% 0 30% 0' }}> </Box>
            <Box sx={{ position: "absolute", top: "55%", left: '50%', transform: 'translate(-50%, -50%)', }} >
                <img style={imageStyle} src={employeeImage[currentIndex].name} alt="emim" />
                <h1 style={{ fontSize: "50px", color: "gold", fontWeight: "bolder", }}> {employeeImage[currentIndex].identity} </h1>
                <p style={{ fontSize: "25px", color: "white", fontWeight: "bold" }} > {employeeImage[currentIndex].posting} </p>
                <p style={{ fontSize: "25px", color: "white", fontWeight: "normal" }} > {employeeImage[currentIndex].Review} </p>
            </Box>
        </Box>
    );
};
export default EmployeeImageSlider;

