import React from 'react';
import NavHeader from './navheader_container';
import Splash from './splash_container';
import SampleInputs from './sample_inputs_container';

const Landing = () => (
  <div className='landing'>
    <NavHeader />
    <Splash />
    <SampleInputs />
  </div>
);

export default Landing;
