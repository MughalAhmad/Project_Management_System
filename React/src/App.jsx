import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/auth-layout";
import InstructorLayout from "./layouts/instructor-layout";
import OnBoarding from "./components/auth/on-boarding";
import CreateTraineeForm from "./components/instructor/trainee-management/createTraineeForm";
import UpdateTraineeForm from "./components/instructor/trainee-management/updateTraineeForm";
import CreateProjectForm from "./components/instructor/project-mangement/createProjectForm";
import UpdateProjectForm from "./components/instructor/project-mangement/updateProjectForm";
import CreateTaskForm from "./components/instructor/task-mangement/createTaskForm";
import CreateTeamForm from "./components/instructor/team-management/createTeamForm";
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>} />
      <Route path="/onboarding" element={<OnBoarding/>} />
      <Route path="/instructor" element={<InstructorLayout/>} />
      {/* <Route path="/createTraineeForm" element={<CreateTraineeForm/>} /> */}
      {/* <Route path="/updateTraineeForm" element={<UpdateTraineeForm/>} /> */}

      {/* <Route path="/createProjectForm" element={<CreateProjectForm/>} /> */}
      {/* <Route path="/updateProjectForm" element={<UpdateProjectForm/>} /> */}

      <Route path="/createProjectForm" element={<CreateProjectForm/>} />
      <Route path="/createTaskForm" element={<CreateTaskForm/>} />
      <Route path="/createTeamForm" element={<CreateTeamForm/>} />



    </Routes>
   </BrowserRouter>
  )
}

export default App