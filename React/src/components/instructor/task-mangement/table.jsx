import { useState,useEffect } from "react";
import CreateTaskForm from "./createTaskForm";
import UpdateTaskForm from "./updateTaskForm";
import Cookies from 'universal-cookie';
import axios from "axios";

const Table = () => {
    const [changeState, setChangeState] = useState("table");
    const [getUpdateData, setGetUpdateData] = useState({});
    const [getDeleteBox, setGetDeleteBox] = useState({});
    const [projectTitle, setProjectTitle] = useState("")
    const [taskTitle, setTaskTitle] = useState("")
    const [states, setStates] = useState("")
    const [first, setfirst] = useState([])
    const cookies = new Cookies();
    const [data, setData] = useState([])

  
  
  const handleState = (val) => {
    setChangeState(val);
    getAllData();
  };
  const getAllData = async () => {
    const { data } = await axios.get(`http://localhost:3000/task/getAllTasks?instructorId=${cookies.get("userId")}`);
    console.log(data.response)
    setData(data.response)
    setfirst(data.response)
  };

      const handleDelete = async (taskId) => {
        const { data } = await axios.delete(`http://localhost:3000/task/deleteProject?taskId=${taskId}`);
       console.log(data.response)
       if(data.error){
        console.log("Error",data.error)
      }
      getAllData();
      setChangeState("table")
  
      };
      const handleGetData = (item) => {
        setGetUpdateData(item);
        setChangeState("updateForm");
      };
      const handleDeleteBox = (item) => {
        handleState("delete");
        setGetDeleteBox(item);
      };
    console.log("valss",getDeleteBox);
    
    const handlePopUpBox=(e)=>{
        // console.log(e.target)
        if(e.target.id=="container") handleState("table");
      }
      useEffect(() => {
        getAllData()
        
      }, [])
      useEffect(() => {
        // 
        setData(
          first.filter((item)=>{
            return (!taskTitle || item.task.title.toLocaleLowerCase().includes(taskTitle.toLocaleLowerCase()) ) && (!states || item.task.states.toLocaleLowerCase().includes(states.toLocaleLowerCase())) && (!projectTitle || item.project.title.toLocaleLowerCase().includes(projectTitle.toLocaleLowerCase())) ;
          })
        )
        // 
      }, [projectTitle,taskTitle,states])


      console.log(projectTitle)
      console.log("DATA",data)


  return (
<div className=' relative w-full h-full'>
{/* <button className="ml-10 my-10 bg-gradient-to-r from-cyan-600 to-blue-800" 
        onClick={() => handleState("createForm")}
        >Create New Task</button> */}
{/* ///////////////// */}



<div className='h-1/6 w-full bg-red- flex '>

<div className='w-4/5 h-full bg-orange- flex justify-center items-center'>


            <div className='w-1/2 bg-red- flex flex-col px-10'>
           <label className='text-xl py-2 text-blue-800'>Project Name</label>
            <input className='h-8 rounded-lg border-2 border-blue-800 bg-white text-black pl-2'
            value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
            />
           </div>

           <div className='w-1/2 bg-red- flex flex-col px-10'>
           <label className='text-xl py-2 text-blue-800'>Task Title</label>
            <input className='h-8 rounded-lg border-2 border-blue-800 bg-white text-black pl-2'
            value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
           </div>


           <div className='w-1/2 bg-red- flex flex-col px-10'>
           <label className='text-xl py-2 text-blue-800'>States</label>
            <input className='h-8 rounded-lg border-2 border-blue-800 bg-white text-black pl-2'
            value={states}
              onChange={(e) => setStates(e.target.value)}
            />
           </div>

          



</div>

                <div className='w-1/5 h-full bg-green- flex justify-center items-center'>
                <button className="bg-gradient-to-r from-cyan-600 to-blue-800 my-5 ml-5"  onClick={() => handleState("createForm")}>Create New Task</button>

                </div>

                
                </div>



{/* //////////////////////// */}

<div className='overflow-y-auto h-5/6 w-full'>
        <table className="w-full">
            <thead>
                <tr className="bg-blue-800">
                    <th className="p-2 border-r border-t  text-sm text-white">
                            #
                    </th>
                    <th className="p-2 border-r border-t text-sm text-white">
                            Task Title
                           
                    </th>
                    <th className="p-2 border-r border-t text-sm  text-white">
                    Task Description
                           
                    </th>
                    <th className="p-2 border-r border-t text-sm  text-white">
                    Project Name
                           
                    </th>
                    <th className="p-2 border-r border-t text-sm  text-white">
                    Task States
                           
                    </th>
                    <th className="p-2 border-r border-t text-sm  text-white">
                            Status
                    </th>
                    <th className="p-2 border-r border-t text-sm  text-white">
                            Status
                    </th>
                </tr>
            </thead>
            <tbody className='[&>*:nth-child(even)]:bg-gray-100 [&>*:nth-child(odd)]:bg-gray-300'>
                {data.map((item,index)=>{
                    return(
                        <tr className="bg-gray-100 text-center border-b text-sm " key={index}>
                    <td className="p-2 border-r text-gray-600">{index+1}</td>
                    <td className="p-2 border-r text-gray-600">{item.task.title}</td>
                    <td className="p-2 border-r text-gray-600">{item.task.description}</td>
                    <td className="p-2 border-r text-gray-600">{item.project.title}</td>
                    <td className="p-2 border-r text-gray-600">{item.task.states}</td>

                    <td className="p-2 border-r"><button className='bg-gradient-to-r from-cyan-600 to-blue-800'
                     onClick={() => {
                        handleDeleteBox(item.task);
                      }}
                    >Delete</button></td>
                    <td className="p-2 border-r"><button className='bg-gradient-to-r from-cyan-600 to-blue-800'
                     onClick={() => {
                        handleGetData(item.task);
                      }}
                    >Update</button></td>
                </tr>
                    )
                })}
            </tbody>
        </table>
        </div>




        {changeState === "createForm" &&
        <div
        className="absolute top-0 bg-black bg-opacity-50  w-full h-full "
      >
        <CreateTaskForm handleState={handleState} />
      </div>}







     {changeState === "updateForm" &&
      <div
        // style={{ display: changeState === "updateForm" ? "block" : "none" }}
        className="absolute top-0 bg-black bg-opacity-50  w-full h-full "
      >
        <UpdateTaskForm
          handleState={handleState}
          getUpdateData={getUpdateData}
        />
      </div>}















      <div
        style={{ display: changeState === "delete" ? "block" : "none" }}
        className="absolute top-0 bg-black bg-opacity-50  w-full h-full "
      >
        <div className="w-full h-full flex justify-center items-center"
         id="container"
        onClick={handlePopUpBox}
        >
          <div className="w-2/5 h-2/5 bg-white">
            <h3 className="text-black text-3xl">
              Do you want to delete this Project{" "}
            </h3>
            <label>Project Title</label>
            <p className="text-black">{getDeleteBox.title}</p>
            <label>Project Description</label>
            <p className="text-black">{getDeleteBox.description}</p>
            <div className='flex w-full my-5 justify-evenly'>
            <button className='w-2/5 bg-gradient-to-r from-cyan-600 to-blue-800' 
            onClick={()=>handleDelete(getDeleteBox.taskId)}
            >Delete</button>
            <button className='w-2/5 bg-gradient-to-r from-cyan-600 to-blue-800' 
            onClick={()=>(handleState("table"))}
            >close</button>
            </div>
          </div>
        </div>
      </div>
</div>
  )
}

export default Table