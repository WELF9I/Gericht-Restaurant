import React from 'react';
import { SubHeading } from '../../components';

import './Header.css';
import images from "../../constants/images";

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper-info">
      <SubHeading title="Chase the new Flavour" />
      <h1 className="app__header-h1">The key to Fine dining</h1>
      <p style={{margin: '2rem 0'}} className="p__opensans app__header__p">
        Explore the rich flavors and unique tastes of Tunisian cuisine. Enjoy a dining experience that combines tradition and innovation in every dish.
      </p>
      <button className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper__img">
      <img src={images.welcome} alt="HeaderImage" />
    </div>
  </div>
);

export default Header;
