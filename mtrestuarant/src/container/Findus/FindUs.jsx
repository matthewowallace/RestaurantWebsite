import React from 'react';
import { SubHeading} from '../../components';
import { images } from '../../constants';


const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact' >
    <div className='app__wrapper_info'>
      <SubHeading title="Contact" />
      <h1 className='headtext__cormorant' style={{ marginBotton: '3rem'}}>Find Us </h1>
      <div className='app__wrapper-content'> 
        <p className='p__opensans'>Somewhere</p>
        <p className='p__opensans' style={{ color: '#DDCA87', margin: '2rem 0'}}>Opening Hours </p>
        <p className='p__opensans'>Monday - Friday: 10:00am -  02:00 am </p>
        <p className='p__opensans'>Satuday - Sunday: 10:00am -  02:00 am</p>
      </div>
      <button className='custom__button' style={{ marginTop: '2rem'}}>
          Visit Us
      </button>
    </div>

    <div className='app__wrapper_img'>
        <img src={images.findus} alt="findus" />
    </div>

  </div>
);

export default FindUs;
