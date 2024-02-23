import React from 'react';
import { WebSite } from '../assets/temp';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Css/Grid.css';
import '../Css/WebSite.css';

import { SlideContainer } from '../ui/SlideContainer';

function webSite(props) {
  return (
    <div id='1' className='h-[100vh] flex items-center justify-center bg-black'>
      <div className='w-[60%] mx-auto  bg-[#141517] rounded-xl'>
        <SlideContainer WebSite={WebSite} />
      </div>
    </div>
  );
}

export default webSite;
