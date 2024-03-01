import Card from "./card";
import Table from "./table";
import Calendar from "./calender";
import axios from "axios";
import Cookies from 'universal-cookie';
import { useState,useEffect } from "react";
function Home() {
  const cookies = new Cookies();

  const [trainee, setTrainee] = useState([])
  const [project, setProject] = useState([])
  const [task, setTask] = useState([])


  const getAllTrainee = async () => {
    const { data } = await axios.get("http://localhost:3000/user/getInstructorTrainees?instructorId="+cookies.get("userId"));
  //  console.log(data.response)
   setTrainee(data.response)
  };
  const getAllProject = async () => {
    const { data } = await axios.get("http://localhost:3000/project/getAllProjects?instructorId="+cookies.get("userId"));
  //  console.log(data.response)
   setProject(data.response)
  };
  const getAllTask = async () => {
    const { data } = await axios.get("http://localhost:3000/task/getAllTasks?instructorId="+cookies.get("userId"));
  //  console.log(data.response)
   setTask(data.response)
  };
  useEffect(() => {
    getAllProject()
    getAllTrainee()
    getAllTask()
  }, [])
  // console.log(trainee.length)
  return (
    <>
      <div className="w-5/6 h-full flex items-center p-12 pb-0 ">
        <div className="w-full h-full shadow-2xl">
        
       <p className="text-4xl text-white font font-semibold bg-gradient-to-r from-cyan-600 to-blue-800 py-4 pl-24">Wellcome {}</p>
          <div className=" h-2/5 flex justify-evenly items-center flex-wrap">
<Card data={"Project"} value={project.length}/>
<Card data={"Trainees"} value={trainee.length}/>
<Card data={"team"} value={"10"}/>
{/* <Card data={"task"} value={task.length}/> */}
<Card data={"Blocked "} value={"10"}/>

          </div>
          {/* <div className=" flex w-full h-2/4">
            <div className="w-3/5 h-full flex justify-center items-center">
            <Table/>
            </div>
            <div className="w-2/5 flex justify-center items-center">
            <Calendar/>
            </div>

          </div> */}
        </div>
      </div>
    </>
  );
}

export default Home;
