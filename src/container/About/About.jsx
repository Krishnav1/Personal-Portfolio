import React, {useState, useEffect} from 'react'
import { motion} from 'framer-motion';
import './About.scss';
import {images} from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import {urlFor, client} from '../../client';
import { Modal } from '../../components';


const About = () => {
  const [abouts, setAbouts] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query)
      .then((data) => setAbouts(data))
    
  }, []);

  return (
    <>
      <h2 className='head-text app__flex'> Good Development = <h2 data-text="Good_Business" id="about1" className='head-text'> Good_Business </h2></h2>
      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1 }}
            transition={{duration: 0.5, type: 'tween'}}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} onClick={() => {setOpenModal(true);}}/>
            {openModal && <Modal closeModal={setOpenModal} />}
            <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
            <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap( 
  MotionWrap(About, 'app__about'),
  'about',
  "app__whitebg"
);