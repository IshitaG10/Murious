import React, { useState } from "react";
import './EventScheduleCard.css'

function EventScheduleCard(parse) {
  const [isOpen1, setIsOpen1] = useState(true)
  const onClickEvent1 = () => {
    setIsOpen1(!isOpen1);
  }
  const [isOpen2, setIsOpen2] = useState(false)
  const onClickEvent2 = () => {
    setIsOpen2(!isOpen2);
  }
  return (
    <div className="event-schedule">
      {/* <div className="schedule"> */}
        {/* <div className='date'>
          <div className='text'>{parse.date}</div>
        </div> */}
        {/* <div className={`schedule-wrapper-1 ${isOpen1 ? 'schedule-wrapper-1-active' : ''} `}>
          <div className="schedule-heading">
            <div className="schedule-heading-m">{parse.day}</div>
            <div onClick={onClickEvent1} className="more-options-m">
              <div className="more-option-show">V</div>
              <div className="more-option-hide"></div>
            </div>
            <div className="list">
              <ul>
                <li>
                  {parse.time1}  -  {parse.event1}
                </li>
                <hr></hr>
                <li>
                  {parse.time2}  -  {parse.event2}
                </li>
                <hr></hr>
                <li>
                  {parse.time3}  -  {parse.event3}
                </li>
              </ul>
            </div>
          </div>
        </div> */}
    {/* </div> */}
      {/* <img src= {parse.image}/>   */}
    </div>
  )
}
export default EventScheduleCard