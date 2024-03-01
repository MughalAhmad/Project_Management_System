import Table from "./table";
import { useState,useEffect } from "react";
// import axios from "axios";
// import Cookies from 'universal-cookie';

import { useNavigate } from "react-router-dom";
function Projects() {
  // const cookies = new Cookies();
  // const [first, setfirst] = useState([])

  const navigate = useNavigate();
  // const getAllData = async () => {
  //   const { data } = await axios.get("http://localhost:3000/project/getAllProjects?instructorId="+cookies.get("userId"));
  //  console.log("pro",data.response)
  //  setfirst(data.response)
  // };
   

  // useEffect(() => {
  //   getAllData()
  // }, [])
   

  return (
    <>
      <div className="w-5/6 h-full p-12 pb-0">
        <div className="w-full h-full shadow-2xl">
          <Table/>
        </div>
       
      </div>
    </>
  );
}

export default Projects;
