import React from 'react';
import {motion} from 'framer-motion';
import {images} from '../../constants';
import {AppWrap} from '../../wrapper';
import './Header.scss';
import sound from '../../assets/audio.mp3'

const scaleVariants = {
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  const handleOnClick = () =>{
    new Audio(sound).play()
  }

  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0,1]}}
        transition={{duration: 0.8}}
        className="app__header-info"
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span onClick={handleOnClick}>👋</span>
            <div style={{marginLeft: 20}}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Krishna</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>MERN Stack Developer &</p>
            <p className='p-text'> Web3 Enthusiastic</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0,1]}}
        transition={{duration: 0.8, delayChildren: 0.8}}
        className="app__header-img"
      >
        <img src={images.profile1} alt="profile_bg"/>
        <motion.img
          whileInView={{ scale: [0,1]}}
          transition={{duration: 1, ease: 'easeInOut'}}
          src={images.circle}
          alt='profile_circle'
          className='overlay_circle'
        />

      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.sass, images.react, images.javascript].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');