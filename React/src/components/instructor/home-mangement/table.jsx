import React from 'react'

const Table = () => {
    const Data=[
       { 
        task:"ABC",
        name:"XYZ",
        class:"className",
        stack:"MERN",
        project:"PMS",
        status:"Pending"
    },
    { 
        task:"ABC",
        name:"XYZ",
        class:"className",
        stack:"MERN",
        project:"PMS",
        status:"Pending"
    },
    { 
        task:"ABC",
        name:"XYZ",
        class:"className",
        stack:"MERN",
        project:"PMS",
        status:"Pending"
    },
    { 
        task:"ABC",
        name:"XYZ",
        class:"className",
        stack:"MERN",
        project:"PMS",
        status:"Pending"
    },
    { 
        task:"ABC",
        name:"XYZ",
        class:"className",
        stack:"MERN",
        project:"PMS",
        status:"Pending"
    },
    { 
        task:"ABC",
        name:"XYZ",
        class:"className",
        stack:"MERN",
        project:"PMS",
        status:"Pending"
    },
    { 
        task:"ABC",
        name:"XYZ",
        class:"className",
        stack:"MERN",
        project:"PMS",
        status:"Pending"
    },
    { 
        task:"ABC",
        name:"XYZ",
        class:"className",
        stack:"MERN",
        project:"PMS",
        status:"Pending"
    },
    { 
        task:"ABC",
        name:"XYZ",
        class:"className",
        stack:"MERN",
        project:"PMS",
        status:"Pending"
    },
    { 
        task:"ABC",
        name:"XYZ",
        class:"className",
        stack:"MERN",
        project:"PMS",
        status:"Pending"
    },
    { 
        task:"ABC",
        name:"XYZ",
        class:"className",
        stack:"MERN",
        project:"PMS",
        status:"Pending"
    },
    { 
        task:"ABC",
        name:"XYZ",
        class:"className",
        stack:"MERN",
        project:"PMS",
        status:"Pending"
    },
    { 
        task:"ABC",
        name:"XYZ",
        class:"className",
        stack:"MERN",
        project:"PMS",
        status:"Pending"
    },
    { 
        task:"ABC",
        name:"XYZ",
        class:"className",
        stack:"MERN",
        project:"PMS",
        status:"Pending"
    },
    { 
        task:"ABC",
        name:"XYZ",
        class:"className",
        stack:"MERN",
        project:"PMS",
        status:"Pending"
    },
  
    ]
  return (
<div className='overflow-y-auto border-4 shadow-xl h-96 w-4/5 rounded-xl  '>
        <table className="w-full shadow-inner">
            <thead>
                <tr className="bg-blue-800">
                    <th className="p-2 border-r  text-sm text-white">
                            #
                    </th>
                    <th className="p-2 border-r text-sm text-white">
                            Task Name
                           
                    </th>
                    <th className="p-2 border-r  text-sm  text-white">
                            Trainee Name
                           
                    </th>
                    <th className="p-2 border-r text-sm text-white">
                            className
                    </th>
                    <th className="p-2 border-r text-sm text-white">
                            Stack
                    </th>
                    <th className="p-2 border-r text-sm  text-white">
                            Project Name
                    </th>
                    <th className="p-2 border-r text-sm  text-white">
                            Status
                    </th>
                </tr>
            </thead>
            <tbody className='[&>*:nth-child(even)]:bg-gray-100 [&>*:nth-child(odd)]:bg-gray-300'>
                {Data.map((item,index)=>{
                    return(
                        <tr className="bg-gray-100 text-center border-b text-sm text-gray-600 " key={index} >
                    <td className="p-2 border-r">{index+1}</td>
                    <td className="p-2 border-r">{item.task}</td>
                    <td className="p-2 border-r">{item.name}</td>
                    <td className="p-2 border-r">{item.class}</td>
                    <td className="p-2 border-r">{item.stack}</td>
                    <td className="p-2 border-r">{item.project}</td>
                    <td className="p-2 border-r">{item.status}</td>
                </tr>
                    )
                })}
            </tbody>
        </table>
</div>
  )
}

export default Table