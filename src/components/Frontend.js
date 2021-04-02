import React from 'react';
import HeaderBar from './HeaderBar';

const Frontend = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <h1 className="text-2xl text-center py-10"> FRONTEND</h1>
      <div className="md:px-36 relative shadow-lg">
        <HeaderBar />
        <div className="bg-white md:px-10 md:py-10">
          <h1 className="font-medium">Resources</h1>
          <p>Here are the links to the recommended resources. If I was to start my journey afresh as
a newbie with the current knowledge I have now, these are the resources I would use</p>
          <div>
            <p>1. Free Code Camp(HTML & CSS)</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Frontend;
