import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const CreateTraineeForm = () => {
    const navigate = useNavigate();
    const [getData, setGetData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        role:"trainee"
      })
    const handler = (e) => {
        // console.log({ ...getData, [e.target.name]: e.target.value })
        setGetData({ ...getData, [e.target.name]: e.target.value });
      }

      const create = async () => {
        const { data } = await axios.post("http://localhost:3000/user/createTrainee", {
            firstName:getData.firstName,
        lastName:getData.lastName,
        email:getData.email,
        password:getData.password,
        role:"trainee"
        });
    
        if (data.error) {
          return alert("Invalid Credentials");
        }
        return( 
            alert("Trainee in Successfully Create"),
            navigate(-1)
            );
      };


  return (
    <div className='h-screen w-screen bg-slate-400 flex justify-center items-center'>
        <div className='flex flex-col bg-slate-200 w-2/6 px-16 rounded-md'>
            <p className='text-3xl font-semibold py-5'>Create New Trainee</p>
            <label className='text-2xl py-5'>
                First Name
            </label>
            <input type='text' className='h-16 w-full pl-2 text-xl rounded-md' name='firstName' value={getData.firstName} onChange={handler} />
            <label className='text-2xl py-5'> 
                Last Name
            </label>
            <input type='text' className='h-16 w-full pl-2 text-xl rounded-md' name='lastName' value={getData.lastName} onChange={handler}/>
            <label className='text-2xl py-5'>
                E-mail
            </label>
            <input type='email' className='h-16 w-full pl-2 text-xl rounded-md'name='email' value={getData.email} onChange={handler}/>
            <label className='text-2xl py-5'>
                Password
            </label>
            <input type='password' className='h-16 w-full pl-2 text-xl rounded-md mb-5'name='password' value={getData.password} onChange={handler} />
            <div className='flex w-full my-5 justify-evenly'>
            <button className='w-2/5' onClick={()=>create()}>Done</button>
            <button className='w-2/5' onClick={()=>(navigate(-1))}>close</button>
            </div>
        </div>
    </div>
  )
}

export default CreateTraineeForm