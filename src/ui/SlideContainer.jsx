import React from 'react';
import Slider from 'react-slick';

import '../Css/Grid.css';
import { SlideItem } from './SlideItem';

export function SlideContainer({ WebSite }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div class=''>
      <Slider {...settings}>
        {WebSite.map((site) => (
          <div>
            <SlideItem site={site} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
