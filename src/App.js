import './App.css';
import React from 'react';

import {Navbar} from './components/Navbar';
import Slider from './components/Slider';
import Home from './components/Home';
import Reception from './components/Reception';
import { End } from './components/End';
// import Imageslider from './components/Imageslider';
function App() {
  return (
    <>
  <Navbar />
  <Slider />
  <Home />
  <Reception />
  <End />
  </>
  )
  }
export default App;
