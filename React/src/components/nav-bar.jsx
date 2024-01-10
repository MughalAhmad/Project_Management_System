import Cookies from 'universal-cookie';

function Navbar() {
  const cookies = new Cookies();

  return (
    <>
      <div className="w-full h-16 flex shadow-2xl top-0 ">
        <div className="w-1/2 h-full  flex justify-center items-center ">
          <div className="flex items-center w-1/3 h-full">
            <p className="text-purple-900 font-bold text-2xl">User Name</p>
          </div>
        </div>
        <div className="w-1/2 h-full flex space-x-8 justify-end items-center pr-12 ">
          <p className="text-lg text-black cursor-pointer delay-100 duration-100 rounded-md p-2 hover:bg-gray-300">
            Notifications
          </p>
          <p className="text-lg text-black cursor-pointer delay-100 duration-100 rounded-md p-2 hover:bg-gray-300">
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
