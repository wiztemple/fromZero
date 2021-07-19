import React, { useState } from 'react';
import ThemeButton from '../components/ThemeButton';

import Logo from '../assets/logo.svg';
import PatternOne from '../assets/pattern1.svg';
import PatternTwo from '../assets/pattern2.svg';
import Frontend from '../components/Frontend';

// css
import '../App.css';
import Backend from '../components/Backend';
import Devops from '../components/Devops';
import UIUX from '../components/UIUX';
import DataScience from '../components/DataScience';
import Footer from '../components/Footer';


const Home = () => {
  const [setActive, setActiveState] = useState('Frontend');
  const toggleTab = (event) => {
    const { value } = event.currentTarget.dataset;

    setActiveState(() => value);
  };
  return (
    <div className="font-inter relative overflow-x-hidden">
      <img className="absolute left-0 top-20 z-40 md:w-72 w-20" src={PatternOne} alt="pattern one" />
      <img className="absolute right-0 top-20 z-40 md:w-32 w-12" src={PatternTwo} alt="pattern one" />
      <nav className="w-full fixed z-50 bg-white dark:bg-gray-900 border-b border-white dark:border-gray-800 flex justify-between items-center md:px-24 px-5 py-3 shadow">
        <img src={Logo} alt="Logo" />
        <ThemeButton />
      </nav>
      <div className="md:px-24 pt-40 md:pb-28 pb-8 relative dark:bg-kiwi border-b border-transparent dark:border-gray-800">
        <h1 className="uppercase text-sm text-blue-600 font-bold text-center">START A JOURNEY IN WEB DEVELOPMENT</h1>
        <h1 className="md:text-5xl text-lg text-center dark:text-darkorange"> An opinionated Frontend Web <br /> Development curriculum.</h1>
        <div className="relative md:top-20 top-5 flex justify-center">
          <button
            type="button"
            className={`md:px-5 px-3 rounded-xl md:py-3 py-1 stackBtn md:text-sm text-xs  focus:outline-none ${setActive === 'Frontend' && 'active'
              }`}
            onClick={toggleTab}
            id="Frontend"
            data-value="Frontend"
          >
            Frontend
          </button>
          <button
            type="button"
            className={`md:px-5 px-3 rounded-xl md:py-3 py-1 stackBtn md:text-sm text-xs focus:outline-none ${setActive === 'Backend' && 'active'
              }`}
            onClick={toggleTab}
            id="Backend"
            data-value="Backend"
          >
            Backend
          </button>
          <button
            type="button"
            className={`md:px-5 px-3 rounded-xl md:py-3 py-1 stackBtn md:text-sm text-xs  focus:outline-none ${setActive === 'UiUx' && 'active'
              }`}
            onClick={toggleTab}
            id="UiUx"
            data-value="UiUx"
          >
            UI/UX
          </button>
          <button
            type="button"
            className={`md:px-5 px-3 rounded-xl md:py-3 py-1 stackBtn md:text-sm text-xs  focus:outline-none ${setActive === 'Devops' && 'active'
              }`}
            onClick={toggleTab}
            id="Devops"
            data-value="Devops"
          >
            Devops
          </button>
          <button
            type="button"
            className={`md:px-5 px-3 rounded-xl md:py-3 py-1 stackBtn md:text-sm text-xs focus:outline-none ${setActive === 'DataScience' && 'active'
              }`}
            onClick={toggleTab}
            id="DataScience"
            data-value="DataScience"
          >
            Data Science
          </button>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800">
        {setActive === 'Frontend' && <Frontend />}
        {setActive === 'Backend' && <Backend />}
        {setActive === 'Devops' && <Devops />}
        {setActive === 'UiUx' && <UIUX />}
        {setActive === 'DataScience' && <DataScience />}
      </div>
      <Footer />
    </div>

  )
}

export default Home;