import './style/App.css';
import React, { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

import { Routes, Route } from 'react-router-dom';
import { Element } from 'react-scroll';

import HomePage from './pages/HomePage';
import Navbar from './components/NavbarView';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ServicePage from './pages/ServicesPage';
import Footer from './components/FooterView';

function Index() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
          <Element name='home'>
            <HomePage />
          </Element>

          <Element name='about' className='h-full'>
            <AboutPage />
          </Element>

          <Element name='service' className='h-full'>
            <ServicePage />
          </Element>

          <Element name='skills' className='h-full'>
            <SkillsPage />
          </Element>

          <Element name='contact' className='h-full'>
            <ContactPage />
          </Element>
      <Footer />
    </>
  );
}

export default Index;
