import Navbar from './Navbar';
import './LandingPage.css'
import LeftTop from "./LeftTop";
import MiddleTop from './MiddleTop';
import RightTop from './RightTop';
import LeftBottom from './LeftBottom';
import MiddleBottom from './MiddleBottom';
import RightBottom from './RightBottom';
import { useNavigate } from 'react-router-dom';
function LandingPage() {
  const navigate = useNavigate();
  function handleContact(){
    navigate("/contactme");
  }
  function handleProject(){
    navigate("/projects");
  }
  return (
    <div className='main1'>
      <div className='navbar'><Navbar /> </div>
           
      <div className='landingpage-container'>
        <div className='left'>
          <div className='left-top'>
            <div className='left-top-left'><LeftTop /></div>
            <div className='left-top-right'><MiddleTop /></div>
            

          </div>
          <div className='left-bottom'>
            <div className='left-bottom-left'>
            <LeftBottom />
            </div>
            <div className='left-bottom-right'onClick={handleContact} > <MiddleBottom /></div>
           
          </div>
        </div>

        <div className='right'>
          <div className='right-top' onClick={handleProject}><RightTop /></div>
          <div className='right-bottom'><RightBottom /></div>
          
        </div>
      </div>
    </div>
  )
}

export default LandingPage;