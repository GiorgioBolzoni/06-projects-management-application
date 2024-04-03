import {useState} from 'react';

import Sidebar from "./components/Sidebar";
import NoProjects from "./components/NoProjects";
import NewProject from "./components/NewProject";
import Project from "./components/Project";


function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject(){
    setProjectsState(
      prevState => {
        return{
          ...prevState,
          selectedProjectId: null,
        }
      }
  )}

    function handleAddProject(projectData){
      setProjectsState(
        prevState => {
          const projectId=Math.random();
          const newProject = {
            ...projectData,
            id: projectId,
          }
          return{
            ...prevState,
            projects: [...prevState.projects, newProject],
            selectedProjectId: undefined,
  
        }
    })
  }

  function handleCancelAddProject(){
    setProjectsState(
      prevState => {
        return{
          ...prevState,
          selectedProjectId: undefined,
        }
      }
  )}

console.log(projectsState);
      let content;

      if(projectsState.selectedProjectId === null){
        content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>;
      } else if (projectsState.selectedProjectId === undefined){
        content = <NoProjects onStartAddProject={handleStartAddProject} />;
      } else if (projectsState.selectedProjectId!== null){
        content = <Project/>;
      }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar onStartAddProject={handleStartAddProject}  projects={projectsState.projects} />
        {content}
      </main>
    </>
  );
}

export default App;
