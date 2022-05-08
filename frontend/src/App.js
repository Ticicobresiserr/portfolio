import React, { useContext } from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import About from './components/about/About';
import Intro from "./components/intro/Intro";
import ProductList from './components/productList/ProductList';
import Toggle from './components/toggle/Toggle';
import Contact from './components/contact/Contact';
import { ThemeContext } from "./context/context";
import Nabvar from './components/navbar/Nabvar';
import Carrousel from './components/carrousel/Carrousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./components/carrousel/Player";
import Carousel from 'react-elastic-carousel';

export default function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (


    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode ? "white" : "#222",
      }}
    >
      {/* <Routes>
      <Route path='/' element={<Intro />} /> </Routes> */}
      <BrowserRouter>
        <Toggle />
        <Intro />
        <Carrousel />
        <About />
        <Nabvar />
        <Contact />
      </BrowserRouter>
    </div>

  );
}
