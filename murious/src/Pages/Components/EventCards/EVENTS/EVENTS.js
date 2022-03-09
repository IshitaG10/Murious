import React from 'react'
import './EVENTS.css'
import e1 from './images/e1.jpg'
import e2 from './images/e2.jpg'
import e3 from './images/e3.jpg'
import e4 from './images/e4.jpg'
import e5 from './images/e5.jpg'
import e6 from './images/e6.jpg'
import e7 from './images/e7.jpg'
import e8 from './images/e8.jpg'
import Card from '../CARDS/CARDS';
import { useEffect } from 'react';
function EVENTS() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='event-page' id='events-murious'>
      <div className="events-head-bg"></div>
    <div className='events-jyc'>
      <div className='events-heading'>
        Events
        <div className='eventsheading-u'/>
      </div>
      <div className='events-container'>
        {/* EVENT 6 */}
        <Card
          img={e1}
          title="TECH TALKS"
          date=""
          heading="Tech Talks" 
          about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          link='//www.google.com' 
          />

        <Card
          img ={e2}
          title="TECH TALKS"
          date=""
          about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          link='//www.facebook.com' 
        />
        <Card
          img ={e3}
          title="CODE QUEST"
          date=""
          about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
      
        <Card
       img ={e4}
       title="SPOT THE BUG"
       date=""
       about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
     
        <Card
       img ={e5}
       title="VALORANT"
       date=""
       about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
       
        <Card
       img ={e6}
       title="CODE TRAILS"
       date=""
       about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
        <Card

       img ={e7}
       title="WEB WIZARD"
       date=""
       about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
        <Card

       img ={e8}
       title="CLICK AND BLINK"
       date=""
       about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>

      </div>
    </div>
    </div>

  );
}

export default EVENTS;