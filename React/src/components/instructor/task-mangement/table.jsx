import React from 'react'

const Table = ({first}) => {
//     const first=[
//         {
//         title:"proj1",
//         description:"abc",
//         trainee:"xyz"
//     },
//     {
//         title:"proj1",
//         description:"abc",
//         trainee:"xyz"
//     },
//     {
//         title:"proj1",
//         description:"abc",
//         trainee:"xyz"
//     },
//     {
//         title:"proj1",
//         description:"abc",
//         trainee:"xyz"
//     },
//     {
//         title:"proj1",
//         description:"abc",
//         trainee:"xyz"
//     },
//     {
//         title:"proj1",
//         description:"abc",
//         trainee:"xyz"
//     },
//     {
//         title:"proj1",
//         description:"abc",
//         trainee:"xyz"
//     },
//     {
//         title:"proj1",
//         description:"abc",
//         trainee:"xyz"
//     },
// ]
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
                            Task Title
                           
                    </th>
                    <th className="p-2 border-r border-t text-sm  text-white">
                    Task Description
                           
                    </th>
                    <th className="p-2 border-r border-t text-sm  text-white">
                    Trainee Name
                           
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
                    <td className="p-2 border-r text-gray-600">{item.title}</td>
                    <td className="p-2 border-r text-gray-600">{item.description}</td>
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