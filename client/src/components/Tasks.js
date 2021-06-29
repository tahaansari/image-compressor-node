import Task from "./Task"
const getTasks = (props) => {
    console.log(props.tasks)
    let tasks = [];
    for(let i = 0; i<props.tasks.length; i++){
        console.log('hello')
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