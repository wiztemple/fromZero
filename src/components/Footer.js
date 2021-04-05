import React from 'react';
import Logo from '../assets/logo.svg';
import ThreeCircles from '../assets/threecircles.svg';

const Footer = () => (
  <div className="md:flex justify-between md:px-24 px-6 space-y-6 md:space-y-0 py-10 md:py-0 bg-blueroom overflow-hidden">
    <div className="flex items-center md:w-1/3">
      <img src={Logo} alt="Logo" />
      <span className="text-xl font-medium text-white block pl-2">fromZero</span>
    </div>
    <div className="md:w-1/3">
      <div className="md:h-72 flex justify-center items-center md:w-72 bg-grey bg-opacity-20 rounded-full">
        <span className="text-white">Copyright © 2020. All rights reserved.</span>
      </div>
    </div>
    <div className="md:w-1/3 flex items-center relative">
      <img src={ThreeCircles} className="absolute -right-52" alt="Three Circles" />
      <div>
        <span className="flex items-center">
          <span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.999 0C4.477 0 0 4.477 0 9.999C0 14.989 3.656 19.125 8.437 19.878V12.89H5.897V9.999H8.437V7.796C8.437 5.288 9.93 3.905 12.213 3.905C13.307 3.905 14.453 4.1 14.453 4.1V6.559H13.189C11.949 6.559 11.561 7.331 11.561 8.122V9.997H14.332L13.889 12.888H11.561V19.876C16.342 19.127 19.998 14.99 19.998 9.999C19.998 4.477 15.521 0 9.999 0Z" fill="white" />
            </svg>
          </span>
          <span className="text-white ml-2">Facebook</span>
        </span>
        <span className="flex items-center mt-2">
          <span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 8C10.7 6.5 9.5 5.3 8 5.3C6.5 5.3 5.3 6.5 5.3 8C5.3 9.5 6.5 10.7 8 10.7C9.5 10.7 10.7 9.5 10.7 8ZM12.1 8C12.1 10.3 10.3 12.1 8 12.1C5.7 12.1 3.9 10.3 3.9 8C3.9 5.7 5.7 3.9 8 3.9C10.3 3.9 12.1 5.7 12.1 8ZM13.2 3.7C13.2 4.3 12.8 4.7 12.2 4.7C11.6 4.7 11.2 4.3 11.2 3.7C11.2 3.1 11.6 2.7 12.2 2.7C12.8 2.7 13.2 3.2 13.2 3.7ZM8 1.4C6.8 1.4 4.3 1.3 3.3 1.7C2.6 2 2 2.6 1.8 3.3C1.4 4.3 1.5 6.8 1.5 8C1.5 9.2 1.4 11.7 1.8 12.7C2 13.4 2.6 14 3.3 14.2C4.3 14.6 6.9 14.5 8 14.5C9.1 14.5 11.7 14.6 12.7 14.2C13.4 13.9 13.9 13.4 14.2 12.7C14.6 11.6 14.5 9.1 14.5 8C14.5 6.9 14.6 4.3 14.2 3.3C14 2.6 13.4 2 12.7 1.8C11.7 1.3 9.2 1.4 8 1.4ZM16 8V11.3C16 12.5 15.6 13.7 14.7 14.7C13.8 15.6 12.6 16 11.3 16H4.7C3.5 16 2.3 15.6 1.3 14.7C0.5 13.8 0 12.6 0 11.3V8V4.7C0 3.4 0.5 2.2 1.3 1.3C2.3 0.5 3.5 0 4.7 0H11.3C12.5 0 13.7 0.4 14.7 1.3C15.5 2.2 16 3.4 16 4.7V8Z" fill="white" />
            </svg>
          </span>
          <span className="text-white ml-2">Instagram</span>
        </span>
        <span className="flex items-center mt-2">
          <span>
            <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.706 2.18952C21.871 2.55952 20.974 2.80952 20.031 2.92252C21.004 2.34031 21.7319 1.42398 22.079 0.344518C21.1648 0.887508 20.1643 1.26971 19.121 1.47452C18.4194 0.725384 17.4901 0.228845 16.4773 0.0619924C15.4646 -0.10486 14.4251 0.0673099 13.5202 0.551771C12.6154 1.03623 11.8958 1.80588 11.4732 2.74122C11.0505 3.67656 10.9485 4.72527 11.183 5.72452C9.33069 5.63151 7.51863 5.15007 5.86442 4.31142C4.21022 3.47278 2.75084 2.29568 1.581 0.856519C1.181 1.54652 0.951 2.34652 0.951 3.19852C0.950554 3.96551 1.13943 4.72076 1.50088 5.39725C1.86232 6.07374 2.38516 6.65056 3.023 7.07652C2.28328 7.05298 1.55987 6.8531 0.913 6.49352V6.55352C0.912925 7.62926 1.28503 8.6719 1.96618 9.50451C2.64733 10.3371 3.59557 10.9084 4.65 11.1215C3.96378 11.3072 3.24434 11.3346 2.546 11.2015C2.8435 12.1271 3.423 12.9365 4.20337 13.5164C4.98374 14.0963 5.92592 14.4177 6.898 14.4355C5.24783 15.7309 3.20989 16.4336 1.112 16.4305C0.740381 16.4306 0.369076 16.4089 0 16.3655C2.12948 17.7347 4.60834 18.4613 7.14 18.4585C15.71 18.4585 20.395 11.3605 20.395 5.20452C20.395 5.00452 20.39 4.80252 20.381 4.60252C21.2923 3.94349 22.0789 3.12741 22.704 2.19252L22.706 2.18952V2.18952Z" fill="white" />
            </svg>
          </span>
          <span className="text-white ml-2">Twitter</span>
        </span>
      </div>
    </div>
  </div>
)

export default Footer;
