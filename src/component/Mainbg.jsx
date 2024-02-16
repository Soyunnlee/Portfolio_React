import React from 'react';
import '../Css/Main.css';
// Design
import DesignBg from '../assets/images/DesignBg.png';
import Tree from '../assets/images/Tree.png';
import DevelopBtnBg from '../assets/images/DevelopBtnBg.png';
import FigmaIcon from '../assets/images/FigmaIcon.png';
import PsIcon from '../assets/images/PsIcon.png';
import CloudIcon from '../assets/images/CloudIcon.png';
import AiIcon from '../assets/images/AiIcon.png';
// Develop
import DevelopBg from '../assets/images/DevelopBg.png';
import VsCodeGif from '../assets/images/VsCodeGif.gif';
import JavaScriptIcon from '../assets/images/JavaScriptIcon.png';
import ReactIcon from '../assets/images/ReactIcon.png';
import TypeScriptIcon from '../assets/images/TypeScriptIcon.png';
import CIcon from '../assets/images/CIcon.png';
import SvelteIcon from '../assets/images/SvelteIcon.png';
import SassIcon from '../assets/images/SassIcon.png';
import TailwindIcon from '../assets/images/TailwindIcon.png';

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
          {/* Design */}
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
              <div class='img-wrap img-8'>
                <img src={AiIcon} alt='' />
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
              <div class='img-wrap img-4'>
                <img src={JavaScriptIcon} alt='' />
              </div>
              <div class='img-wrap img-5'>
                <img src={ReactIcon} alt='' />
              </div>
              <div class='img-wrap img-7'>
                <img src={TypeScriptIcon} alt='' />
              </div>
              <div class='img-wrap img-8'>
                <img src={CIcon} alt='' />
              </div>
              <div class='img-wrap img-10'>
                <img src={SvelteIcon} alt='' />
              </div>
              <div class='img-wrap img-11'>
                <img src={SassIcon} alt='' />
              </div>

              <div class='img-wrap img-12'>
                <img src={TailwindIcon} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainbg;
