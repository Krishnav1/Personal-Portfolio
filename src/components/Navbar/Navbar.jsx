import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Navbar.scss';
import { images } from '../../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  
  const [heart, setHeart] = useState(false);

  const ToggleClick = () => {

    if(heart){
      setHeart(false)
    }
    else{
      setHeart(true)
    }
  }

  return (

    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <a href="#home">
          <img src={images.logo} alt="logo" />
        </a>

      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {
          toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
      </div>

      <div className="heart-btn">
        <div onClick={ToggleClick} className={heart ? "content heart-active": 'content'}>
          <span className={heart ? "heart heart-active": 'heart'}></span>
          <span className={heart ? "text heart-active": 'text'}>Like</span>
          <span className={heart ? "numb heart-active": 'numb'}></span>
        </div>
      </div>

    </nav>


  )
}

export default Navbar