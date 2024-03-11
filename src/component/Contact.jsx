import React from 'react';
import '../Css/Typography.css';
import '../Css/Grid.css';
import GitHub from '../assets/images/Github.png';
import Tistory from '../assets/images/Tistory.png';
import Notion from '../assets/images/Notion.png';

function Contact(props) {
  return (
    <div
      className='flex items-end justify-between pb-10 bg-black hd:pb-16'
      id='3'
    >
      <span class='block text-sm text-gray-500 sm:text-center dark:text-gray-400 pl-10 hd:text-xl '>
        Copyrigth©2024 | Lee soyun.All rights reserved.
      </span>
      <div className='flex items-start justify-end pr-32 space-x-9'>
        {/* Contect Btn */}
        <a href='https://github.com/Soyunnlee' target='href'>
          <div class='ContectBtn'>
            <img src={GitHub} alt='' class='w-7 hd:w-14' />
          </div>
        </a>
        {/* Tistory */}
        <a href='https://soyun-s.tistory.com/' target='href'>
          <div class='ContectBtn'>
            <img src={Tistory} alt='' class='w-6 hd:w-11' />
          </div>
        </a>
        {/* Notion */}
        <a
          href='https://cat-gazelle-c0c.notion.site/3ae7061008674a35b2700d2a9fb5362a?pvs=4'
          target='href'
        >
          <div class='ContectBtn'>
            <img src={Notion} alt='' class='w-6 hd:w-11' />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Contact;
