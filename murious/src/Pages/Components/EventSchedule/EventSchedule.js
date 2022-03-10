import React, { useState } from "react";
import './EventSchedule.css'
import image1 from './Group 7.svg'
import image2 from './Ellipse 5.png'
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAngleDown} from "@fortawesome/free-solid-svg-icons"

 
function Eventschedule() {
 
  const [isOpen1, setIsOpen1] = useState(false)
 
  const onClickEvent1 = () => {
    setIsOpen1(!isOpen1);
  }
 
  const [isOpen2, setIsOpen2] = useState(false)
 
  const onClickEvent2 = () => {
    setIsOpen2(!isOpen2);
  }
 
 
 
  return (
 <div>
    <div className="event-schedule" id="event-schedule-murious">
      <Header/>
      <div className="events-schedule-name">
 
        <div className="schedule-1">
          <div className={`schedule-wrapper-1 ${isOpen1 ? 'schedule-wrapper-1-active' : ''} `}>
 
            <div className="schedule-heading">
 
              <div className="schedule-heading-titlebox">
                <div className="date-time">25 <br></br> March</div>
                <div className="schedule-heading-m">Day-1</div>
                <div onClick={onClickEvent1} className="more-options-m">
                    <div className="more-option-show">
                      <FontAwesomeIcon icon={faAngleDown}/>
                    </div>
                    <div className="more-option-hide"></div>
                </div>
              </div>
 
              <div className="list">
                <div className="list-item">
                  9:00AM - 10:00AM  -   Inaguration Ceremony
                </div>
 
                <hr></hr>
 
                <div className="list-item">
                  9:00AM - 10:00AM  -   Inaguration Ceremony
                </div>
 
                <hr></hr>
 
                <div className="list-item">
                  9:00AM - 10:00AM  -   Inaguration Ceremony
                </div>
 
              </div>
            </div>
          </div>
 
          <div className="schedule-2">
            <div className={`schedule-wrapper-2 ${isOpen2 ? 'schedule-wrapper-2-active' : ''} `}>
 
              <div className="schedule-heading">
                <div className="schedule-heading-titlebox">
                  <div className="date-time">26 <br></br> March</div>
                  <div className="schedule-heading-m">Day-2</div>
                  <div onClick={onClickEvent2} className="more-options-m"><div className="more-option-show"><FontAwesomeIcon icon={faAngleDown}/></div><div className="more-option-hide"></div></div>
                </div>
 
                <div className="list">
                  <div className="list-item">
                    9:00AM - 10:00AM  -    Ceremony
                  </div>
 
                  <hr></hr>
 
                  <div className="list-item">
                    9:00AM - 10:00AM  -    Ceremony
                  </div>
 
                  <hr></hr>
 
                  <div className="list-item">
                    9:00AM - 10:00AM  -    Ceremony
                  </div>
 
                </div>
 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

<div className="circle1">
  <img src={image1}/>
  <img src={image1}/>
</div>

<div className="circle2">
  <img src={image2}/>
</div>

 </div>
  )
}
 
 
 
export default Eventschedule


