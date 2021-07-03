
import UploadBox from './components/UploadBox';
import Tasks from './components/Tasks';
import DownloadAll from './components/DownloadAll';
import { useState } from "react";

import './App.scss'
function App() {
  const [tasks,setTasks] = useState([])
  const handleChange = async (tasks)=>{
      // setTasks(tasks);
      
      
      const result = await fetch("/api")
      
      console.log(`response recived ${result}`)


      // fetch("/api")
      // .then(res => res.json())
      // .then(
      //   (result) => {
      //     this.setState({
      //       isLoaded: true,
      //       items: result.items
      //     });
      //   },
      //   // Note: it's important to handle errors here
      //   // instead of a catch() block so that we don't swallow
      //   // exceptions from actual bugs in components.
      //   (error) => {
      //     this.setState({
      //       isLoaded: true,
      //       error
      //     });
      //   }
      // )



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