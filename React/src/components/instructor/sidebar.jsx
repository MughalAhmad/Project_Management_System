import { useState } from "react";
function Sidebar({updateState}) {
  const [bgColor, setBgColor] = useState("HOME")
  return (
    <>
      <div className="w-1/6 h-full flex items-center bg-blue-800 flex-col">
        <div className="bg-red- w-full flex pt-10">
          <div className="w-1/3 flex justify-center">
        <img src="assets/pic.png" alt="none" />
        </div>
        <div className="bg-yellow- w-2/3 pl-2 flex flex-col justify-evenly items-starts">
          <p className="text-xl text-white overflow-auto font-bold ml-1">Ahmad Khurshed </p>
          <button className="h-6 p-0 w-4/5 rounded-full bg-white text-blue-800 m-0 hover:bg-transparent hover:text-white hover:border hover:border-white"
            onClick={() => {
              updateState("PROFILE");
              setBgColor("PROFILE")
            }}
          >View Profile</button>
        </div>
        </div>
        <hr className="w-4/5 mt-5"/>
        <div className="w-full h-full shadow-2xl flex flex-col pt-4 px-4">
          <p
          style={{backgroundColor:bgColor=="HOME"? "black":""}}
            className="text-lg text-white   font-bold  cursor-pointer delay-100 duration-100 rounded-md p-2 hover:bg-gray-300 hover:text-blue-800"
            onClick={() => {
              updateState("HOME");
              setBgColor("HOME")
            }}
          >
            Home
          </p>
          <p
          style={{backgroundColor:bgColor=="TRAINEES"? "black":""}}
            className="text-lg text-white  font-bold cursor-pointer delay-100 duration-100 rounded-md p-2 hover:bg-gray-300 hover:text-blue-800"
            onClick={() => {
              setBgColor("")
              updateState("TRAINEES");
              setBgColor("TRAINEES")
            }}
          >
            Trainees
          </p>
          <p
            style={{backgroundColor:bgColor=="PROJECTS"? "black":""}}
            className="text-lg text-white  font-bold cursor-pointer delay-100 duration-100 rounded-md p-2 hover:bg-gray-300  hover:text-blue-800"
            onClick={() => {
              updateState("PROJECTS");
              setBgColor("PROJECTS")

            }}
          >
            Projects
          </p>
          <p
            style={{backgroundColor:bgColor=="TEAMS"? "black":""}}
            className="text-lg text-white font-bold cursor-pointer delay-100 duration-100 rounded-md p-2 hover:bg-gray-300  hover:text-blue-800"
            onClick={() => {
              updateState("TEAMS");
              setBgColor("TEAMS")
            }}
          >
            Teams
          </p>
          <p
            style={{backgroundColor:bgColor=="TASKS"? "black":""}}
            className="text-lg text-white font-bold cursor-pointer delay-100 duration-100 rounded-md p-2 hover:bg-gray-300  hover:text-blue-800"
            onClick={() => {
              updateState("TASKS");
              setBgColor("TASKS")
            }}
          >
            Tasks
          </p>
          <p
            style={{backgroundColor:bgColor=="REQUEST"? "black":""}}
            className="text-lg text-white font-bold cursor-pointer delay-100 duration-100 rounded-md p-2 hover:bg-gray-300  hover:text-blue-800"
            onClick={() => {
              updateState("REQUEST");
              setBgColor("REQUEST")
            }}
          >
            Requests
          </p>
          <p
            className="text-lg text-white font-bold cursor-pointer delay-100 duration-100 rounded-md p-2 hover:bg-gray-300  hover:text-blue-800"
          >
            Logout
          </p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
