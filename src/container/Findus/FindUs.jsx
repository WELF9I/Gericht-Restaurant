import React from 'react';

import { SubHeading } from '../../components';
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__findUs app__bg app__wrapper section__padding" id='contact'>
    <div className="app__wrapper_info app__findUs-content">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant">Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Avenue Assad Ibn El Fourat, Hammamet 8050 Tunisia</p>
        <p className="p__cormorant" style={{"color": "#DCCA87", margin: "2rem 0"}}>Opening Hours</p>
        <p className="p__opensans">Monday-Friday:<br />08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:<br />07:00 am - 11:00 pm</p>
      </div>
      <button className="custom__button" style={{"marginTop": "2rem"}}>Visit Us</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
