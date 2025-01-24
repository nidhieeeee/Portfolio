import Navbar from './Navbar';
import './LandingPage.css'
import LeftTop from "./LeftTop";
import MiddleTop from './MiddleTop';
import RightTop from './RightTop';
import LeftBottom from './LeftBottom';
import MiddleBottom from './MiddleBottom';
import RightBottom from './RightBottom';
function LandingPage() {
  return (
    <div className='main'>
      <Navbar />      
      <div className='side'>
        <div className='left'>
          <div className='left-top'>
            <LeftTop />
            <MiddleTop />

          </div>
          <div className='left-bottom'>
            <LeftBottom />
            <MiddleBottom />
          </div>
        </div>

        <div className='right'>
          <div className='right-top'><RightTop /></div>
          <div className='right-bottom'><RightBottom /></div>
          
        </div>
      </div>
    </div>
  )
}

export default LandingPage;