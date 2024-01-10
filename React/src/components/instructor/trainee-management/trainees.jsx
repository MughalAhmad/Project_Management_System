import axios from "axios";
import Cookies from 'universal-cookie';
import { useState,useEffect } from "react";
import Table from "./table";
import { useNavigate } from "react-router-dom";
function Trainees() {
  const navigate = useNavigate();
  const cookies = new Cookies();

  const [first, setfirst] = useState([])
  const getAllData = async () => {
    const { data } = await axios.get("http://localhost:3000/user/getInstructorTrainees?instructorId="+cookies.get("userId"));
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
        {/* <button className="ml-10 my-10" onClick={()=>(navigate("/createTraineeForm"))}>Create New Traisnee</button> */}
          <Table first={first}/>
        </div>
      </div>
    </>
  );
}

export default Trainees;
