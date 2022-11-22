import { useEffect, useState } from "react";

const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
};

const sliderStyles = {
    position: "relative",
    height: "100%",
};

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
            const timer = setInterval(() => {
                // console.log("render", currentIndex, slides.length );
                if(currentIndex === slides.length - 1){
                    setCurrentIndex(0);   
                }
                else setCurrentIndex(currentIndex + 1);
            },5000)
        
            return () => clearInterval(timer)


        },[currentIndex]);
      

    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${slides[currentIndex].url})`,
    };
    return (
        <div style={sliderStyles}>
            <div style={slideStylesWidthBackground}></div>
        </div>
    );
};

export default ImageSlider;

