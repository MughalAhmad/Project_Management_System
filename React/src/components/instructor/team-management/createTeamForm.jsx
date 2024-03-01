import {useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';

const CreateTeamForm = ({handleState}) => {
  const [first, setfirst] = useState([])
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [leader, setLeader] = useState("");
    const [team1, setTeam1] = useState("");
    const [team2, setTeam2] = useState("");
    const [team3, setTeam3] = useState("");
    const [team4, setTeam4] = useState("");
    const [selectProject, setSelectProject] = useState("");


    const [filterLeader, setFilterLeader] = useState([]);
    const [filterTeam1, setFilterTeam1] = useState([]);
    const [filterTeam2, setFilterTeam2] = useState([]);
    const [filterTeam3, setFilterTeam3] = useState([]);
      const [projects, setProjects] = useState([])


      const getAllData = async () => {
        const { data } = await axios.get(`http://localhost:3000/user/getInstructorTrainees?instructorId=${cookies.get("userId")}`);
      //  console.log(data.response)
       setfirst(data.response)
      };

      const getProject = async () => {
        const { data } = await axios.get("http://localhost:3000/project/getAllProjects?instructorId="+cookies.get("userId"));
        // console.log(data.response)
    setProjects(data.response)
        // if (data.error) {
        //   return alert("erroe in field");
        // }
        // return( 
        //     alert("Project in Successfully Create"),
        //     navigate(-1)
        //     );
      };
    useEffect(() => {
        getProject()
        getAllData()
    }, [])

    const handleLeader=(e)=>{
      const arr1=[];
      setTeam1("")
      setTeam2("")
      setTeam3("")
      setTeam4("")
setLeader(e.target.value) 
first.map((item)=>{
  if(e.target.value != item.userId){
    arr1.push(item);
  }
})
setFilterLeader(arr1)
    }

    const handleTeam1=(e)=>{
      const arr1=[];
      setTeam2("")
      setTeam3("")
      setTeam4("")
      setTeam1(e.target.value)
filterLeader.map((item)=>{
  if(e.target.value != item.userId){
    arr1.push(item);
  }
})
setTeam2("")
setFilterTeam1(arr1)
    }

    const handleTeam2=(e)=>{
      const arr1=[];
      setTeam3("")
      setTeam4("")
      setTeam2(e.target.value)
filterTeam1.map((item)=>{
  if(e.target.value != item.userId){
    arr1.push(item);
  }
})
setFilterTeam2(arr1)
    }



    const handleTeam3=(e)=>{
      const arr1=[];
      setTeam4("")
      setTeam3(e.target.value)
filterTeam2.map((item)=>{
  if(e.target.value != item.userId){
    arr1.push(item);
  }
})
setFilterTeam3(arr1)
    }
  
    

    // console.log("LEADER",leader)
      const create = async () => {
        const { data } = await axios.post("http://localhost:3000/team/createTeam", {
            leader:leader,
            projectId:selectProject,
            instructorId:cookies.get("userId"),
            team1:team1,
            team2:team2,
            team3:team3,
            team4:team4,
                  });
        console.log(data)
    
        if (data.error) {
          return alert("erroe in field");
        }
        return( 
            alert("Team is Successfully Create"),
            handleState("table")

            );
      };

      const handlePopUpBox=(e)=>{
        if(e.target.id=="container") handleState("table");
      }
      // console.log("first",first)

      
  return (
    <div 
    id="container"
    onClick={handlePopUpBox}
    className='h-full w-full bg-slate- flex justify-center items-center'>
        <div className='flex flex-col bg-slate-200 w-1/2 px-16 rounded-md'>
            <p className='text-3xl font-semibold py-5 text-blue-800'>Create New Team</p>
            <label className='text-2xl py-5 text-blue-800'>
                Team Leader
            </label>
            <select className='h-16 w-full pl-2 text-xl rounded-md bg-white border-2 border-blue-800 text-black' defaultValue={leader} onChange={handleLeader}>
            <option >Select</option>
             {first.map((item,index)=>{
              return(
                <option value={item.userId} key={index} className='text-black'>{item.firstName} {item.lastName}</option>
              )
             })}
            </select>
            {/* <input type='text' className='h-16 w-full pl-2 text-xl rounded-md' name='title' value={getData.title} onChange={handler} /> */}
            <label className='text-2xl py-5 text-blue-800'> 
            Team Project 
            </label>
            <select className='h-16 w-full pl-2 text-xl rounded-md bg-white border-2 border-blue-800 text-black' defaultValue={selectProject} onChange={(e)=>setSelectProject(e.target.value)} >
                <option >Select</option>
               {projects.map((item,index)=>{
                return(
                    <option value={item.projectId} key={index}>{item.title}</option>
                )
               })}

            </select>    

<div className='flex justify-between my-5'>
<div>
            <label className='text-2xl px-15 text-blue-800'>
                Team NO.1
            </label>
            <select className='h-16 w-full mt-6 text-xl rounded-md bg-white border-2 border-blue-800 text-black' disabled={!(leader)} value={team1}  onChange={handleTeam1}>
            <option >Select</option>
             {filterLeader.map((item,index)=>{
              return(
                <option value={item.userId} key={index} className='text-black'>{item.firstName} {item.lastName}</option>
              )
             })}
            </select>
            </div>


<div>
            <label className='text-2xl py-5 text-blue-800'>
                Team NO.2
            </label>
            <select className='h-16 w-full mt-6 text-xl rounded-md bg-white border-2 border-blue-800 text-black' disabled={!(team1)} value={team2}  onChange={handleTeam2}>
            <option >Select</option>
             {filterTeam1.map((item,index)=>{
              return(
                <option value={item.userId} key={index} className='text-black'>{item.firstName} {item.lastName}</option>
              )
             })}
            </select>
            </div>



            </div>


            <div className='flex justify-between my-5'>
<div>
            <label className='text-2xl py-5 text-blue-800'>
                Team NO.3
            </label>
            <select className='h-16 w-full mt-6 text-xl rounded-md bg-white border-2 border-blue-800 text-black' disabled={!(team2)} value={team3}  onChange={handleTeam3}>
            <option >Select</option>
             {filterTeam2.map((item,index)=>{
              return(
                <option value={item.userId} key={index} className='text-black'>{item.firstName} {item.lastName}</option>
              )
             })}
            </select>
            </div>


<div>
            <label className='text-2xl py-5 text-blue-800'>
                Team NO.4
            </label>
            <select className='h-16 w-full mt-6 text-xl rounded-md bg-white border-2 border-blue-800 text-black' disabled={!(team3)} value={team4}  onChange={(e)=>setTeam4(e.target.value)}>
            <option >Select</option>
             {filterTeam3.map((item,index)=>{
              return(
                <option value={item.userId} key={index} className='text-black'>{item.firstName} {item.lastName}</option>
              )
             })}
            </select>
            </div>



            </div>
            
            {/* <input type='text' className='h-16 w-full pl-2 text-xl rounded-md' name='description' value={getData.description} onChange={handler}/> */}
            <div className='flex w-full my-5 justify-evenly'>
            <button className='w-2/5 bg-gradient-to-r from-cyan-600 to-blue-800' 
            onClick={()=>create()}
            >Done</button>
            <button className='w-2/5 bg-gradient-to-r from-cyan-600 to-blue-800'
            onClick={()=>handleState("table")}
            >close</button>
            </div>
        </div>
    </div>
  )
}

export default CreateTeamForm