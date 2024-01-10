function Sidebar(updateState) {
  return (
    <>
      <div className="w-1/6 h-full flex items-center bg-blue-800 ">
        <div className="w-full h-full shadow-2xl flex flex-col pt-12 px-4">
          <p
            className="text-lg text-white bg-black capitalize font-bold  cursor-pointer delay-100 duration-100 rounded-md p-2 hover:bg-gray-300"
            onClick={() => {
              void updateState.updateState("HOME");
            }}
          >
            Home
          </p>
          <p
            className="text-lg text-white  font-bold cursor-pointer delay-100 duration-100 rounded-md p-2 hover:bg-gray-300 hover:text-blue-800"
            onClick={() => {
              void updateState.updateState("TRAINEES");
            }}
          >
            Trainees
          </p>
          <p
            className="text-lg text-white  font-bold cursor-pointer delay-100 duration-100 rounded-md p-2 hover:bg-gray-300  hover:text-blue-800"
            onClick={() => {
              void updateState.updateState("PROJECTS");
            }}
          >
            Projects
          </p>
          <p
            className="text-lg text-white font-bold cursor-pointer delay-100 duration-100 rounded-md p-2 hover:bg-gray-300  hover:text-blue-800"
            onClick={() => {
              void updateState.updateState("TEAMS");
            }}
          >
            Teams
          </p>
          <p
            className="text-lg text-white font-bold cursor-pointer delay-100 duration-100 rounded-md p-2 hover:bg-gray-300  hover:text-blue-800"
            onClick={() => {
              void updateState.updateState("TASKS");
            }}
          >
            Tasks
          </p>
          <p
            className="text-lg text-white font-bold cursor-pointer delay-100 duration-100 rounded-md p-2 hover:bg-gray-300  hover:text-blue-800"
            onClick={() => {
              void updateState.updateState("REQUEST");
            }}
          >
            Requests
          </p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
