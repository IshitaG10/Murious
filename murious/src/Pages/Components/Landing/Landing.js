import React from 'react'
import "./Landing.css"
import Globe from "./Patterns/Globe.svg"
import Logo from "./Patterns/Logo.png"
import CountdownTimer from './CountdownTimer/CountdownTimer'
function Landing() {
  return (  
    <div>
      <div className='background-section-landing'>
        <div className="logo-murious">
          <img src={Logo}/>
          <CountdownTimer
            countdownTimestampMs={1648001450000}/>
        </div>
        <img src={Globe} className="globe-1"/>
        <img src={Globe} className="globe-2"/>
      </div>
    </div>
  )
}
export default Landing