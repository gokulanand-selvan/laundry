import './App.css';
import React from 'react';

import {Navbar} from './components/Navbar';
import Slider from './components/Slider';
import Home from './components/Home';
// import Imageslider from './components/Imageslider';
function App() {
  return (
    <>
  <Navbar />
  <Slider />
  {/* <Imageslider /> */}
  <br></br>
  <Home />
  </>
  )
  }
export default App;
