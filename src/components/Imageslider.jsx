import { useEffect, useState } from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

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
            if (currentIndex === slides.length - 1) {
                setCurrentIndex(0);
            }
            else setCurrentIndex(currentIndex + 1);
        }, 4000)

        return () => clearInterval(timer)
    },// eslint-disable-next-line 
    [currentIndex]);

    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${slides[currentIndex].url})`,
    };
    return (
        <div style={sliderStyles}>
            <div style={slideStylesWidthBackground}>
                <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                    {slides[currentIndex].tittle}
                </AnimationOnScroll>
            </div>
            
        </div>
    );
};

export default ImageSlider;

