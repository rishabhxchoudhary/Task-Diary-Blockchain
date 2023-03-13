import React, { useContext } from 'react'
import { userContext } from '../../context/userContext'

const Navbar = () => {
  const { account } = useContext(userContext)
  return (
    <>
 <div className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a href="." className="navbar-brand">Task Diary</a>
      </div>
    </div>
      <div className="h5">
        Account ID : <span className="text-break">{account}</span>
      </div>
    </>
  )
}

export default Navbar
