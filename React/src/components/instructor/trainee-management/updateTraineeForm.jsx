import {useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate,useLocation } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import {deleteTrainee} from "../../../redux/traineeUpdateReducers"

const UpdateTraineeForm = (props) => {
  // const dispatch = useDispatch();


    const [getData, setGetData] = useState({
      firstName:props.updateData.firstName ,
      lastName:props.updateData.lastName,
      email:props.updateData.email,
      stack:props.updateData.stack,
      // assignment:props.updateData.assignment,

      })

      // console.log("getData  ",getData)
    const handler = (e) => {
        // console.log({ ...getData, [e.target.name]: e.target.value })
        setGetData({ ...getData, [e.target.name]: e.target.value });
      }
const handleClosePopUp=(e)=>{
  // console.log(e.target.id)
  if(e.target.id==="container") props.handleupdateState("table")
  // dispatch(deleteTrainee())


}
      const create = async () => {
        // console.log("update val",getData)
        const { data } = await axios.put("http://localhost:3000/user/updateUser", {
            userId:props.updateData.userId,
        firstName:getData.firstName,
        lastName:getData.lastName,
        email:getData.email,  
        stack:getData.stack,        
        // assignment:getData.assignment
        });
    
        if (data.error) {
          return alert("Invalid User");
        }
        return( 
            alert("Trainee is Update Successfully"),
            // navigate(-1)
            props.handleupdateState("table"),
            props.getAllData()
            );
      };
const handleClose =()=>[
  props.handleupdateState("table"),
  // dispatch(deleteTrainee())

]

  return (
    <div className='w-full h-full flex justify-center items-center '
    id='container'
    onClick={handleClosePopUp}
    
    >
        <div className='flex flex-col  w-2/5 bg-white  rounded-md p-4'>
            <p className='text-3xl ml-10 font-semibold py-5 text-blue-800'>Update Trainee</p>



            {/* <div className='flex justify-evenly my-4'> */}
              {/* <div> */}
            <label className='text-2xl py-4 text-blue-800'>
                First Name
            </label>
            <input type='text' className='h-16 w-full pl-2 text-xl rounded-md bg-white border-2 border-blue-800 text-black' name='firstName' 
            value={getData.firstName} onChange={handler} 
            />
            {/* </div> */}
            {/* <div> */}
            <label className='text-2xl py-4 text-blue-800'> 
                Last Name
            </label>
            <input type='text' className='h-16 w-full pl-2 text-xl rounded-md bg-white border-2 border-blue-800 text-black' name='lastName'
             value={getData.lastName} onChange={handler}
             />
            {/* </div> */}
            {/* </div> */}




           {/* <div className='flex justify-evenly bg-red- my-4'> */}
            {/* <div className='bg-green-'> */}
            <label className='text-2xl py-4 text-blue-800'>
                E-mail
            </label>
            <input type='email' className='h-16 w-full pl-2 text-xl rounded-md bg-white border-2 border-blue-800 text-black' name='email'
             value={getData.email} onChange={handler}
             />
            {/* </div> */}

            {/* <div> */}
            <label className='text-2xl py-4 text-blue-800'>
                Stack
            </label>
            <input type='text' className='h-16 w-full pl-2 text-xl rounded-md bg-white border-2 border-blue-800 text-black' name='stack'
             value={getData.stack} onChange={handler}
             />
            {/* </div> */}
            {/* </div> */}



            {/* <div className='mx-14 my-4'>
            <label className='text-2xl py-4 text-blue-800'>
            Assignment
            </label>
            <select className='h-16 w-full pl-2 text-xl rounded-md bg-white border-2 border-blue-800 text-black' name='assignment'
            value={getData.assignment} onChange={handler}
            >
              <option>pending</option>
              <option>resolve</option>
            </select>
            </div> */}


            <div className='flex w-full my-5 justify-evenly'>
            <button className='w-2/5 bg-gradient-to-r from-cyan-600 to-blue-800' onClick={()=>create()}>Done</button>
            <button className='w-2/5 bg-gradient-to-r from-cyan-600 to-blue-800' 
            onClick={()=>(handleClose())}
            >close</button>
            </div>
        </div>
            {/* <h1 className='text-black'>hw</h1> */}

    </div>
  )
}

export default UpdateTraineeForm