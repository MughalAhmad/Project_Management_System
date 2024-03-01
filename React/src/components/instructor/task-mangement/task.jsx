import Table from "./table";
import { useState,useEffect } from "react";

import { useNavigate } from "react-router-dom";
function Task() {

  const navigate = useNavigate();
  
 

  return (
    <>
      <div className="w-5/6 h-full flex items-center p-12 pb-0">
        <div className="w-full h-full shadow-2xl">
          <Table />
        </div>
      </div>
    </>
  );
}

export default Task;
