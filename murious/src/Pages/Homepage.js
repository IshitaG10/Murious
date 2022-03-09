import React from 'react';
import EventsSection from './Components/EventCards/EVENTS/EVENTS';
import Navbar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing';
import About from './Components/About/About';
import Team from './Components/Team/Team';
import Eventschedule from './Components/EventSchedule/EventSchedule';
import Footer from './Components/Footer/Footer';
import FAQ from './Components/FAQ/FAQ';
import Contact from './Components/Contact/Contact';
import Sponsors from './Components/SponsorsSection/Sponsors';
import SpecialThanks from './Components/SpecialThanks/SpecialThanks';

export default function Homepage() {
  const cursor = document.querySelector(".pointer");

  document.addEventListener("mousemove",(event)=>{
    cursor.style.left = 
    `${event.clientX}px`;
    cursor.style.top = 
    `${event.clientY}px`;
    cursor.style.display="block";
  })
  document.addEventListener("mouseleave",()=>{
    cursor.style.display = "none";
  })
  return (
    <div className='backgroud-web'>
      <div class="pointer"></div>
      <Navbar/>
      <div className='home-page'> 
        <Landing/>
      </div>
      <About/>
      <EventsSection/>
      <Sponsors/>
      <SpecialThanks/>
      <Team/>
      <Eventschedule/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </div>
  )
}