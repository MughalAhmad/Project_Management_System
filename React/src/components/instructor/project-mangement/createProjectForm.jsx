import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';

const CreateProjectForm = ({handleState}) => {
    const cookies = new Cookies();

    const navigate = useNavigate();
    const [getData, setGetData] = useState({
        title:"",
        description:"",
        instructorId:cookies.get("userId"),
      })
    const handler = (e) => {
        console.log({ ...getData, [e.target.name]: e.target.value })
        setGetData({ ...getData, [e.target.name]: e.target.value });
      }

      const create = async () => {
        const { data } = await axios.post("http://localhost:3000/project/createProject", {
            title:getData.title,
            description:getData.description,
            instructorId:getData.instructorId,
        });
        console.log(data)
    
        if (data.error) {
          return alert("erroe in field");
        }
        return( 
            alert("Project in Successfully Create"),
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
            <p className='text-3xl font-semibold py-5 text-blue-800'>Create New Project</p>
            <label className='text-2xl py-5 text-blue-800'>
                Project Title
            </label>
            <input type='text' className='h-16 w-full pl-2 text-xl rounded-md bg-white border-2 border-blue-800 text-black' name='title' value={getData.title} onChange={handler} />
            <label className='text-2xl py-5 text-blue-800'> 
            Project Description
            </label>
            <input type='text' className='h-16 w-full pl-2 text-xl rounded-md bg-white border-2 border-blue-800 text-black' name='description' value={getData.description} onChange={handler}/>
            <div className='flex w-full my-5 justify-evenly'>
            <button className='w-2/5 bg-gradient-to-r from-cyan-600 to-blue-800' onClick={()=>create()}>Done</button>
            <button className='w-2/5 bg-gradient-to-r from-cyan-600 to-blue-800' onClick={()=>(handleState("table"))}>close</button>
            </div>
        </div>
    </div>
  )
}

export default CreateProjectForm