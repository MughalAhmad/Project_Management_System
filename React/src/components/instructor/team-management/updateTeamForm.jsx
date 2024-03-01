import {useState,useEffect} from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Select from "react-select";

const UpdateTeamForm = ({handleState,updateData}) => {
  const [first, setfirst] = useState([])
    const cookies = new Cookies();
    const [leader, setLeader] = useState(updateData.user.userId);
    const [team1, setTeam1] = useState(updateData.member1.userId);
    const [team2, setTeam2] = useState(updateData.member2.userId);
    const [team3, setTeam3] = useState(updateData.member3.userId);
    const [team4, setTeam4] = useState(updateData.member4.userId);

    const [team1Data, setTeam1Data] = useState([]);
    const [team2Data, setTeam2Data] = useState([]);
    const [team3Data, setTeam3Data] = useState([]);
    const [team4Data, setTeam4Data] = useState([]);

   
const [finalData, setFinalData] = useState("");
const [project, setProject] = useState("")

console.log("updateData",updateData)
console.log("team1",team1.data)

    const [filterData, setFilterData] = useState();

      const getAllData = async () => {
        const { data } = await axios.get(`http://localhost:3000/user/getInstructorTrainees?instructorId=${cookies.get("userId")}`);
        const getVal=data.response
      const arr1=[];
      getVal.map((item)=>{
        if(updateData.user.userId != item.userId){
arr1.push(item);

        }
      })
      arr1.unshift(updateData.user);
      return(
setfirst(arr1)
      )
      };
      const getAllData1 = async () => {
        const { data } = await axios.get(`http://localhost:3000/user/getInstructorTrainees?instructorId=${cookies.get("userId")}`);
        const getVal=data.response
        //  console.log("getVal",getVal)
      //  setfirst(data.response)
      const arr1=[];

      getVal.map((item)=>{
        if(updateData.user.userId != item.userId){
arr1.push(item);
        }
      })
        getTeam1Data(arr1)
        getTeam2Data(arr1)
        getTeam3Data(arr1)
        getTeam4Data(arr1)

      };


// console.log("LEADER!",leader)

console.log("filterData!",filterData)




      const getAllProject = async () => {
        const getData = await axios.get(`http://localhost:3000/project/getUpdatedProjects?instructorId=${cookies.get("userId")}`);
        // console.log(getData.data.response)
        const getVal=getData.data.response
        if (getVal.error) {
          return alert("erroe in field");
        }
        const {data} = await axios.get(`http://localhost:3000/project/getProject?instructorId=${cookies.get("userId")}&projectId=${updateData.project.projectId}`);
        // console.log(data.response)
        if (data.error) {
          return alert("erroe in field");
        }
  
  const arr1=[];
  getVal.map((item)=>{
          if(data.response.projectId != item.projectId){
  arr1.push(item);
          }
        })
        arr1.unshift(data.response);
  setProject(data.response.projectId)
        // console.log("AARR",arr1)
  
        return( 
        setFinalData(arr1)
        );
      };

// before
      const getTeam1Data=(data)=>{
        const arr1=[];
        data.map((item)=>{
          if(updateData.member1.userId != item.userId){
arr1.push(item)
          }
        })
        arr1.unshift(updateData.member1);
        console.log("AARR++team1",arr1)
        return(
          setTeam1Data(arr1)
                );
      };


      const getTeam2Data=(data)=>{
        const arr1=[];
        data.map((item)=>{
          if(updateData.member2.userId != item.userId){
arr1.push(item)
          }
        })
        arr1.unshift(updateData.member2);
        console.log("AARR+++team2",arr1)
        return(
          setTeam2Data(arr1)
                );
      };


      const getTeam3Data=(data)=>{
        const arr1=[];
        data.map((item)=>{
          if(updateData.member3.userId != item.userId){
arr1.push(item)
          }
        })
        arr1.unshift(updateData.member3);
        console.log("AARR+++team3",arr1)
        return(
          setTeam3Data(arr1)
                );
      };



      const getTeam4Data=(data)=>{
        const arr1=[];
        data.map((item)=>{
          if(updateData.member4.userId != item.userId){
arr1.push(item)
          }
        })
        arr1.unshift(updateData.member4);
        console.log("AARR+++team4",arr1)
        return(
          setTeam4Data(arr1)
                );
      };


    useEffect(() => {
      getAllData1()
        getAllProject()
        getAllData()
    }, [])






  console.log("team1",team1);
  console.log("team2",team2);
  console.log("team3",team3);
  console.log("team4",team4);
    

      const create = async () => {
if(team1==team2){
  return(
    alert("member1 and member2 both are same")
  )
}
else if(team1==team3){
  return(
    alert("member1 and member3 both are same")
  )}
else if(team1==team4){
  return(
    alert("member1 and member4 both are same")
  )}
else if(team2==team3){
  return(
    alert("member2 and member3 both are same")
  )}
else if(team2==team4){
  return(
    alert("member2 and member4 both are same")
  )}
else if(team3==team4){
  return(
    alert("member3 and member4 both are same")
  )}
        const { data } = await axios.put("http://localhost:3000/team/updateTeam", {
            leader:leader,
            projectId:project,
            instructorId:cookies.get("userId"),
            team1:team1,
            team2:team2,
            team3:team3,
            team4:team4,
            teamId:updateData.team.teamId
                  });
        console.log(data)
    
        if (data.error) {
          return alert("erroe in field");
        }
        return( 
            alert("Team Update Successfully"),
            handleState("table")

            );
      };

      const handlePopUpBox=(e)=>{
        if(e.target.id=="container") handleState("table");
      }
  return (
    <div 
    id="container"
    onClick={handlePopUpBox}
    className='h-full w-full bg-slate- flex justify-center items-center'>
        <div className='flex flex-col bg-slate-200 w-1/2 px-16 rounded-md'>
            <p className='text-3xl font-semibold py-5 text-blue-800'>Update Team</p>
            <label className='text-2xl py-5 text-blue-800'>
                Team Leader
            </label>
            <select className='h-16 w-full pl-2 text-xl rounded-md bg-white border-2 border-blue-800 text-black' value={leader} onChange={(e)=>setLeader(e.target.value)}>
            {/* <option >Select</option> */}
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
            <select className='h-16 w-full pl-2 text-xl rounded-md bg-white border-2 border-blue-800 text-black' defaultValue={project.title} onChange={(e)=>setProject(e.target.value)}>
            {finalData && finalData.map((item,index)=>{
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
            <select className='h-16 w-full mt-6 text-xl rounded-md bg-white border-2 border-blue-800 text-black'  value={team1}  onChange={(e)=>setTeam1(e.target.value)}>
            {/* <option >Select</option> */}
             {team1Data&&team1Data.map((item,index)=>{
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
            <select className='h-16 w-full mt-6 text-xl rounded-md bg-white border-2 border-blue-800 text-black'  value={team2} onChange={(e)=>setTeam2(e.target.value)}  >
            {/* <option >Select</option> */}
            {team2Data&&team2Data.map((item,index)=>{
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
            <select className='h-16 w-full mt-6 text-xl rounded-md bg-white border-2 border-blue-800 text-black'  value={team3}  onChange={(e)=>setTeam3(e.target.value)}>
            {/* <option >Select</option> */}
             {team3Data&&team3Data.map((item,index)=>{
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
            <select className='h-16 w-full mt-6 text-xl rounded-md bg-white border-2 border-blue-800 text-black' value={team4}  onChange={(e)=>setTeam4(e.target.value)}>
            {/* <option >Select</option> */}
             {team4Data&&team4Data.map((item,index)=>{
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

export default UpdateTeamForm