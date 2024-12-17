import React from 'react';
import '../css/navbar.css';

export default function Navbar() {
  return (
        <>    

      <div className="navbar ">
        <span className="navbar-name  border"> Twander </span>
        <div className="nav_search border">
          <div className="search_icon">
            <a><i className="fa-solid fa-magnifying-glass"></i></a>
            <input placeholder="Search " className="search_input"/>
          </div>
        </div>
          <div className="heart-icon  border">
            <a><i className="fa-regular fa-heart"></i></a>
  
        </div>
  
         <div className="chat-icon  border">
           <a> <i className="fa-regular fa-comment"></i></a>
  
         </div>
      </div>

        </>
  )
}
