import "./Sponsors.css";
import CodingBlocks from './Images/CodingBlocks.png';
import EasyShiksha from './Images/EasyShiksha.png';
import GeeksforGeeks from './Images/GeeksforGeeks.png';
import Taskade from './Images/taskade.png';
import Techradiance from './Images/Techradiance.png';

function Sponsors() {
  return (
    <div className="sponsors-section" id="sponsors-murious">
      <div className="sponsors-heading">
        Previous Sponsors
        <div className="sponsors-heading-underline"/>
      </div>  
      <div className="sponsor-logos">
        <img src={CodingBlocks} alt='Coding Blocks'/>  
        <img src={EasyShiksha} alt='Easy Shiksha'/>  
        <img src={GeeksforGeeks} alt='Geeks for Geeks'/>  
        <img src={Taskade} alt='Taskade'/>  
        <img src={Techradiance} alt='Techradiance'/>  
      </div>
    </div>
  );
}
export default Sponsors;