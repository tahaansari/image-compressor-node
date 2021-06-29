import './App.scss'
import UploadBox from './components/UploadBox'
import Tasks from './components/Tasks'
import DownloadAll from './components/DownloadAll'
import React from "react";
import { useState } from "react";
function App() {

  const [data, setData] = React.useState(null);
  const [tasks,setTasks] = useState([])

  const handleChange = (tasks)=>{
    setTasks(tasks); 
  }

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
      <UploadBox handleChange={(tasks)=>handleChange(tasks)}/>
      <div className="task-list">
        <Tasks tasks={tasks}/>
        {!data ? "Loading..." : data}
      </div>
      <DownloadAll/>
    </>
  );

}
export default App;