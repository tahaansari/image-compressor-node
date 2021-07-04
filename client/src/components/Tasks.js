import Task from "./Task"
const getTasks = (props) => {
    let tasks = [];
    for(let i = 0; i<props.tasks.length; i++){
        tasks.push(<Task name={props.tasks[i].name} size={  ( (props.tasks[i].size / 1000) / 1000 ).toFixed(2)} key={i}/>)
    }
    return tasks
}
const Tasks = (props) => {
    return (
        <>{getTasks(props)}</>
    )
}
export default Tasks