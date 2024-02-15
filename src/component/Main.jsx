import '../Css/Main.css';
import '../Css/Grid.css';
import DesignBg from '../assets/images/DesignBg.png';
import Tree from '../assets/images/Tree.png';

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
        className='bg-red-900 '
        Style='transform: translate(-20%, -50%);top: 16%;left: 30%;
        background: linear-gradient(45deg, #191932, #0C0C18);'
      >
        <div class='w-full h-full py-1 px-3 flex flex-row space-x-10 bg-red-900'>
          <div class='text-white text-sm'>Designer.</div>

          <div class='pt-6'>
            <img src={Tree} alt='' class='w-10' />
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
        className='bg-blue-900 '
        Style='transform: translate(-20%, -50%);top: 16%;left: 70%;'
      >
        Develop
      </label>

      {/* Flip Card Wrap */}
      <div class='card-3d-wrap mx-auto '>
        <div class='card-3d-wrapper'>
          {/* Kayaking */}
          <div class='card-front'>
            <div class='pricing-wrap'>
              <h4 class='mb-5'>Kayaking</h4>
              <h2 class='mb-2'>
                <sup>$</sup>39 / 4<sup>hrs</sup>
              </h2>
              <p class='mb-4'>per person</p>
              <p class='mb-1'>
                <i class='uil uil-location-pin-alt size-22'></i>
              </p>
              <p class='mb-4'>Drina, Serbia</p>
              <a href='#0' class='link'>
                Choose Date
              </a>
              {/* Background */}
              <div class='img-wrap img-2'>
                <img src={DesignBg} alt='' />
              </div>
              {/* 카약 */}
              {/* <div class="img-wrap img-1">
                <img src="https://assets.codepen.io/1462889/kayak.png" alt="" />
              </div>
              <div class="img-wrap img-3">
                <img src="https://assets.codepen.io/1462889/water.png" alt="" />
              </div>
              <div class="img-wrap img-6">
                <img src="https://assets.codepen.io/1462889/Stone.png" alt="" />
              </div> */}
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
