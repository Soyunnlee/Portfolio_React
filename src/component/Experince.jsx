import React from 'react';
import '../Css/Grid.css';
import '../Css/Experince.css';
import tape1 from '../assets/images/tape/tape1.png';
import tape2 from '../assets/images/tape/tape2.png';
import tape3 from '../assets/images/tape/tape3.png';
import tape4 from '../assets/images/tape/tape4.png';
import tape5 from '../assets/images/tape/tape5.png';

import { Flip } from 'react-reveal';

function Experince(props) {
  return (
    <div className='flex items-center justify-center h-screen bg-black' id='2'>
      {/* Card */}
      <div class='pt-12 flex flex-row space-x-36'>
        {/* Card Grup Left */}
        <Flip left duration={1300}>
          <div className='space-y-20'>
            {/* Card 1 */}
            <div className='ExperinceCardWrap'>
              <div class=' ExperinceCardWrap '>
                <p class='ExperinceCardTitle'>사용자 인증/인가 시스템 개발 </p>
                <p class='ExperinceCardContent'>
                  OAuth 2.0과 API를 활용하여 사용자 권한에 따라 대시보드 메뉴 및
                  UI/UX를 동적으로 변화시키는 관리자 페이지 개발에 참여했습니다.
                </p>
              </div>
              <div class='absolute top-[-4rem] left-[-3rem]'>
                <img src={tape1} alt='' class='w-32' />
              </div>
              <div class='absolute bottom-[-4rem] right-[-3rem]'>
                <img src={tape2} alt='' class='w-32' />
              </div>
            </div>

            {/* <!-- Card 2 --> */}
            <div className='ExperinceCardWrap'>
              <div class=' ExperinceCardWrap '>
                <p class='ExperinceCardTitle'>프로그래밍 언어 및 프레임워크 </p>
                <p class='ExperinceCardContent'>
                  JavaScript, TypeScript, C#을 이용한 개발 경험을 가지고 있으며,
                  React, Svelte, WPF 등의 프레임워크를 활용한 프로젝트를
                  수행했습니다.
                </p>
              </div>
              <div class='absolute top-[-6.7rem] left-[-4rem]'>
                <img src={tape4} alt='' Class='w-40' />
              </div>
            </div>
          </div>
        </Flip>
        {/* </div> */}

        {/* Card Grup Right */}
        <Flip right duration={1300}>
          <div className='space-y-20'>
            {/* <!-- Card 4 --> */}
            <div className='ExperinceCardWrap'>
              <div class=' ExperinceCardWrap '>
                <p class='ExperinceCardTitle'>데이터 시각화 구현</p>
                <p class='ExperinceCardContent'>
                  실시간 차트 및 다양한 차트 와 그리드 라이브러리를 활용하여
                  API를 통해 수집된 데이터를 시각화하는 솔루션을 개발했습니다 .
                  ( Model 구현, REST API, GraphQL API )
                </p>
              </div>
              <div class='absolute top-[-3rem] left-[-1rem] right-[-44rem]'>
                <img src={tape3} alt='' class='w-[28rem]' />
              </div>
            </div>

            {/* <!-- Card 5 --> */}
            <div className='ExperinceCardWrap'>
              <div class=' ExperinceCardWrap '>
                <p class='ExperinceCardTitle'>
                  디자인 도구 및 설계 / 아이디어{' '}
                </p>
                <p class='ExperinceCardContent'>
                  디자인 도구를 사용하는데 능숙하며 Figma 프로토타입 기능을
                  사용해 사용자 목업 페이지를 제작했습니다. 이러한 기술을
                  바탕으로 기술 설계 및 디자이너와의 긴밀한 협업으로 창의적인
                  아이디어를 도출하고, UX 중심의 디자인 솔루션을 개발하는데
                  기여할 수 있습니다.
                </p>
              </div>
              <div class='absolute top-[-6rem] left-[-5rem]'>
                <img src={tape5} alt='' class='w-52' />
              </div>
              <div class='bg-red-900 w-1 h-1 absolute bottom-0 right-1'></div>
            </div>
          </div>
        </Flip>
      </div>
    </div>
  );
}

export default Experince;
