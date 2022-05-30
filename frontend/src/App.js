import React, { useContext } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter } from 'react-router-dom';
import About from './components/about/About';
import Intro from "./components/intro/Intro";
import Toggle from './components/toggle/Toggle';
import Contact from './components/contact/Contact';
import { ThemeContext } from "./context/context";
import Nabvar from './components/navbar/Nabvar';
import Carrousel from './components/carrousel/Carrousel';

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
