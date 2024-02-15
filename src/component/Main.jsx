import '../Css/Main.css';
import '../Css/Grid.css';
import DesignBg from '../assets/images/DesignBg.png';
import Tree from '../assets/images/Tree.png';
import DevelopBtnBg from '../assets/images/DevelopBtnBg.png';
import FigmaIcon from '../assets/images/FigmaIcon.png';
import PsIcon from '../assets/images/PsIcon.png';
import CloudIcon from '../assets/images/CloudIcon.png';

function Main(props) {
  return (
    <div
      className='h-screen overflow-hidden border-[0px] border-red-900'
      id='0'
    >
      {/* Button */}
      <input
        class='pricing hidden'
        type='checkbox'
        id='pricing'
        name='pricing'
      />
      {/* Design Btn */}
      <label
        for='pricing'
        Style='transform: translate(-20%, -50%);top: 16%;left: 30%;'
      >
        <div
          class='w-[11rem] h-[4.4rem] justify-center flex flex-row space-x-7 rounded-lg shadow-md cursor-pointer py-3 '
          Style='background: linear-gradient(45deg, #191932, #0C0C18);'
        >
          <div class='text-white text-sm '>Designer.</div>

          <div class=' h-full flex items-end'>
            <img src={Tree} alt='' class='w-[3.2rem]' />
          </div>
        </div>
      </label>

      {/* Develop Btn */}
      <input
        class='pricing hidden'
        type='checkbox'
        id='pricing'
        name='pricing'
      />
      <label
        for='pricing'
        Style='transform: translate(-20%, -50%);top: 16%;left: 70%;'
      >
        <div
          class='w-[11rem] h-[4.4rem] justify-center flex flex-row rounded-lg shadow-md cursor-pointer pt-3 relative'
          Style='background: linear-gradient(45deg, #191932, #0C0C18);'
        >
          <div class='text-white text-sm w-full pl-4'>Developer.</div>

          <div class='absolute right-0 bottom-0'>
            <img src={DevelopBtnBg} alt='' class='w-[6.5rem]' />
          </div>
        </div>
      </label>

      {/* Flip Card Wrap */}
      <div class='card-3d-wrap mx-auto '>
        <div class='card-3d-wrapper'>
          {/* Kayaking */}
          <div class='card-front'>
            <div class='pricing-wrap'>
              {/* Background */}
              <div class='img-wrap img-2'>
                <img src={DesignBg} alt='' />
              </div>
              {/* FigmaIcon */}
              <div class='img-wrap img-1'>
                <img src={FigmaIcon} alt='' class='w-7' />
              </div>
              <div class='img-wrap img-3'>
                <img src={PsIcon} alt='' />
              </div>
              <div class='img-wrap img-6'>
                <img src={CloudIcon} alt='' />
              </div>
            </div>
          </div>
          {/* Camping */}
          <div class='card-back'>
            <div class='pricing-wrap'>
              <h4 class='mb-5'>Camping</h4>
              <h2 class='mb-2'>
                <sup>$</sup>29 / 8<sup>hrs</sup>
              </h2>
              <p class='mb-4'>per person</p>
              <p class='mb-1'>
                <i class='uil uil-location-pin-alt size-22'></i>
              </p>
              <p class='mb-4'>Tara, Serbia</p>
              <a href='#0' class='link'>
                Choose Date
              </a>
              <div class='img-wrap img-2'>
                <img src='https://assets.codepen.io/1462889/grass.png' alt='' />
              </div>
              <div class='img-wrap img-4'>
                <img src='https://assets.codepen.io/1462889/camp.png' alt='' />
              </div>
              <div class='img-wrap img-5'>
                <img src='https://assets.codepen.io/1462889/Ivy.png' alt='' />
              </div>
              <div class='img-wrap img-7'>
                <img
                  src='https://assets.codepen.io/1462889/IvyRock.png'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
}

export default Main;
