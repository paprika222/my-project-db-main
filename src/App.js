import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Insert from './page/insert';
import Home from './page/Home';
import About from './page/About';
import Order from './page/ListOrder'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path='/order' element={<Order/>}/>
            <Route path='/insert' element={<Insert/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}


export default App;
