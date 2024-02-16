import '../Css/Main.css';
import '../Css/Grid.css';

import Mainbg from './Mainbg';

function Main(props) {
  return (
    <div
      className='h-screen overflow-hidden border-[0px] border-red-900'
      id='0'
    >
      <Mainbg />
      {/* Fix Hover Card */}
      <div className='top-0 bottom-0 left-0 right-0 flex items-center justify-center '>
        <div class='card'>
          <div class='wrapper'>
            <img
              src='https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg'
              class='cover-image'
              alt=''
            />
          </div>
          <img
            src='https://ggayane.github.io/css-experiments/cards/dark_rider-title.png'
            class='title'
            alt=''
          />
          <img
            src='https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp'
            class='character'
            alt=''
          />
        </div>

        <div class='card'>
          <div class='wrapper'>
            <img
              src='https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg'
              class='cover-image'
              alt=''
            />
          </div>
          <img
            src='https://ggayane.github.io/css-experiments/cards/force_mage-title.png'
            class='title'
            alt=''
          />
          <img
            src='https://ggayane.github.io/css-experiments/cards/force_mage-character.webp'
            class='character'
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
