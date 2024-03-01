import {useState} from 'react';
import axios from 'axios';
import { useNavigate,useLocation } from "react-router-dom";
import Cookies from 'universal-cookie';

const UpdateProjectForm = ({handleState , getUpdateData}) => {
    const cookies = new Cookies();
    const propUpdate = useLocation();

    const navigate = useNavigate();
    console.log("dat",getUpdateData)

    const [getData, setGetData] = useState({
        projectId:getUpdateData.projectId,
        title:getUpdateData.title,
        description:getUpdateData.description,
      })
      console.log("0val",getData)
    const handler = (e) => {
        console.log({ ...getData, [e.target.name]: e.target.value })
        setGetData({ ...getData, [e.target.name]: e.target.value });
      }

      const create = async () => {
        console.log("val",getData)
        const { data } = await axios.put("http://localhost:3000/project/updateProject", {
            projectId:getData.projectId,
            title:getData.title,
            description:getData.description,
        });
        console.log(data)
    
        if (data.error) {
          return alert("erroe in field");
        }
        return( 
            alert("Project is update Successfully "),
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
            <p className='text-3xl font-semibold py-5 text-blue-800'>Update Project</p>
            <label className='text-2xl py-5 text-blue-800'>
                Project Title
            </label>
            <input type='text' className='h-16 w-full pl-2 text-xl rounded-md border-2 border-blue-800 text-black bg-white' name='title' value={getData.title} onChange={handler} />
            <label className='text-2xl py-5 text-blue-800'> 
            Project Description
            </label>
            <input type='text' className='h-16 w-full pl-2 text-xl rounded-md border-2 border-blue-800 text-black bg-white' name='description' value={getData.description} onChange={handler}/>
            <div className='flex w-full my-5 justify-evenly'>
            <button className='w-2/5 bg-gradient-to-r from-cyan-600 to-blue-800' onClick={()=>create()}>Done</button>
            <button className='w-2/5 bg-gradient-to-r from-cyan-600 to-blue-800' onClick={()=>(handleState("table"))}>close</button>
            </div>
        </div>
    </div>
  )
}

export default UpdateProjectForm