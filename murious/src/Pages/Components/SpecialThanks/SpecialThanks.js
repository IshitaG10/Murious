import { parse } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import './SpecialThanks.css';
import ACM from './Images/ACM.png';
import IEEE from './Images/IEEE.png';
import SportsClub from './Images/SportsClub.png';

export default function SpecialThanks() {
  return (
    <div className='special-thanks-section'>
        <div>
          <div className='special-thanks-heading'>
            Special Thanks To
            <div className='special-thanks-underline'/>
          </div>
        </div>
        <div className='special-thanks-clubs'>
            <img src={SportsClub} alt='Sports Club'/>
            <img src={IEEE} alt='IEEE'/>
            <img src={ACM} alt='ACM'/>
        </div>
    </div>
  )
}