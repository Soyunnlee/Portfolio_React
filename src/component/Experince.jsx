import React from 'react';
import '../Css/Grid.css';
import '../Css/Experince.css';

import { Flip } from 'react-reveal';

function Experince(props) {
  return (
    <div className='h-screen bg-black flex justify-center items-center' id='2'>
      {/* Card */}
      <div class='CardWrap'>
        {/* Card Grup Left */}
        <Flip left duration={1300}>
          <div className='space-y-10'>
            {/* Card 1 */}

            <div className='flex flex-col relative justify-center items-center w-[400px] h-[256px]  px-6 rounded-lg space-y-6 bg-[#141517] shadow-[inset_0_0_9px_#343443];'>
              <div class='bg-red-900 w-full h-full absolute top-0 left-1'></div>
              <div class='relative flex flex-col justify-center items-center space-y-6 pt-[-3rem]'>
                <p class='text-white font-bold text-base'>
                  사용자 인증/인가 시스템 개발{' '}
                </p>
                <p class='cardContent'>
                  디자인 도구를 사용하는데 능숙하며 Figma 프로토타입 기능을
                  사용해 사용자 목업 페이지를 제작했습니다. 이러한 기술을
                  바탕으로 기술 설계 및 디자이너와의 긴밀한 협업으로 창의적인
                  아이디어를 도출하고, UX 중심의 디자인 솔루션을 개발하는데
                  기여할 수 있습니다.
                </p>
              </div>
            </div>

            {/* <!-- Card 2 --> */}
            <card class='Card'>
              <div class='CardGrid2'>
                {/* <!-- Content --> */}
                <div class=''>
                  <p class='TextT'> UI UX 기능명세서, 화면설계서 </p>
                  <p class='TextB'>
                    주식 거래소 Web 기능 명세서와 UI & UX 화면설계서 작성 경험이
                    있습니다.
                  </p>
                </div>
                {/* <!-- Image --> */}
                <div class='ImgWrap'>
                  <div class='Img'>
                    <img src='https://i.esdrop.com/d/f/KRQCESGJO3/RBOoMcVjma.png' />
                  </div>
                </div>
              </div>
            </card>
          </div>
        </Flip>
        {/* </div> */}

        {/* Card Grup Right */}
        <Flip right duration={1300}>
          <div className='SpaceCol'>
            {/* <!-- Card 4 --> */}
            <card class='Card'>
              <div class='CardGrid2'>
                {/* <!-- Content --> */}
                <div>
                  <p class='TextT'> Solution </p>
                  <p class='TextB'>
                    {' '}
                    거래소 레퍼런스 조사를 통해 키패드 기능 에서의 솔루션
                    반영사례와 기능의 간결화 함에 있어 인터페이스 또한
                    직관적으로 개선한 사례가 있었습니다.
                  </p>
                </div>

                {/* <!-- Image --> */}
                <div class='ImgWrap'>
                  <div class='Img'>
                    <img src='https://i.esdrop.com/d/f/KRQCESGJO3/AWk5UYf8AF.png' />
                  </div>
                </div>
              </div>
            </card>

            {/* <!-- Card 5 --> */}
            <card class='Card'>
              <div class='CardGrid1'>
                {/* <!-- Image --> */}
                <div class='ImgWrap'>
                  <div class='Img'>
                    <img src='https://i.esdrop.com/d/f/KRQCESGJO3/ousB51PyZq.png' />
                  </div>
                </div>
                {/* <!-- Description --> */}
                <div class=''>
                  <p class='TextT'> MD </p>
                  <p class='TextB'>
                    {' '}
                    온라인 쇼핑몰 MD, 카페24를 통한 관리 경험이 있습니다.
                  </p>
                </div>
              </div>
            </card>
          </div>
        </Flip>
      </div>
    </div>
  );
}

export default Experince;
