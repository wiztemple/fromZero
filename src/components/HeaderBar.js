import React from 'react';
import CircleOne from '../assets/lightcircle2.svg';

const HeaderBar = () => (
  <div>
    <img className="absolute right-24 -top-16" src={CircleOne} alt="circle one" />
    <div className="bg-blue-600 md:h-36 rounded-tl-lg rounded-tr-lg" />
  </div>
)

export default HeaderBar;
