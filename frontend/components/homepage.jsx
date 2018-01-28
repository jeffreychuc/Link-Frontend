import React from 'react';
import NavHeader from './navheader_container';
import Splash from './splash_container';
import SampleInputs from './sample_inputs_container';
import MapDisplay from './mapdisplay_container';

const Landing = () => (
  <div className='landing'>
    <NavHeader />
    <Splash />
    <SampleInputs />
    <MapDisplay />
  </div>
);

export default Landing;
