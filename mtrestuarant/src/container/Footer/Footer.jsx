import React from 'react';

import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'; 

import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding' id="login">
    <FooterOverlay />
    <Newsletter />
    <div className='app__footer-links'>
        <div className='app__footer-links_contact'>
            <h1 className='app__footer-headtext'>
                Contact Us
            </h1>
            <p className='p__opensans'>
                address
            </p>
            <p className='p__opensans'>
                phone
            </p>
            <p className='p__opensans'>
                phone 2
            </p>
        </div>
        <div className='app__footer-links_logo'>
            <img src={images.gericht} alt="logo" />
            <p className='p__opensans'>
                Service of others
            </p>
            <img src={images.spoon} alt="spoon" className='spoon__img' style={{ marginTop: '15'}} />
            <div className='app__footer-links_icons'>
              <FiFacebook />
              <FiTwitter />
              <FiInstagram />
            </div>
        </div>
        <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>
                Work Hours
            </h1>
            <p className='p__opensans'>
                Monday - Friday
            </p>
            <p className='p__opensans'>
                08:00 - 12:00 am
            </p>
            <p className='p__opensans'>
                07:00 - 11:00pm
            </p>
        </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>
         2022 Gericht. All Rights Reserved
      </p>
    </div>
  </div>
);

export default Footer;
