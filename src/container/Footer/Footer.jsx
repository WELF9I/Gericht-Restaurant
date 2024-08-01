import React from 'react';
import './Footer.css';

import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='app__footer section__padding'>
      <FooterOverlay />
      <Newsletter />
      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">Avenue Assad Ibn El Fourat, Hammamet 8050 Tunisia</p>
          <p className="p__opensans">+216 71 123 456</p>
          <p className="p__opensans">+216 71 654 321</p>
        </div>
        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="footer_logo" />
          <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others.”</p>
          <img src={images.spoon} alt="spoon" className="spoon__img" style={{"marginTop": "15px"}} />
          <div className="app__footer-links_icons">
            <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
              <FiFacebook />
            </a>
            <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
              <FiTwitter />
            </a>
            <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
              <FiInstagram />
            </a>
          </div>
        </div>
        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday-Friday:<br />08:00 am -12:00 am</p>
          <p className="p__opensans">Saturday-Sunday:<br />07:00am -11:00 pm</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="p__opensans">© {currentYear} Gericht. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
