import React from 'react';
import '../Css/Typography.css';
import '../Css/Grid.css';

function Contact(props) {
  return (
    <div className='py-10 bg-black border' id='3'>
      {/* <span class='block text-sm text-gray-500 sm:text-center dark:text-gray-400 py-10'>
        © 2022 <a href='https://flowbite.com/' class='hover:underline'></a>.
        Lee so yun. All rights reserved.
      </span> */}
      <div className='flex items-start justify-end pr-32 space-x-5'>
        {/* <div class='w-1/2 text-center'>
            <span class='font-bold text-white'>
              <a
                href='https://github.com/Soyunnlee'
                target='_blank'
                rel='noreferrer'
              >
                github
              </a>
            </span>
          </div>

          <div class='w-1/2 text-center'>
            <span class='font-bold text-white'>
              <a
                href='https://soyun-s.tistory.com/'
                target='_blank'
                rel='noreferrer'
              >
                tistory
              </a>
            </span>
          </div> */}
        <div class='w-10 h-10 rounded-full bg-red-900'>d</div>
        <div class='w-10 h-10 rounded-full bg-red-900'>d</div>
      </div>
    </div>
  );
}

export default Contact;
