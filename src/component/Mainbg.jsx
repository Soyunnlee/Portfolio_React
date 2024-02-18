import React from 'react';
import '../Css/Main.css';
// Design
import DesignBg from '../assets/images/DesignBg.png';
import Tree from '../assets/images/Tree.png';
import DevelopBtnBg from '../assets/images/DevelopBtnBg.png';
import Ball1 from '../assets/images/Ball1.png';
import Ball2 from '../assets/images/Ball2.png';
import Ball3 from '../assets/images/Ball3.png';
// Develop
import DevelopBg from '../assets/images/DevelopBg.png';
import VsCodeGif from '../assets/images/VsCodeGif.gif';

const Mainbg = () => {
  return (
    <div class='bg-transparent'>
      {/* Button */}
      <input
        class='pricing hidden'
        type='checkbox'
        id='pricing'
        name='pricing'
      />
      {/* Design Btn */}
      <label for='pricing' Style='top:15%; left: 17%;'>
        <div
          class='w-[12rem] h-[5.2rem] justify-center flex flex-row space-x-7 rounded-lg cursor-pointer py-3  shadow-[inset_0_0_10px_#454551] pc:w-[16rem] pc:h-[7rem] pc:py-5'
          Style='background: linear-gradient(45deg, #191932, #0C0C18);'
        >
          <div class='text-white w-full pl-4 pc:text-xl pc:pl-6'>Designer.</div>

          <div class=' h-full flex items-end'>
            <img
              src={Tree}
              alt=''
              class='w-[9rem] pr-2 pb-2 pc:w-[12rem] pc:pr-4'
            />
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
      <label for='pricing' Style='top:15%; right: 17%;'>
        <div
          class='w-[12rem] h-[5.2rem] justify-center flex flex-row rounded-lg cursor-pointer pt-3 relative shadow-[inset_0_0_10px_#454551] pc:w-[16rem] pc:h-[7rem] pc:pt-4'
          Style='background: linear-gradient(45deg, #191932, #0C0C18);'
        >
          <div class='text-white w-full pl-4 pc:text-xl pc:pl-6'>
            Developer.
          </div>

          <div class='absolute right-0 bottom-0'>
            <img src={DevelopBtnBg} alt='' class='w-[6.5rem] pc:w-[10em]' />
          </div>
        </div>
      </label>
      {/* Flip Card Wrap */}
      <div class='card-3d-wrap mx-auto '>
        <div class='card-3d-wrapper'>
          {/* Design */}
          <div class='card-front'>
            <div class='pricing-wrap'>
              {/* Background */}
              <div class='img-wrap img-2'>
                <img src={DesignBg} alt='' />
              </div>
              {/* FigmaIcon */}
              <div class='img-wrap img-1'>
                <img src={Ball1} alt='' />
              </div>
              <div class='img-wrap img-3'>
                <img src={Ball2} alt='' />
              </div>
              <div class='img-wrap img-6'>
                <img src={Ball3} alt='' />
              </div>
            </div>
          </div>
          {/* Develop */}
          <div class='card-back'>
            <div class='pricing-wrap'>
              {/* Bg */}
              <div class='img-wrap img-2'>
                <img src={DevelopBg} alt='' />
              </div>
              {/* Icon */}
              <img src={VsCodeGif} alt='' class='img-9 img-wrap w-20' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainbg;
