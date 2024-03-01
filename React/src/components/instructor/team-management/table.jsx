import {useState,useEffect} from 'react'
import Cookies from 'universal-cookie';
import axios from "axios";
import CreateTeamForm from './createTeamForm';
import ViewTeamMembers from './viewTeamMembers';
import UpdateTeamForm from './updateTeamForm';

const Table = () => {
    const cookies = new Cookies();
    const [changeState, setChangeState] = useState("table");

    const [first, setfirst] = useState([]);
    const [viewData , setViewData] = useState("");
    const [updateData, setUpdateData] = useState("");
    const [getDeleteBox, setGetDeleteBox] = useState("");
    const [getLeaderData, setGetLeaderData] = useState("");
    const [getProjectData, setGetProjectData] = useState("");
    const [data, setData] = useState([])
    const [project, setProject] = useState("");
    const [leader, setLeader] = useState("");



    const handleState = (val) => {
        setChangeState(val);
        getAllData();
      };

    const getAllData = async () => {
        const { data } = await axios.get("http://localhost:3000/team/getAllTeams?instructorId="+cookies.get("userId"));
       console.log(data.response)
       setData(data.response)
       setfirst(data.response)
      };





      const getUserData = async (val) => {
        const { data } = await axios.get(`http://localhost:3000/user/getUserById?userId=${val}`);
       if(data==data.error){
        console.log(data.error)
       }
       setGetLeaderData(data.response)
      };
      console.log("setGetLeaderData",getLeaderData);

      const getProject = async (val) => {
        const { data } = await axios.get(`http://localhost:3000/project/getProjectWithNoInstructorId?projectId=${val}`);
       if(data==data.error){
        console.log(data.error)
       }
       setGetProjectData(data.response)
      }

      console.log("setGetProjectData",getProjectData);
    


      useEffect(() => {
        getAllData()
      }, []);

      const handleUpdate=(item)=>{
      setChangeState("updateForm")
      setUpdateData(item)

      }


      const handleView=(obj)=>{
      setChangeState("view")
       setViewData(obj)
      }

      const handleDeleteBox = (item) => {
        handleState("delete");
        getUserData(item.leader);
        getProject(item.projectId);
        setGetDeleteBox(item);
      };

      const handlePopUpBox=(e)=>{
        // console.log(e.target)
        if(e.target.id=="container") handleState("table");
      }

      const handleDelete = async (teamId) => {
        const { data } = await axios.delete(`http://localhost:3000/team/deletTeam?teamId=${teamId}`);
       console.log(data.response)
       if(data.error){
        console.log("Error",data.error)
      }
      getAllData();
      setChangeState("table")
  
      };

      useEffect(() => {
        // 
        setData(
          first.filter((item)=>{
            return (!leader || item.user.firstName.toLocaleLowerCase().includes(leader.toLocaleLowerCase()) || item.user.lastName.toLocaleLowerCase().includes(leader.toLocaleLowerCase()) ) && (!project || item.project.title.toLocaleLowerCase().includes(project.toLocaleLowerCase()));
          })
        )
        // 
      }, [leader,project])
  
console.log("first",getDeleteBox)
  return (

    <div className='relative w-full h-full'>
    <div className='h-1/6 w-full bg-red- flex '>

<div className='w-4/5 h-full bg-orange- flex justify-center items-center'>


        <div className='w-1/2 bg-red- flex flex-col px-10'>
       <label className='text-xl py-2 text-blue-800'>Leader Name</label>
       <input className='h-8 rounded-lg border-2 border-blue-800 bg-white text-black pl-2'
         value={leader}
         onChange={(e) => setLeader(e.target.value)}
        />
       </div>

       <div className='w-1/2 bg-red- flex flex-col px-10'>
       <label className='text-xl py-2 text-blue-800'>Project Name</label>
       <input className='h-8 rounded-lg border-2 border-blue-800 bg-white text-black pl-2'
         value={project}
         onChange={(e) => setProject(e.target.value)}
        />       </div>
</div>

            <div className='w-1/5 h-full bg-green- flex justify-center items-center'>
            <button className="bg-gradient-to-r from-cyan-600 to-blue-800 my-5 ml-5" 
            onClick={() => handleState("createForm")}
            
            >Create New team</button>

            </div>

            
            </div>



<div className='overflow-y-auto h-5/6 w-full'>
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
                     Project Name
                           
                    </th>
                    <th className="p-2 border-r border-t text-sm  text-white">
                    Team Members 
                           
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
                {data.map((item,index)=>{
                    return(
                        <tr className="bg-gray-100 text-center border-b text-sm " key={index}>
                    <td className="p-2 border-r text-gray-600">{index+1}</td>
                    <td className="p-2 border-r text-gray-600">{item.user.firstName}{" "}{item.user.lastName}</td>
                    <td className="p-2 border-r text-gray-600">{item.project.title}</td>
                    <td className="p-2 border-r"><button className='bg-gradient-to-r from-cyan-600 to-blue-800' onClick={()=>handleView(
                      {
                        team1:[item.member1.firstName ,item.member1.lastName],
                        team2:[item.member2.firstName ,item.member2.lastName],
                        team3:[item.member3.firstName ,item.member3.lastName],
                        team4:[item.member4.firstName ,item.member4.lastName],

                      }
                      )
                      }>View</button></td>
                    <td className="p-2 border-r"><button className='bg-gradient-to-r from-cyan-600 to-blue-800'
                   onClick={() => {
                    handleDeleteBox(item.team);
                  }}
                    >Delete</button></td>
                    <td className="p-2 border-r"><button className='bg-gradient-to-r from-cyan-600 to-blue-800'
                    onClick={()=>handleUpdate(item)}
                    >Update</button></td>
                </tr>
                    )
                })}
            </tbody>
        </table>
</div>


{changeState == "view" && (
        <div
          // style={{ display: changeState === "createForm" ? "block" : "none" }}
          className="absolute top-0 bg-black bg-opacity-50  w-full h-full "
        >
          <ViewTeamMembers handleState={handleState} viewData={viewData}/>
         
        </div>
      )}

{changeState == "createForm" && (
        <div
          // style={{ display: changeState === "createForm" ? "block" : "none" }}
          className="absolute top-0 bg-black bg-opacity-50  w-full h-full "
        >
          <CreateTeamForm handleState={handleState} />
        </div>
      )}


{changeState == "updateForm" && (
        <div
          // style={{ display: changeState === "createForm" ? "block" : "none" }}
          className="absolute top-0 bg-black bg-opacity-50  w-full h-full "
        >
          <UpdateTeamForm handleState={handleState} updateData={updateData}/>
        </div>
      )}


<div
        style={{ display: changeState === "delete" ? "block" : "none" }}
        className="absolute top-0 bg-black bg-opacity-50  w-full h-full "
      >
        <div className="w-full h-full flex justify-center items-center"
         id="container"
        onClick={handlePopUpBox}
        >
          <div className="w-2/5 h-2/5 bg-white">
            <h3 className="text-black text-3xl">
              Do you want to delete this Team{" "}
            </h3>
            <label className="text-black underline">Leader</label>
            <p className="text-black">{getLeaderData.firstName}{" "}{getLeaderData.lastName}</p>
            <label className="text-black underline">Project</label>
            <p className="text-black">{getProjectData.title}</p>
            <div className='flex w-full my-5 justify-evenly'>
            <button className='w-2/5 bg-gradient-to-r from-cyan-600 to-blue-800' 
            onClick={()=>handleDelete(getDeleteBox.teamId)}
            >Delete</button>
            <button className='w-2/5 bg-gradient-to-r from-cyan-600 to-blue-800' 
            onClick={()=>(handleState("table"))}
            >close</button>
            </div>
          </div>
        </div>
      </div>

</div>
  )
}

export default Table