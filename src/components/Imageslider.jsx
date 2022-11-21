import { useEffect, useState } from "react";

const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
};

// const rightArrowStyles = {
//     position: "absolute",
//     top: "50%",
//     transform: "translate(0, -50%)",
//     right: "32px",
//     fontSize: "45px",
//     color: "#fff",
//     zIndex: 1,
//     cursor: "pointer",
//     backgroundColor: "black"
// };

// const leftArrowStyles = {
//     position: "absolute",
//     top: "50%",
//     transform: "translate(0, -50%)",
//     left: "32px",
//     fontSize: "45px",
//     color: "#fff",
//     zIndex: 1,
//     cursor: "pointer",
//     backgroundColor: "black"
// };

const sliderStyles = {
    position: "relative",
    height: "100%",
};

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // const goToPrevious = () => {
    //     const ifFirstSlide = currentIndex === 0;
    //     const newIndex = ifFirstSlide ? slides.length - 1 : currentIndex - 1;
    //     setCurrentIndex(newIndex);
    // };

    // const goToNext = () => {
    //     const isLastSlide = currentIndex === slides.length - 1;
    //     const newIndex = isLastSlide ? 0 : currentIndex + 1;
    //     setCurrentIndex(newIndex);
    // };
    
        useEffect(() => {
            const timer = setInterval(() => {
                console.log("render", currentIndex, slides.length );
                if(currentIndex === slides.length - 1){
                    setCurrentIndex(0);   
                }
                else setCurrentIndex(currentIndex + 1);
            }, 2000)
            return () => clearInterval(timer)
        }
            ,[currentIndex]);
      

    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${slides[currentIndex].url})`,
    };
    return (
        <div style={sliderStyles}>
            {/* <div>
                <div onClick={goToPrevious} style={leftArrowStyles}>
                    ❰
                </div>
                <div>
                </div>
                <div onClick={goToNext} style={rightArrowStyles}>
                    ❱
                </div>
            </div> */}
            <div style={slideStylesWidthBackground}></div>
        </div>
    );
};


export default ImageSlider;