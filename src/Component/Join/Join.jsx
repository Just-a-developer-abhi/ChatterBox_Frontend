import React from 'react'
import './Join.css';
import logo from "../../Assets/png/logo-no-background.png"
import {Link} from "react-router-dom";

let user;
 
const Join = () => {

  const sendUser = () =>{
    user = document.getElementById('JoinInput').value
  }
  return (
   <div className="JoinPage">
     <div className="JoinContainer">
       <img src={logo} alt="logo"/>
       <h1>Chatter-Box</h1>
       <input type="text" placeholder="Hi My name is ChatterBox. What's yours? " id="JoinInput" />
       <Link style={{textDecoration: "none"}} to="/chat">
       <button className='joinBTN' onClick={sendUser}>WELCOME</button>
       </Link>
     </div>
   </div>
  )
}

export default Join