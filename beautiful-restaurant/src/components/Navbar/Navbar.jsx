import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState('false');


  return (
    <div className='navbar'>
      <dir className='navbar__logo'>
        <img src={images.gericht} alt="app logo" />
      </dir>
      <ul className='navbar__links'>
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#about">About</a></li>
        <li className='p__opensans'><a href="#menu">Menu</a></li>
        <li className='p__opensans'><a href="#awards">Awards</a></li>
        <li className='p__opensans'><a href="#contact">Contact</a></li>
      </ul>
      <div className='navbar__login'>
        <a href="#login" className='p__opensans' >Log In/ Register</a>
        <div />
        <a href="/" className='p__opensans' >Book Table</a>
      </div>

      <div className='navbar--smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
        {
          toggleMenu &&
          (
            <div className='navbar__overlay--smallscreen flex-center slide-bottom'>
              <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
              <ul className='navbar__links--smallscreen'>
                <li className='p__opensans'><a href="#home">Home</a></li>
                <li className='p__opensans'><a href="#about">About</a></li>
                <li className='p__opensans'><a href="#menu">Menu</a></li>
                <li className='p__opensans'><a href="#awards">Awards</a></li>
                <li className='p__opensans'><a href="#contact">Contact</a></li>
              </ul>
            </div>
          )
        }
      </div>
    </div>
  );
};





export default Navbar;
