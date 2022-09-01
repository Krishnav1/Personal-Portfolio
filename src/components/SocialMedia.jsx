import React from 'react';
import '../components/SocialMedia.scss';

import {BsTwitter, BsInstagram, BsGithub, BsLinkedin} from 'react-icons/bs';
// import {FaFacebookF} from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div className='button' >
            <div className='icon'><a className='fab fa-twitter' href="https://twitter.com/Krishna90002313" ></a></div>
            <span>Twitter</span>
        </div>
        
        <div className='button'>
            <div className='icon'><a className='fab fa-instagram' href="https://www.instagram.com/krishnav1234/"></a></div>
            <span>Instagram</span>
        </div>

        <div className='button'>
            <div className='icon'><a className='fab fa-github' href="https://github.com/Krishnav1"></a></div>
            <span>Github</span>
        </div>

        <div className='button'>
            <div className='icon'><a className='fab fa-linkedin' href="https://www.linkedin.com/in/krishna-santosh-varma-76a385187/"></a></div>
            <span>Linkedin</span>
        </div>
        
        {/* <div className='button'>
            <a className='icon' href="https://twitter.com/Krishna90002313"><BsTwitter /></a>
            <span>Twitter</span>
        </div> */}
        {/* <div className='button'>
            <a className='icon' href="https://www.instagram.com/krishnav1234/"><BsInstagram /></a>
        </div>
        <div className='button'>
            <a className='icon' href="https://github.com/Krishnav1"><BsGithub /></a>
        </div>
        <div className='button'>
            <a className='icon' href="https://www.linkedin.com/in/krishna-santosh-varma-76a385187/"><BsLinkedin /></a>
        </div> */}
    </div>
  )
}

export default SocialMedia