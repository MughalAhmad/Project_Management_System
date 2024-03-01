import {useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';

const ViewTeamMembers = ({handleState,viewData}) => {
 
const [membersData, setMembersData] = useState({
    member1:viewData.team1[0]+" "+viewData.team1[1],
    member2:viewData.team2[0]+" "+viewData.team2[1],
    member3:viewData.team3[0]+" "+viewData.team3[1],
    member4:viewData.team4[0]+" "+viewData.team4[1],

    

})

      const handlePopUpBox=(e)=>{
        if(e.target.id=="container") handleState("table");
      }
  return (
    <div 
    id="container"
    onClick={handlePopUpBox}
    className='h-full w-full bg-slate- flex justify-center items-center'>
        <div className='flex flex-col bg-slate-200 w-1/2 px-16 rounded-md'>
            <p className='text-3xl font-semibold py-5 text-blue-800'>View Team Members</p>
            <label className='text-2xl py-5 text-blue-800'>
                Member-1
            </label>
            <input type='text' className='h-16 w-full pl-2 text-xl rounded-md bg-white border-2 border-blue-800 text-black' readOnly value={membersData.member1} />

            <label className='text-2xl py-5 text-blue-800'>
            Member-2
            </label>
            <input type='text' className='h-16 w-full pl-2 text-xl rounded-md bg-white border-2 border-blue-800 text-black' readOnly value={membersData.member2}/>
            <label className='text-2xl py-5 text-blue-800'>
            Member-3
            </label>
            <input type='text' className='h-16 w-full pl-2 text-xl rounded-md bg-white border-2 border-blue-800 text-black' readOnly value={membersData.member3}/>
            <label className='text-2xl py-5 text-blue-800'>
            Member-4
            </label>
            <input type='text' className='h-16 w-full pl-2 text-xl rounded-md bg-white border-2 border-blue-800 text-black' readOnly value={membersData.member4}/>
            
            <div className='flex w-full my-5 justify-evenly'>
            <button className='w-2/5 bg-gradient-to-r from-cyan-600 to-blue-800'
            onClick={()=>handleState("table")}
            >close</button>
            </div>
        </div>
    </div>
  )
}

export default ViewTeamMembers