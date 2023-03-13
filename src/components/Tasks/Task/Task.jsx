import React, { useContext } from 'react'
import { userContext } from '../../../context/userContext';

const Task = (props) => {
const { contract } = useContext(userContext);

async function handleRemove(time){
    await contract.removeTask(time);
}

  return (
    <li>
      <div className="container-fluid">
        <p>
          <div className="fw-bold d-inline-block">{props.time} :</div>{' '}
          {props.task}
          <div className="d-inline-block ml-3">
            <i style={{color: "red"}}
              className="fa fa-solid fa-trash"
              onClick={() => {
                handleRemove(props.time);
              }}
            ></i>
          </div>
        </p>
      </div>
    </li>
  )
}

export default Task
