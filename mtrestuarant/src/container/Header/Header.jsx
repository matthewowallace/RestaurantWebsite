import React from 'react';

import {SubHeading} from '../../components';
import {images} from '../../constants';


import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding'  id="home">
      <div className='app__wrapper-info'>
        <SubHeading  title="Chase the new Flavour" />
        <h1 className='app__header-h1'> 
            The key to Fine Dining
        </h1>
        <p className='p__opensans' style={{margin: '2rem 0' }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
        <button className='custom__button'>Explore Menu</button>
      </div>

      <div className='app__header-img'>
        <img src={images.welcome} alt='header img' />
      </div>
  </div>
);

export default Header;
