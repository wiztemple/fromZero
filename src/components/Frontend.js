import React, { useState } from 'react';
import HeaderBar from './HeaderBar';


const resources = [
  {
    id: 1,
    name: 'Free Code Camp',
    type: 'Course',
    course: 'HTML & CSS',
    link: 'https://www.freecodecamp.org/learn/responsive-web-design/'
  },
  {
    id: 2,
    name: 'Khan Academy: Intro to HTML/CSS: Making webpages',
    type: 'Course',
    course: 'HTML & CSS',
    link: 'https://www.khanacademy.org/'
  },
  {
    id: 3,
    name: 'W3Schools: HTML Introduction',
    type: 'Docs',
    course: 'HTML & CSS',
    link: 'https://www.w3schools.com/'
  },
  {
    id: 4,
    name: 'MDN Web Docs: Introduction to HTML',
    type: 'Docs',
    course: 'HTML & CSS',
    link: 'https://developer.mozilla.org/en-US/docs/Learn'
  },
  {
    id: 5,
    name: 'Free Code Camp Youtube Channel: intro to html and css',
    type: 'Video',
    course: 'HTML & CSS',
    link: 'a'
  }
]
const Frontend = () => {
  const [setActive, setActiveState] = useState('HTML');
  const toggleTab = (event) => {
    const { value } = event.currentTarget.dataset;

    setActiveState(() => value);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <h1 className="text-2xl text-center py-10 dark:text-yellow-300">FRONTEND</h1>
      <div className="md:px-36 relative md:pb-40">
        <div className="bg-white shadow rounded-tl-lg rounded-tr-lg border border-transparent dark:border-gray-800">
          <HeaderBar />
          <div className="bg-white dark:bg-kiwi md:pb-10">
            <div className="w-full border-b border-gray-200 dark:border-gray-800 flex">
              <button
                type="button"
                className={`md:px-10 px-4 md:py-5 py-3 frontendBtn md:text-sm text-xs focus:outline-none dark:text-red-400 ${setActive === 'HTML' && 'active'
                  }`}
                onClick={toggleTab}
                id="HTML"
                data-value="HTML"
              >
                HTML & CSS
              </button>
              <button
                type="button"
                className={`md:px-10 px-4 md:py-5 py-3 frontendBtn md:text-sm text-xs focus:outline-none dark:text-red-400 ${setActive === 'JAVASCRIPT' && 'active'
                  }`}
                onClick={toggleTab}
                id="JAVASCRIPT"
                data-value="JAVASCRIPT"
              >
                JAVASCRIPT
              </button>
              <button
                type="button"
                className={`md:px-10 px-4 md:py-5 py-3 frontendBtn md:text-sm text-xs focus:outline-none dark:text-red-400 ${setActive === 'GIT' && 'active'
                  }`}
                onClick={toggleTab}
                id="GIT"
                data-value="GIT"
              >
                GIT
              </button>
            </div>
            {setActive === 'HTML' &&
              <div className="md:px-28 px-6 md:py-12 py-10">
                <div className="flex items-center space-x-6">
                  <span className="dark:text-gray-300">Potential Duration</span>
                  <span className="block py-3 px-4 text-blueroom bg-blueroom bg-opacity-10 rounded-lg">3 Weeks</span>
                </div>
                <h1 className="font-medium text-lg dark:text-yellow-500 pt-5">Resources</h1>
                <p className="text-loon pt-3 dark:text-purple-300 md:text-base text-sm">Here are the links to the recommended resources. <br /> If I was to start my journey afresh as
                  a newbie with the current knowledge I have now, <br /> these are the resources I would use</p>
                <div className="list-decimal text-loon dark:text-purple-300 shadow-sm my-10">
                  {resources.map(resource => (
                    <a href={resource.link} target="_blank" className="flex md:text-base text-sm items-center space-x-6 border-b border-gray-200 dark:border-gray-800 py-3 md:px-10 px-5 hover:bg-gray-50 dark:hover:bg-gray-900" rel="noreferrer">
                      <span>{resource.name}</span>
                      <span className="block bg-red-500 bg-opacity-20 px-2 py-2 md:text-sm text-xs text-red-500 rounded-lg">{resource.type}</span>
                      <span className="block bg-blueroom bg-opacity-20 px-2 py-2 md:text-sm text-xs text-blueroom  rounded-lg">{resource.course}</span>
                    </a>
                  ))}
                </div>
                <h1 className="font-medium text-lg pt-3 dark:text-yellow-500">Projects</h1>
                <p className="text-loon dark:text-purple-300 pt-3">Here are links to  3 different UI prototypes of Landing Pages on Figma, If I were you,
                  <br /> I’ll make sure I complete this and seek feedback before proceeding to the next phase.
                  <br /> You don’t want to start on a faulty foundation.</p>
                <ol className="list-decimal pl-4 text-loon dark:text-purple-300">
                  <li><a href="#e">Free Code Camp(HTML & CSS)</a></li>
                  <li><a href="#e">Khan Academy: Intro to HTML/CSS: Making webpages)</a></li>
                  <li><a href="#e">W3Schools: HTML Introduction</a></li>
                  <li><a href="#e">MDN Web Docs: Introduction to HTML</a></li>
                  <li><a href="#e">Free Code Camp Youtube Channel: intro to html and css</a></li>
                </ol>
              </div>
            }

          </div>
        </div>

      </div>
    </div>
  )
}
export default Frontend;
