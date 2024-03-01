import axios from 'axios'
import {useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';


const TableOfBlockedTrainees = ({handleState}) => {
    const [second, setSecond] = useState([])
    const cookies = new Cookies();
    const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [stack, setStack] = useState("");

    const navigate = useNavigate();
    const getAllBlockedTrainees = async (firstName,lastName,email,stack) => {
        const { data } = await axios.get(`http://localhost:3000/user/getInstructorBlockTrainees?instructorId=${cookies.get("userId")}&firstName=${firstName}&lastName=${lastName}&email=${email}&stack=${stack}`);
      //  console.log(data.response)
       setSecond(data.response)
      };

      const handleUnBlock = async (userId) => {
        const res = await axios.put("http://localhost:3000/user/unblockUser", {
            userId,
        });
        if(res.error){
          console.log(res.error)
        }
        // getAllBlockedTrainees()
      }

    const handleUnBlockData=(val)=>{
        handleUnBlock(val),
        alert("do you Un-block this trainee"),
        getAllBlockedTrainees(firstName,lastName,email,stack)
    }
    useEffect(() => {
        getAllBlockedTrainees(firstName,lastName,email,stack)
      }, [firstName,lastName,email,stack])

  return (
    <div className=' w-full h-full'>
<div className='h-1/6 w-full bg-red- flex '>


<div className='w-4/5 h-full bg-orange- flex justify-center items-center'>


            <div className='w-1/2 bg-red- flex flex-col px-10'>
           <label className='text-xl py-2 text-blue-800'>First Name</label>
            <input className='h-8 rounded-lg border-2 border-blue-800 bg-white text-black pl-2' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
           </div>

           <div className='w-1/2 bg-red- flex flex-col px-10'>
           <label className='text-xl py-2 text-blue-800'>Last Name</label>
            <input className='h-8 rounded-lg border-2 border-blue-800 bg-white text-black pl-2' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
           </div>

           <div className='w-1/2 bg-red- flex flex-col px-10'>
           <label className='text-xl py-2 text-blue-800'>Email</label>
            <input className='h-8 rounded-lg border-2 border-blue-800 bg-white text-black pl-2' value={email} onChange={(e)=>setEmail(e.target.value)}/>
           </div>

           <div className='w-1/2 bg-red- flex flex-col px-10'>
           <label className='text-xl py-2 text-blue-800'>Stack</label>
            <input className='h-8 rounded-lg border-2 border-blue-800 bg-white text-black pl-2' value={stack} onChange={(e)=>setStack(e.target.value)}/>
           </div>

</div>

<div className='w-1/5 h-full bg-green- flex justify-center items-center'>

<button className="bg-gradient-to-r from-cyan-600 to-blue-800 my-5 ml-5" onClick={()=>(handleState("mainPage"))}>List of  Traisnees</button>
</div>

</div>
<div className='overflow-y-auto h-5/6 w-full bg-yellow-' >

        <table className="w-full h-full ">
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
                    <th className="p-2 border-r border-t text-sm  text-white">
                            Status
                    </th>
                    {/* <th className="p-2 border-r border-t text-sm  text-white">
                            Status
                    </th> */}
                </tr>
            </thead>
            <tbody className='[&>*:nth-child(even)]:bg-gray-100 [&>*:nth-child(odd)]:bg-gray-300'>
                {second.map((item,index)=>{
                    return(
                        <tr className="bg-gray-100 text-center border-b text-sm " key={index}>
                    <td className="p-2 border-r text-gray-600">{index+1}</td>
                    <td className="p-2 border-r text-gray-600">{item.firstName}</td>
                    <td className="p-2 border-r text-gray-600">{item.lastName}</td>
                    <td className="p-2 border-r text-gray-600">{item.email}</td>
                    <td className="p-2 border-r text-gray-600">{item.stack}</td>
                    <td className="p-2 border-r"><button className='bg-gradient-to-r from-cyan-600 to-blue-800 focus:outline-none' 
                    onClick={()=>handleUnBlockData(item.userId)}
                    >Un-Block</button></td>
                    {/* <td className="p-2 border-r"><button className='bg-gradient-to-r from-cyan-600 to-blue-800'
                    onClick={() => {
                        navigate("/updateTraineeForm",{state:{item}})

                      }}
                    >Update</button></td> */}
                </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
</div>
  )
}

export default TableOfBlockedTrainees