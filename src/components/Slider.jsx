import Imageslider from "./Imageslider";
import banner1 from './images/home1-banner1.jpg'
import banner2 from './images/home-2-banner2.jpg'
const App = () => {
    const slides =
        [
            {
                image: { banner1 }, title: "banner1"
            },
            {
                image: { banner2 }, tittle: "banner2"
            },
            {
                image: { banner2 }, tittle: "banner2"
            }
        ];
    const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
    };
    return (
        <div>
            <div style={containerStyles}>
                <Imageslider slides={slides} />
            </div>
        </div>
    );
};

export default App;