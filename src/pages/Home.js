import React, { useState } from 'react';
import ThemeButton from '../components/ThemeButton';

import Logo from '../assets/logo.svg';
import PatternOne from '../assets/pattern1.svg';
import PatternTwo from '../assets/pattern2.svg';
import Frontend from '../components/Frontend';


const Home = () => {
  const [setActive, setActiveState] = useState('Frontend');
  const toggleTab = (event) => {
    const { value } = event.currentTarget.dataset;

    setActiveState(() => value);
  };
  return (
    <div className="font-rubik relative">
      <img className="absolute left-0 top-20" src={PatternOne} alt="pattern one" />
      <img className="absolute right-0 top-20" src={PatternTwo} alt="pattern one" />
      <nav className="w-full fixed z-50 bg-white dark:bg-gray-900 border-b border-white dark:border-gray-800 flex justify-between items-center md:px-24 md:py-3 shadow">
        <img src={Logo} alt="Logo" />
        <ThemeButton />
      </nav>
      <div className="md:px-24 md:pt-40 md:pb-28 relative">
        <h1 className="uppercase text-sm text-blue-600 font-medium text-center">START A JOURNEY IN WEB DEVELOPMENT</h1>
        <h1 className="text-4xl text-center dark:text-darkorange"> An opinionated Web Development <br /> curriculum for the serious</h1>
        <div className="relative md:top-20 flex md:space-x-6 justify-center">
          <button
            type="button"
            className={`text-sm ${setActive === 'Frontend' && 'active:bg-blue-600'
              }`}
            onClick={toggleTab}
            id="Frontend"
            data-value="Frontend"
          >
            Frontend
          </button>
          <button
            type="button"
            className={`text-sm ${setActive === 'Backend' && 'active'
              }`}
            onClick={toggleTab}
            id="Backend"
            data-value="Backend"
          >
            Backend
          </button>
          <button
            type="button"
            className={`text-sm ${setActive === 'UiUx' && 'active'
              }`}
            onClick={toggleTab}
            id="UiUx"
            data-value="UiUx"
          >
            UI/UX
          </button>
          <button
            type="button"
            className={`text-sm ${setActive === 'Devops' && 'active'
              }`}
            onClick={toggleTab}
            id="Devops"
            data-value="Devops"
          >
            Devops
          </button>
          <button
            type="button"
            className={`text-sm ${setActive === 'DataScience' && 'active'
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
        <Frontend />
      </div>
    </div>

  )
}

export default Home;