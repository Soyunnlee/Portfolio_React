import React from 'react';
import '../Css/Header.css';
import { Link } from 'react-scroll';
import classNames from 'classnames';
import Logo from '../assets/images/Logo.png';

const menu = ['Home', 'WebSite', 'Experince', 'About', 'Service', 'Contact'];

function Header(props) {
  const [activeNum, setActiveNum] = React.useState(0);
  const activeMenu = (to) => {
    setActiveNum(to);
  };
  return (
    <div className='fixed z-50 w-screen px-12'>
      <nav className='bg-transparent py-2.5 '>
        <div className='flex items-center justify-between'>
          <div className='flex space-x-3 text-xl font-semibold text-black'>
            <img src={Logo} alt='Logo' className='w-[8rem]' />
          </div>

          {/* Tablet , Pc MenuList */}
          <div className='hidden md:block md:w-auto'>
            <ul className='flex flex-row p-4 space-x-8 text-sm font-medium '>
              {menu.map((menu, index) => (
                <li
                  className={classNames('NavItm', {
                    ActiveMenu: index === activeNum,
                  })}
                  style={{ transition: 'all 0.3s' }}
                >
                  <Link
                    key={index}
                    to={index}
                    spy
                    smooth
                    onSetActive={activeMenu}
                    className={'flex items-center'}
                  >
                    {menu}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu */}
          <div className='hidden MobileMenu max-md:block'>
            <button
              class='NavBtn'
              itespace-nowrap
              type='button'
              id='dropdownMenuButton1'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              <svg
                class='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </button>

            <ul
              class='dropdown-menu MobileListWrap'
              aria-labelledby='dropdownMenuButton1'
            >
              <li class='dropdown-item MobileListItm'>
                <Link to='0' spy smooth>
                  Home
                </Link>
              </li>
              <li class='dropdown-item MobileListItm'>
                <Link to='1' spy smooth>
                  WebSite
                </Link>
              </li>
              <li class='dropdown-item MobileListItm'>
                <Link to='2' spy smooth>
                  Experince
                </Link>
              </li>
              <li class='dropdown-item MobileListItm'>
                <Link to='3' spy smooth>
                  About
                </Link>
              </li>
              <li class='dropdown-item MobileListItm'>
                <Link to='4' spy smooth>
                  Service
                </Link>
              </li>
              <li class='dropdown-item MobileListItm'>
                <Link to='5' spy smooth>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
