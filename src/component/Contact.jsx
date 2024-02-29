import React from 'react';
import '../Css/Typography.css';
import '../Css/Grid.css';

function Contact(props) {
  return (
    <div className='bg-black border' id='3'>
      <div className='Container '>
        <div className='flex justify-around'>
          {/* 왼쪽컨텐츠 */}
          <div className='w-2/5 max-sm:hidden'>
            <div class='font-sans rounded-lg  py-20 w-full flex flex-row justify-center items-center '>
              <div class='card w-96 mx-auto bg-white  shadow-xl hover:shadow'>
                <div class='px-6 text-center mt-2 font-light text-sm'>
                  <p>Frontend, Publishing, UI/UX Design</p>
                </div>
                <hr class='mt-8' />
                <div class='flex p-4'>
                  <div class='w-1/2 text-center'>
                    <span class='font-bold'>
                      <a href='https://github.com/' target='_blank'>
                        github
                      </a>
                    </span>
                  </div>
                  <div class='w-0 border border-gray-300'></div>
                  <div class='w-1/2 text-center'>
                    <span class='font-bold'>
                      <a href='https://soyun-s.tistory.com/' target='_blank'>
                        tistory
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
