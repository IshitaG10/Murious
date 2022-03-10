import React from 'react'
import './Header.css'



function Header() {
  return (
    <div>
      <div className='heading-eventschedule'>
        Event Schedule
        <div div className='underline-event-schedule'></div>
      </div>
      <div className='info'>This is a tentative schedule and can change due to unforeseeable circumstances.</div>
    </div>
  )
}

export default Header