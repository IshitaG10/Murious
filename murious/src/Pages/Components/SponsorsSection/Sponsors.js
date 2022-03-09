import "./Sponsors.css";
import { useState } from "react";
import Slider from "react-slick";
import CodingBlocks from './Images/CodingBlocks.png';
import EasyShiksha from './Images/EasyShiksha.png';
import GeeksforGeeks from './Images/GeeksforGeeks.png';
import Taskade from './Images/taskade.png';
import Techradiance from './Images/Techradiance.png';

import { FaAngleRight, FaAngleLeft } from "react-icons/fa";


const images = [CodingBlocks, EasyShiksha, GeeksforGeeks, Taskade, Techradiance];

function Sponsors() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaAngleRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaAngleLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    autoplay:true,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive:[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
    
  };

  return (
    <>
      <div className='container-teams' id="sponsors-murious">
        <div className='innercontainer'>
          <div className='TitleJYC'>
            <div className='sponsors-inner'>
              <div className="TTT">
              <div className='TitleSponsors'>Previous Sponsors</div>
            </div>
            
         
          <div className="SlideshowTeam">
            <Slider {...settings}>
              {images.map((img, idx) => (
                <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                  <img src={img} alt={img} />
                </div>
              ))}
            </Slider>
          </div>
          </div>
          </div>
        </div>
      </div>
    
    </>
  );
}

export default Sponsors;