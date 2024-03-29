import {useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';

const CreateTaskForm = ({handleState}) => {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [getData, setGetData] = useState({
        title:"",
        description:"",
        instructorId:cookies.get("userId"),
        projectId:""
      })
      const [projects, setProjects] = useState([])

    useEffect(() => {
        getProject()
    }, [])
    

    const handler = (e) => {
        console.log({ ...getData, [e.target.name]: e.target.value })
        setGetData({ ...getData, [e.target.name]: e.target.value });
      }
      const selectHandler = (e) => {
        console.log(e.target.value)
        setGetData({ ...getData, [e.target.name]: e.target.value });
      }
      
      const getProject = async () => {
        const { data } = await axios.get("http://localhost:3000/project/getAllProjects?instructorId="+cookies.get("userId"));
        // console.log(data.response)
    setProjects(data.response)
        // if (data.error) {
        //   return alert("erroe in field");
        // }
        // return( 
        //     alert("Project in Successfully Create"),
        //     navigate(-1)
        //     );
      };

      const create = async () => {
        const { data } = await axios.post("http://localhost:3000/task/createTask", {
            title:getData.title,
            description:getData.description,
            instructorId:getData.instructorId,
            projectId:getData.projectId,
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
  return (
    <div 
    id="container"
    onClick={handlePopUpBox}
    className='h-full w-full  flex justify-center items-center'>
        <div className='flex flex-col bg-white w-2/6 px-16 rounded-md'>
            <p className='text-3xl font-semibold py-5 text-blue-800'>Create New Task</p>
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
            <select className='h-16 w-full pl-2 text-xl rounded-md bg-white border-2 border-blue-800 text-black' name='projectId' defaultValue={getData.projectId} onChange={handler}>
                <option >Select</option>
               {projects && projects.map((item,index)=>{
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

export default CreateTaskForm