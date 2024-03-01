import React from 'react'

const Profile = () => {
  return (
    <>
      <div className="w-5/6 h-full flex items-center p-12 pb-0 ">
        <div className="w-full h-full shadow-2xl">
       {/* <h1 className="bg-gradient-to-r from-cyan-600 to-blue-800">Profile{}</h1> */}
       
        <div className='h-2/5 w-full bg-red-'>
            
<div className='h-1/5 w-full bg-green- flex items-center pl-20 bg-gradient-to-r from-cyan-600 to-blue-800'>
<p className='text-4xl text-white font font-semibold '>Profile</p>
</div>




<div className='h-4/5 w-full bg-green- flex flex-col items-center'>
   <div className=' h-full w-2/5 flex justify-center items-end bg-slate-'>
<img src='assets/pic1.jpg' alt='none' className='w-64 h-64 rounded-full object-cover'/>
<button className='bg-white border-2 border-blue-800 text-blue-800 h-10 p-0 w-24 hover:bg-gradient-to-r from-cyan-600 to-blue-800 hover:text-white hover:border-0'>Change Pic</button>
   </div>
   <div className='w-full flex justify-center mt-3'>
<hr className='w-5/6 bg-blue-800 '/>
</div>
</div>



        </div>
        <div className='h-3/5 w-full bg-yellow- flex flex-col justify-evenly px-16'>
           <div className='flex w-full'>
           <div className='w-1/2 bg-red- flex flex-col px-10'>
           <label className='text-2xl py-2 text-blue-800'>First Name</label>
            <input className='h-12 rounded-lg border-2 border-blue-800 bg-white'/>
           </div>
           <div className='w-1/2 bg-green- flex flex-col px-10'>
           <label className='text-2xl py-2 text-blue-800'>Last Name</label>
            <input className='h-12 rounded-lg border-2 border-blue-800 bg-white'/>
           </div>
           </div>
<div className='w-full bg-purple- flex flex-col px-10'>
<label className='text-2xl py-2 text-blue-800'>Email</label>
            <input className='h-12 rounded-lg border-2 border-blue-800 bg-white'/>
</div>

<div className='flex w-full'>
           <div className='w-1/2 bg-red- flex flex-col px-10'>
           <label className='text-2xl py-2 text-blue-800'>Stack</label>
            <input className='h-12 rounded-lg border-2 border-blue-800 bg-white'/>
           </div>
           <div className='w-1/2 bg-green- flex flex-col px-10'>
           <label className='text-2xl py-2 text-blue-800'>Role</label>
            <input className='h-12 rounded-lg border-2 border-blue-800 bg-white'/>
           </div>
           </div>

           <div className='flex justify-end mx-10'>
            <button className='bg-gradient-to-r from-cyan-600 to-blue-800'>Update</button>
           </div>

        </div>
        </div>
      </div>
    </>
  )
}

export default Profile