import Table from "./table";
import { useState,useEffect } from "react";
import axios from "axios";
import Cookies from 'universal-cookie';

import { useNavigate } from "react-router-dom";
function Team() {
  const cookies = new Cookies();
  const [first, setfirst] = useState([])

  const navigate = useNavigate();
  const getAllData = async () => {
    const { data } = await axios.get("http://localhost:3000/task/getAllTasks?instructorId="+cookies.get("userId"));
   console.log(data.response)
   setfirst(data.response)
  };
  useEffect(() => {
    getAllData()
  }, [])

  return (
    <>
      <div className="w-5/6 h-full flex items-center p-12 pb-0">
        <div className="w-full h-full shadow-2xl">
        <button className="ml-10 my-10 bg-gradient-to-r from-cyan-600 to-blue-800" onClick={()=>(navigate("/createTeamForm"))}>Create New Task</button>
          <Table  />
        </div>
      </div>
    </>
  );
}

export default Team;
