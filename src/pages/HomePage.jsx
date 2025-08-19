import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Ecosystem from '../components/Ecosystem';
import Events from '../components/Events';
import Partners from '../components/Partners';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Ecosystem />
      <Events />
      <Partners />
    </>
  );
}
