import { parse } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import './SpecialThanks.css';
import ACM from './Images/ACM.jpg';
import IEEE from './Images/IEEE.jpg';
import SportsClub from './Images/SportsClub.png';

export default function SpecialThanks() {
  return (
    <div>
        <div className='special-thanks-section'>
          <div className='special-thanks-heading'>
            Special Thanks To
            <div className='special-thanks-underline'/>
          </div>
        </div>
        <div className='special-thanks-clubs'>
            <img src={SportsClub} alt='Sports Club'/>
            <img src={ACM} alt='ACM'/>
            <img src={IEEE} alt='IEEE'/>
        </div>
    </div>
  )
}