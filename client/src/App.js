
import UploadBox from './components/UploadBox';
import Tasks from './components/Tasks';
import DownloadAll from './components/DownloadAll';
import { useState } from "react";

import './App.scss'
function App() {
  const [tasks,setTasks] = useState([])
  const handleChange = async (tasks)=>{
      console.log(tasks)
      setTasks(tasks);
      // const res = await fetch("/api")
      // const data = await res.json();
      // console.log(`response recived ${JSON.stringify(data)}`)
  }
  return (
    <>
      <UploadBox handleChange={(tasks)=>handleChange(tasks)}/>
      <div className="task-list">
        <Tasks tasks={tasks}/>
      </div>
      <DownloadAll/>
    </>
  );
}
export default App;