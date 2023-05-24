import React from 'react';

import './Intro.css';
import images from '../../../constants/images';

const Intro = () => {
  return (
    <div className="app__intro">
      <div className="app__intro-copy">
        <h1 className="app__intro__copy-heading">Make remote work</h1>
        <p className="app__intro__copy-p">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="app__intro__copy-btn">Learn more</button>

        <div className="app__intro__copy-brand">
          <div>
            <img src={images.databiz} alt="databiz" />
          </div>
          <div>
            <img src={images.audiophile} alt="databiz" />
          </div>
          <div>
            <img src={images.client_meet} alt="databiz" />
          </div>
          <div>
            <img src={images.client_maker} alt="databiz" />
          </div>
        </div>
      </div>
      <div className="app__intro-hero"></div>
    </div>
  );
};

export default Intro;
