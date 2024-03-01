import Table from "./table";
import { useState,useEffect } from "react";

import { useNavigate } from "react-router-dom";
function Team() {

  const navigate = useNavigate();
  

  return (
    <>
      <div className="w-5/6 h-full p-12 pb-0">
        <div className="w-full h-full shadow-2xl">
        {/* <button className="ml-10 my-10 bg-gradient-to-r from-cyan-600 to-blue-800" onClick={()=>(navigate("/createTeamForm"))}>Create New Task</button>
          <Table  /> */}



        
          <Table />



        </div>
      </div>
    </>
  );
}

export default Team;
