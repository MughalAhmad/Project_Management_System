import { useState } from "react";
import Home from "../components/instructor/home";
import Navbar from "../components/nav-bar";
import Sidebar from "../components/instructor/sidebar";
import Trainees from "../components/instructor/trainee-management/trainees";
import Tasks from "../components/instructor/project-mangement/tasks";
import Projects from "../components/instructor/project-mangement/projects";
import Teams from "../components/instructor/team-management/teams";

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
          {component == "TASKS" && <Tasks />}
          {component == "TEAMS" && <Teams />}
          {component == "PROJECTS" && <Projects />}
        </div>
      </div>
    </>
  );
}

export default InstructorLayout;
