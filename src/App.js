import React from 'react';
import "./App.css";
import { Analytics } from "@vercel/analytics/react"
import "./components/header/darkMode.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
//import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';
import Work from './components/work/Work';
import BlackFireCursor from './components/home/BlackFireCursor.jsx'

const App = () => {
  return (
    <>
      <Header />
      <BlackFireCursor />
      <main className='main'>
        <Home />
        <About />
        <Skills/>
        <Services/>
        <Qualification/>
        <Work />
       <Analytics/>
        <Contact />
      </main>
      <Footer />
      <Scrollup />
    </>
  );
};

export default App;