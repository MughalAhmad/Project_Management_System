import {useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';

const UpdateTaskForm = ({handleState,getUpdateData}) => {
  const [project, setProject] = useState("")
const [finalData, setFinalData] = useState("");

// console.log("getUpdateData",getUpdateData)
    const cookies = new Cookies();
    const navigate = useNavigate();
    const getAllProject = async () => {
      const getData = await axios.get(`http://localhost:3000/project/getUpdatedProjects?instructorId=${cookies.get("userId")}`);
      console.log(getData.data.response)
      const getVal=getData.data.response
      if (getVal.error) {
        return alert("erroe in field");
      }
      const {data} = await axios.get(`http://localhost:3000/project/getProject?instructorId=${cookies.get("userId")}&projectId=${getUpdateData.projectId}`);
      console.log(data.response)
      if (data.error) {
        return alert("erroe in field");
      }

const arr1=[];
getVal.map((item)=>{
        if(data.response.projectId != item.projectId){
arr1.push(item);
        }
      })
      arr1.unshift(data.response);
setProject(data.response.projectId)
      console.log("AARR",arr1)

      return( 
      setFinalData(arr1)
      );
    };
    


   

    useEffect(() => {
      getAllProject()
  }, [])
    const [getData, setGetData] = useState({
        title:getUpdateData.title,
        description:getUpdateData.description,
        instructorId:cookies.get("userId"),
        taskId:getUpdateData.taskId
      })
    const handler = (e) => {
        console.log({ ...getData, [e.target.name]: e.target.value })
        setGetData({ ...getData, [e.target.name]: e.target.value });
      }
      
      const create = async () => {
        const { data } = await axios.put("http://localhost:3000/task/updateTask", {
        taskId:getUpdateData.taskId,
            title:getData.title,
            description:getData.description,
            instructorId:getData.instructorId,
            projectId:project,
        });
        console.log(data)
    
        if (data.error) {
          return alert("erroe in field");
        }
        return( 
            alert("Task is Successfully Create"),
            handleState("table")
            );
      };

      const handlePopUpBox=(e)=>{
        if(e.target.id=="container") handleState("table");
      }
// console.log("AllProject",allProject)
// console.log("Project",project)

      
  return (
    <div 
    id="container"
    onClick={handlePopUpBox}
    className='h-full w-full  flex justify-center items-center'>
        <div className='flex flex-col bg-white w-2/6 px-16 rounded-md'>
            <p className='text-3xl font-semibold py-5 text-blue-800'>Update Task</p>
            <label className='text-2xl py-5 text-blue-800'>
                Task Title
            </label>
            <input type='text' className='h-16 w-full pl-2 text-xl rounded-md bg-white border-2 border-blue-800 text-black' name='title' value={getData.title} onChange={handler} />
            <label className='text-2xl py-5 text-blue-800'> 
            Task Description
            </label>
            <input type='text' className='h-16 w-full pl-2 text-xl rounded-md bg-white border-2 border-blue-800 text-black' name='description' value={getData.description} onChange={handler}/>
            <label className='text-2xl py-5 text-blue-800'> 
            Select Project 
            </label>
            <select className='h-16 w-full pl-2 text-xl rounded-md bg-white border-2 border-blue-800 text-black' name='project'  defaultValue={project.title} onChange={(e)=>setProject(e.target.value)}>
            {/* <option selected value={getUpdateData.projectId}  >{project.title}</option> */}

               {finalData && finalData.map((item,index)=>{
                return(
                    <option value={item.projectId} key={index}>{item.title}</option>
                )
               })}

            </select>
            {/* <input type='text' className='h-16 w-full pl-2 text-xl rounded-md' name='description' value={getData.description} onChange={handler}/> */}
            <div className='flex w-full my-5 justify-evenly'>
            <button className='w-2/5 bg-gradient-to-r from-cyan-600 to-blue-800' onClick={()=>create()}>Done</button>

            <button className='w-2/5 bg-gradient-to-r from-cyan-600 to-blue-800' onClick={()=>(handleState("table"))}>close</button>
            </div>
        </div>
    </div>
  )
}

export default UpdateTaskForm