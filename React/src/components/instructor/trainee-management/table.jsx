import axios from 'axios'
import {useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import UpdateTraineeForm from './updateTraineeForm';
import { useDispatch} from 'react-redux';
import {updateTrainee} from "../../../redux/traineeUpdateReducers"
import Cookies from 'universal-cookie';


const Table = ({handleState,handleAssignedData,handleUnAssignedData}) => {
  const cookies = new Cookies();

  const dispatch = useDispatch();
    const navigate = useNavigate();
const [updateData, setUpdateData] = useState({})


const [state, setState] = useState("table")
    const getData=(payload)=>{
// console.log(payload)
// dispatch(updateTrainee(payload))
setUpdateData(payload)
setState("updateForm")

    }
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [stack, setStack] = useState("");
const [assignment, setAssignment] = useState("");
const [first, setfirst] = useState([])


const getAllData = async (firstName,lastName,email,stack,assignment) => {
    const { data } = await axios.get(`http://localhost:3000/user/getInstructorTrainees?instructorId=${cookies.get("userId")}&firstName=${firstName}&lastName=${lastName}&email=${email}&stack=${stack}&assignment=${assignment}`);
  //  console.log(data.response)
   setfirst(data.response)
  };

  const getAssigned = async()=>{
    
    const { data } = await axios.get(`http://localhost:3000/user/getAssigned?instructorId=${cookies.get("userId")}&&assignment=${"assigned"}`);
    const  getAssignedData=data.response.length;
    console.log("++++++++++++++++++",getAssignedData);
    handleAssignedData(getAssignedData);
  }

  const getUnassigned = async()=>{
    const { data } = await axios.get(`http://localhost:3000/user/getAssigned?instructorId=${cookies.get("userId")}&&assignment=${"unassigned"}`);
    const  getUnassignedData=data.response.length;
    console.log("++++++++++++++++++",getUnassignedData);
    handleUnAssignedData(getUnassignedData);
  }


  const handleBlock = async (userId) => {
    const res = await axios.put("http://localhost:3000/user/blockUser", {
        userId,
    });
    if(res.error){
      console.log(res.error)
    }
}
const handleupdateState=(sat)=>{
    setState(sat)
}
const handleBlockData=(val)=>{
    handleBlock(val),
    alert("do you block this trainee"),
    getAllData(firstName,lastName,email,stack,assignment)
}
useEffect(() => {
    // console.log("hqll")
    // if(!firstName==""){
   getAllData(firstName,lastName,email,stack,assignment)

// }
getAssigned();
getUnassigned();
}, [firstName,lastName,email,stack,assignment])



  return (
    <div className='relative w-full h-full'>
        <div className='h-1/6 w-full bg-red- flex '>

<div className='w-5/6 h-full bg-orange- flex justify-center items-center'>


            <div className='w-1/2 bg-red- flex flex-col px-8'>
           <label className='text-xl py-2 text-blue-800'>First Name</label>
            <input className='h-8 rounded-lg border-2 border-blue-800 bg-white text-black pl-2 '  value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
           </div>

           <div className='w-1/2 bg-red- flex flex-col px-8'>
           <label className='text-xl py-2 text-blue-800'>Last Name</label>
            <input className='h-8 rounded-lg border-2 border-blue-800 bg-white text-black pl-2' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
           </div>

           <div className='w-1/2 bg-red- flex flex-col px-8'>
           <label className='text-xl py-2 text-blue-800'>Email</label>
            <input className='h-8 rounded-lg border-2 border-blue-800 bg-white text-black pl-2' value={email} onChange={(e)=>setEmail(e.target.value)}/>
           </div>
           <div className='w-1/2 bg-red- flex flex-col px-8'>
           <label className='text-xl py-2 text-blue-800'>Stack</label>
            <input className='h-8 rounded-lg border-2 border-blue-800 bg-white text-black pl-2' value={stack} onChange={(e)=>setStack(e.target.value)}/>
           </div>
           <div className='w-1/2 bg-red- flex flex-col px-8'>
           <label className='text-xl py-2 text-blue-800'>Assignment</label>
            <input className='h-8 rounded-lg border-2 border-blue-800 bg-white text-black pl-2' value={assignment} onChange={(e)=>setAssignment(e.target.value)}/>
           </div>



</div>

                <div className='w-1/6 h-full bg-green- flex justify-center items-center'>
                <button className="bg-gradient-to-r from-cyan-600 to-blue-800 my-5 ml-5" onClick={()=>(handleState("blockPage"))}>Blocked Traisnees</button>

                </div>

                
                </div>
<div className='overflow-y-auto h-5/6 w-full' >
        <table className="w-full">
            <thead>
                <tr className="bg-blue-800">
                    <th className="p-2 border-r border-t  text-sm text-white">
                            #
                    </th>
                    <th className="p-2 border-r border-t text-sm text-white">
                            First Name
                           
                    </th>
                    <th className="p-2 border-r border-t text-sm  text-white">
                            Last Name
                           
                    </th>
                    <th className="p-2 border-r border-t text-sm text-white">
                            Email
                    </th>
                    <th className="p-2 border-r border-t text-sm text-white">
                            Stack
                    </th>
                    <th className="p-2 border-r border-t text-sm text-white">
                    Assignment
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
                {first.map((item,index)=>{
                    return(
                        <tr className="bg-gray-100 text-center border-b text-sm " key={index}>
                    <td className="p-2 border-r text-gray-600">{index+1}</td>
                    <td className="p-2 border-r text-gray-600">{item.firstName}</td>
                    <td className="p-2 border-r text-gray-600">{item.lastName}</td>
                    <td className="p-2 border-r text-gray-600">{item.email}</td>
                    <td className="p-2 border-r text-gray-600">{item.stack}</td>
                    <td className="p-2 border-r text-gray-600">{item.assignment}</td>

                    <td className="p-2 border-r"><button className='bg-gradient-to-r from-cyan-600 to-blue-800 focus:outline-none ' onClick={()=>handleBlockData(item.userId)}>Block</button></td>
                    <td className="p-2 border-r"><button className='bg-gradient-to-r from-cyan-600 to-blue-800 focus:outline-none'
                    onClick={() => {
                        // navigate("/updateTraineeForm",{state:{item}})
                        getData(
                            {
                            userId:item.userId,
                            firstName:item.firstName,
                            lastName:item.lastName,
                            email:item.email,
                            stack:item.stack,
                            // assignment:item.assignment,
                        }
                        // item.userId
                        )
// setState("updateForm")
                      }}
                    >Update</button></td>
                </tr>
                    )
                })}
            </tbody>
        </table>
</div>
<div  style={{display:state==="updateForm" ? "block":"none"}} className="absolute top-0 bg-black bg-opacity-50  w-full h-full ">
   { state=="updateForm" && <UpdateTraineeForm  handleupdateState={handleupdateState} updateData={updateData} getAllData={getAllData}/>}

</div>
</div>
  )
}

export default Table




 