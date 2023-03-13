import React, { useContext, useState } from 'react'
import { userContext } from '../../context/userContext'

const InputForm = () => {
  const { contract } = useContext(userContext)
  // Timer
  const [time, setTime] = useState('')
  const [task, setTask] = useState('')
  const updateTime = () => {
    var today = new Date()
    var ampm = today.getHours() >= 12 ? 'PM' : 'AM'
    setTime(
      (today.getHours() % 12 || 12).toString().padStart(2, '0') +
        ':' +
        today.getMinutes().toString().padStart(2, '0') +
        ':' +
        today.getSeconds().toString().padStart(2, '0') +
        ' ' +
        ampm,
    )
  }
  setInterval(updateTime, 1000)
  async function handleSubmit(e) {
    e.preventDefault();
    await contract.setTasks(time,task)
    console.log("Added to the blockchain!")
  }

  return (
      <div className="row">
        <div className="col-xxlg-2">
          <div className="timeinput">
            <p className="text-uppercase fw-light">{time}</p>
          </div>
        </div>
        <div className="col-xxlg-10">
          <div className="taskinput">
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="task"
                  onChange={(e) => {
                    setTask(e.target.value)
                  }}
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={task}
                  autocomplete="off"
                  required
                />
                <label htmlFor="floatingInput">Task</label>
              </div>
              <button className='btn btn-primary'>Submit</button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default InputForm
