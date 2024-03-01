import React from 'react';
import axios from "axios";


const Table = ({first}) => {

    const approvedRequest = async (userId) => {
        const { data } = await axios.put("http://localhost:3000/request/approvedRequest", {
          userId:userId,
        });
        console.log("data ", data);
      };
// console.log("first",first)
  return (
<div className='w-full h-full'>

    <div className='h-1/6 w-full bg-red-  bg-red-'>

    <div className='w-full h-full bg-orange- flex justify-center items-center'>
    
    
                <div className='w-1/2 bg-red- flex flex-col px-10'>
               <label className='text-xl py-2 text-blue-800'>First Name</label>
                <input className='h-8 rounded-lg border-2 border-blue-800 bg-white'/>
               </div>
    
               <div className='w-1/2 bg-red- flex flex-col px-10'>
               <label className='text-xl py-2 text-blue-800'>Last Name</label>
                <input className='h-8 rounded-lg border-2 border-blue-800 bg-white'/>
               </div>
    
               <div className='w-1/2 bg-red- flex flex-col px-10'>
               <label className='text-xl py-2 text-blue-800'>Email</label>
                <input className='h-8 rounded-lg border-2 border-blue-800 bg-white'/>
               </div>
    
    </div>          
                    </div>
<div className='overflow-y-auto h-5/6 w-full bg-green-'>
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
                    <th className="p-2 border-r border-t text-sm  text-white">
                    Email
                           
                    </th>
                    <th className="p-2 border-r border-t text-sm  text-white">
                    Stack
                           
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
                    <td className="p-2 border-r"><button className='bg-gradient-to-r from-cyan-600 to-blue-800'
                    onClick={()=>approvedRequest(item.userId)}
                    >Approved</button></td>
                    <td className="p-2 border-r"><button className='bg-gradient-to-r from-cyan-600 to-blue-800'>Reject</button></td>
                </tr>
                    )
                })}
            </tbody>
        </table>
</div>
</div>
  )
}

export default Table