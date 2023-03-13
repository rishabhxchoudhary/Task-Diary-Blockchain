import React, { useEffect, useState, useContext } from 'react'
import InputForm from '../InputForm/InputForm';
import { userContext } from '../../context/userContext';
import Task from './Task/Task';

const Tasks = () => {
  const [date,setDate] = useState('')
  function updateDate (){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];  
    var today = new Date();
    let month = months[today.getMonth()].padStart(2,'0');
    var dd = String(today.getDate()).padStart(2, '0');
    var yyyy = today.getFullYear();
    let day = weekday[today.getDay()];
    let d = day + ' ' + dd + ' ' + month + ' ' + yyyy;
    setDate(d);
  }

  // const {contract} = useContext(useContext);
  const { contract } = useContext(userContext);
  const [ times,setTimes ] = useState([]);
  const [ tasks,setTasks ] = useState([]);
  const [taskList, setTaskList] = useState([])

  async function getAllTasks (){
    try{
      const Tasks = await contract.getTasks();
      setTimes(Tasks.times);
      setTasks(Tasks.tasks);
    }
    catch (err){
      // console.log(err);
    }
  }

  function setList () {
    var list = [];
    for(let i=0;i<tasks.length; i++){
      list.push(
        <Task time={times[i]} task={tasks[i]} />
      )
    }
    setTaskList(list);
  }
  useEffect(()=>{setList();},[tasks,times])
  useEffect(()=>{updateDate();getAllTasks()});

  return (
    <div className='m-2'>
        <div className="today ">
          <div className="date fw-bolder">{date}</div>
        </div>
        <ul>
          {taskList}
          <li>
          <InputForm/>
          </li>
        </ul>
    </div>
  )
}

export default Tasks;