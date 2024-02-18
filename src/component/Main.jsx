import '../Css/Main.css';
import '../Css/Grid.css';

import Mainbg from './Mainbg';
import HoverDesignBg from '../assets/images/HoverDesignBg.png';
import HoverDevelopBg from '../assets/images/HoverDevelopBg.png';
import DesignObject from '../assets/images/DesignObject.png';
import DevelopObject from '../assets/images/DevelopObject.png';

function Main(props) {
  return (
    <div
      className='h-screen overflow-hidden border-[0px] border-red-900'
      id='0'
    >
      <Mainbg />
      {/* Fix Hover Card */}
      <div class='flex justify-center space-x-[55rem] relative bottom-20 left-0 pc:space-x-[64rem] pc:bottom-25'>
        <div class='card'>
          <div class='wrapper'>
            <img src={HoverDesignBg} class='cover-image' alt='' />
          </div>

          <img src={DesignObject} class='character' alt='' />
        </div>
        {/* Develop Card */}
        <div class='card'>
          <div class='wrapper'>
            <img src={HoverDevelopBg} class='cover-image' alt='' />
          </div>

          <img src={DevelopObject} class='character' alt='' />
        </div>
      </div>
    </div>
  );
}

export default Main;
