import ImageSlider from "./Imageslider";
import banner1 from './images/home1.jpg'
import banner2 from './images/home2.jpg'
import banner3 from './images/banner3.jpg'


const App = () => {
    const slides =
        [

            {
                url: banner1, title: "banner1"
            },
            {
                url: banner2, tittle: "banner2"
            },
            {
                url: banner3, tittle: "banner2"
            }
        ];
    const containerStyles = {
        width: "100%",
        height: "100vh",
        margin: "0 auto",
    };
    return (
        <div>
            <div style={containerStyles}>
                <ImageSlider slides={slides} />
            </div>
        </div>
    );
};

export default App;