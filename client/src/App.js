
import UploadBox from './components/UploadBox';
import Tasks from './components/Tasks';
import DownloadAll from './components/DownloadAll';
import { useState } from "react";

import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';


import './App.scss'
function App() {
  const [tasks,setTasks] = useState([])
  const handleChange = async (tasks)=>{
      setTasks(tasks); 
    const files = await imagemin(['images/*.{jpg,png}'], {
        destination: 'build/images',
      plugins: [
        imageminJpegtran(),
        imageminPngquant({
          quality: [0.6, 0.8]
        })
      ]
    });
    console.log(files);
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