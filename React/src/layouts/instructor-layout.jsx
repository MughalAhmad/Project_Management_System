import { useState } from "react";
import Home from "../components/instructor/home";
import Navbar from "../components/nav-bar";
import Sidebar from "../components/instructor/sidebar";
import Trainees from "../components/instructor/trainee-management/trainees";
import Task from "../components/instructor/task-mangement/task"
import Projects from "../components/instructor/project-mangement/projects";
import Teams from "../components/instructor/team-management/teams";
import Request from "../components/instructor/request-mangement/request";

function InstructorLayout() {
  const [component, setComponent] = useState("HOME");

  const updateState = (newState) => {
    setComponent(newState);
  };

  return (
    <>
      <div className="w-screen h-screen bg-gray-50 flex flex-col">
        <Navbar />

        <div className="w-full h-full flex ">
          <Sidebar updateState={updateState} />
          {component == "HOME" && <Home />}
          {component == "TRAINEES" && <Trainees />}
          {component == "TASKS" && <Task />}
          {component == "TEAMS" && <Teams />}
          {component == "PROJECTS" && <Projects />}
          {component == "REQUEST" && <Request />}

        </div>
      </div>
    </>
  );
}

export default InstructorLayout;
