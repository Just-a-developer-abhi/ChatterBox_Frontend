import React from 'react'
import './Join.css';
import logo from "../../Assets/png/logo-no-background.png"

const Join = () => {
  return (
   <div className="JoinPage">
     <div className="JoinContainer">
       <img src={logo} alt="logo"/>
       <h1>Chatter-Box</h1>
     </div>
   </div>
  )
}

export default Join