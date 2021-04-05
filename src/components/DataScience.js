import HeaderBar from './HeaderBar';

const DataScience = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <h1 className="text-2xl text-center py-10">Data Science</h1>
      <div className="md:px-36 relative md:pb-40">
        <div className="bg-white shadow">
          <HeaderBar />
          <div className="md:px-10 md:py-10">
            {/* <h1 className="font-medium">Resources</h1> */}
            <div><h1 className="text-7xl text-gray-400 text-center">No Content for Now!</h1></div>
            {/* <div>
            <p>1. Free Code Camp(HTML & CSS)</p>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
export default DataScience;
