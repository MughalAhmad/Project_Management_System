import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CreateProjectForm from "./createProjectForm";
import UpdateProjectForm from "./updateProjectForm";
import Cookies from "universal-cookie";
import axios from "axios";

const Table = () => {
  const navigate = useNavigate();
  const [changeState, setChangeState] = useState("table");
  const [getUpdateData, setGetUpdateData] = useState({});
  const [getDeleteBox, setGetDeleteBox] = useState({});
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [first, setfirst] = useState([]);
  const cookies = new Cookies();

  // console.log("first", first);

  const getAllData = async (title, status) => {
    const { data } = await axios.get(`http://localhost:3000/project/getAllProjects?instructorId=${cookies.get("userId")}&title=${title}&status=${status}`);
    // console.log("pro", data.response);
    setfirst(data.response);
  };

  const handleState = (val) => {
    setChangeState(val);
    getAllData(title, status);
  };

  const handleGetData = (item) => {
    setGetUpdateData(item);
    setChangeState("updateForm");
  };
  const handleDeleteBox = (item) => {
    handleState("delete");
    setGetDeleteBox(item);
  };

  const handlePopUpBox = (e) => {
    console.log(e.target);
    if (e.target.id == "container") handleState("table");
  };

  const handleDelete=async(projectId)=>{
    console.log("ID",projectId)
    const { data } = await axios.delete(`http://localhost:3000/project/deleteProject?projectId=${projectId}`);
    if(data.error){
      console.log("Error",data.error)
    }
    getAllData(title, status);
    setChangeState("table")

  }

  useEffect(() => {
    getAllData(title, status);
  }, [title, status]);
  return (
    <div className="relative w-full h-full">
      {/* <button
        className="ml-10 my-10 bg-gradient-to-r from-cyan-600 to-blue-800"
        onClick={() => handleState("createForm")}
      >
        Create New Project
      </button> */}
      {/* ///////////////// */}
      <div className="h-1/6 w-full bg-red- flex ">


        
        <div className="w-4/5 h-full bg-orange- flex justify-center items-center">
          <div className="w-1/2 bg-red- flex flex-col px-10">
            <label className="text-xl py-2 text-blue-800">Project Name</label>
            <input
              className="h-8 rounded-lg border-2 border-blue-800 bg-white text-black pl-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="w-1/2 bg-red- flex flex-col px-10">
            <label className="text-xl py-2 text-blue-800">States</label>
            <input
              className="h-8 rounded-lg border-2 border-blue-800 bg-white text-black pl-2"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
        </div>

        <div className="w-1/5 h-full bg-green- flex justify-center items-center">
          <button
            className="bg-gradient-to-r from-cyan-600 to-blue-800 my-5 ml-5"
            onClick={() => handleState("createForm")}
          >
            Create New Project
          </button>
        </div>
      </div>

      {/* //////////////// */}
      <div className="overflow-y-auto h-5/6 w-full ">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-800">
              <th className="p-2 border-r border-t  text-sm text-white">#</th>
              <th className="p-2 border-r border-t text-sm text-white">
                Project Name
              </th>
              <th className="p-2 border-r border-t text-sm  text-white">
                Project Description
              </th>
              <th className="p-2 border-r border-t text-sm  text-white">
                Project States
              </th>
              <th className="p-2 border-r border-t text-sm  text-white">
                Status
              </th>
              <th className="p-2 border-r border-t text-sm  text-white">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="[&>*:nth-child(even)]:bg-gray-100 [&>*:nth-child(odd)]:bg-gray-300">
            {first.map((item, index) => {
                return (
                  <tr
                    className="bg-gray-100 text-center border-b text-sm "
                    key={index}
                  >
                    <td className="p-2 border-r text-gray-600">{index + 1}</td>
                    <td className="p-2 border-r text-gray-600">{item.title}</td>
                    <td className="p-2 border-r text-gray-600">
                      {item.description}
                    </td>
                    <td className="p-2 border-r text-gray-600">
                      {item.status}
                    </td>
                    <td className="p-2 border-r">
                      <button
                        className="bg-gradient-to-r from-cyan-600 to-blue-800"
                        onClick={() => {
                          handleDeleteBox(item);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                    <td className="p-2 border-r">
                      <button
                        className="bg-gradient-to-r from-cyan-600 to-blue-800"
                        onClick={() => {
                          handleGetData(item);
                        }}
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      {changeState == "createForm" && (
        <div
          // style={{ display: changeState === "createForm" ? "block" : "none" }}
          className="absolute top-0 bg-black bg-opacity-50  w-full h-full "
        >
          <CreateProjectForm handleState={handleState} />
        </div>
      )}
      {changeState == "updateForm" && (
        <div
          // style={{ display: changeState === "updateForm" ? "block" : "none" }}
          className="absolute top-0 bg-black bg-opacity-50  w-full h-full "
        >
          <UpdateProjectForm
            handleState={handleState}
            getUpdateData={getUpdateData}
          />
        </div>
      )}
      {changeState == "delete" && (
        <div
          // style={{ display: changeState === "delete" ? "block" : "none" }}
          className="absolute top-0 bg-black bg-opacity-50  w-full h-full "
        >
          <div
            className="w-full h-full flex justify-center items-center"
            id="container"
            onClick={handlePopUpBox}
          >
            <div className="w-2/5 h-2/5 bg-white">
              <h3 className="text-black text-3xl">
                Do you want to delete this Project{" "}
              </h3>
              <label>Project Title</label>
              <p className="text-black">{getDeleteBox.title}</p>
              <label>Project Description</label>
              <p className="text-black">{getDeleteBox.description}</p>
              <label>Project ID</label>
              <p className="text-black">{getDeleteBox.projectId}</p>
              <div className="flex w-full my-5 justify-evenly">
                <button
                  className="w-2/5 bg-gradient-to-r from-cyan-600 to-blue-800"
                  onClick={()=>handleDelete(getDeleteBox.projectId)}
                >
                  Delete
                </button>
                <button
                  className="w-2/5 bg-gradient-to-r from-cyan-600 to-blue-800"
                  onClick={() => handleState("table")}
                >
                  close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
