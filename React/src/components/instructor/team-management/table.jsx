import React from 'react'

const Table = () => {
    const first=[
        {
        leader:"abc",
        task:"efg",
        trainee:"xyz"
    },
    {
        leader:"abc",
        task:"efg",
        trainee:"xyz"
    },
    {
        leader:"abc",
        task:"efg",
        trainee:"xyz"
    },
    {
        leader:"abc",
        task:"efg",
        trainee:"xyz"
    },
    {
        leader:"abc",
        task:"efg",
        trainee:"xyz"
    },
    {
        leader:"abc",
        task:"efg",
        trainee:"xyz"
    },
    {
        leader:"abc",
        task:"efg",
        trainee:"xyz"
    },
    
    
]
// console.log("first",first)
  return (
<div className='overflow-y-auto'>
        <table className="w-full">
            <thead>
                <tr className="bg-blue-800">
                    <th className="p-2 border-r border-t  text-sm text-white">
                            #
                    </th>
                    <th className="p-2 border-r border-t text-sm text-white">
                            Team Leader
                           
                    </th>
                    <th className="p-2 border-r border-t text-sm  text-white">
                     Trainee Name
                           
                    </th>
                    <th className="p-2 border-r border-t text-sm  text-white">
                    Team Task 
                           
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
                    <td className="p-2 border-r text-gray-600">{item.leader}</td>
                    <td className="p-2 border-r text-gray-600">{item.task}</td>
                    <td className="p-2 border-r text-gray-600">{item.trainee}</td>
                    <td className="p-2 border-r"><button className='bg-gradient-to-r from-cyan-600 to-blue-800'>Delete</button></td>
                    <td className="p-2 border-r"><button className='bg-gradient-to-r from-cyan-600 to-blue-800'>Update</button></td>
                </tr>
                    )
                })}
            </tbody>
        </table>
</div>
  )
}

export default Table