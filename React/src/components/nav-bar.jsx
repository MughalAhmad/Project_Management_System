import Cookies from 'universal-cookie';

function Navbar({handleProfile}) {
  const cookies = new Cookies();

  return (
    <>
      <div className="w-full h-16 flex shadow-2xl top-0 ">
        <div className="w-1/2 h-full  flex  items-center ">
          <div className="flex items-center justify-center w-1/3 h-full ">
            <p className="text-blue-900 font-bold text-2xl">Tech Project</p>
          </div>
        </div>
        <div className="w-1/2 h-full flex space-x-8 justify-end items-center pr-12 ">
         
          <p className="text-lg text-black cursor-pointer delay-100 duration-100 rounded-md p-2 hover:bg-gray-300"
          onClick={()=>{
            handleProfile("profile")
          }}
          >
            Profile
          </p>
          <p className="text-lg text-black cursor-pointer delay-100 duration-100 rounded-md p-2 hover:bg-gray-300">
            Logout
          </p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
