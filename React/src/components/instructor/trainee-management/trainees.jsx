import { useState } from "react";
import Table from "./table";
import TableOfBlockedTrainees from "./tableOfBlockedTrainees"
import Card from "../home-mangement/card";
function Trainees() {
  const [blockComponent, setBlockComponent] = useState("mainPage")
  const [assigned, setAssigned] = useState("");
  const [unAssigned, setUnAssigned] = useState("");

const handleState=(val)=>{
  if(val==="mainPage"){
    setBlockComponent(val)
  }
  else{
    setBlockComponent(val)
  }
}

const handleAssignedData=(val)=>{
setAssigned(val)
}
const handleUnAssignedData=(val)=>{
setUnAssigned(val)
}
  return (
    <>
      <div className="w-5/6 h-full flex items-center p-12 pb-0">
        <div className="w-full h-full shadow-2xl">


<div style={{display:blockComponent==="mainPage"?"block":"none"}} className="h-1/6 w-full">
          <div className="flex  bg-red- h-full w-full justify-evenly items-center">
        <Card data={"Assigned"} value={assigned}/>
        <Card data={"UnAssigned"} value={unAssigned}/>
        {/* <Card data={"Complete"} value={"10"}/> */}
        </div>
        </div>


        <div style={{display:blockComponent==="mainPage"?"block":"none"}} className="w-full h-5/6">
          {blockComponent==="mainPage" && <Table  handleState={handleState} handleAssignedData={handleAssignedData} handleUnAssignedData={handleUnAssignedData} /> }
          </div>


          <div style={{display:blockComponent==="blockPage"?"block":"none"}} >
       {blockComponent==="blockPage" && <TableOfBlockedTrainees  handleState={handleState}  />} 
          </div>


        </div>
      </div>
    </>
  );
}

export default Trainees;
