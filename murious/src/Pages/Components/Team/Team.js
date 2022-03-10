import "./Team.css";
import { useState } from "react";
import Slider from "react-slick";
import Abhinandan from "./images/AbhinandanPic.png";
import Akshat from "./images/AkshatPic.png";
import Malay from "./images/Malay.png";
import Maitreyi from "./images/Maitreyi.png";
import Sahil from "./images/SahilThakur.png";
import Shivansh from "./images/ShivanshPic.png";
import Ishita from "./images/IshitaPic.png";
import Mayank from "./images/MayankPic.png";
import Isha from "./images/IshaPic.png";
import Shashwat from "./images/ShashwatPic.png";
import Manas from "./images/ManasPic.png";
import Prachi from "./images/PrachiPic.png";
import Anshul from "./images/AnshulPic.png";



import { FaAngleRight, FaAngleLeft } from "react-icons/fa";


const images = [Sahil, Akshat, Shivansh, Abhinandan, Ishita, Malay, Maitreyi, Mayank, Isha, Shashwat, Prachi, Anshul, Manas];

function Team() {
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
      <div className='container-teams' id="team-murious">
        <div className="TTT">
          <div className='TitleTeam1'>
            <b>Team</b>
          </div>
          <div className='TitleTechClub'>
            Technical, Movies and Photography
            <div className="teams-heading-underline"/>
          </div>
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
    </>
  );
}

export default Team;