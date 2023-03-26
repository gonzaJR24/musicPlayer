import React from "react";
import '../styles/LinearBar.css';

function LinearBar () {
   return (
       <div className="container">

           <div className="skill-box">
               <span className="title">Pop</span>
               <div className="skill-bar">
                   <span className="skill-per html">
                       <span className="tooltip">64%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">Rock</span>
               <div className="skill-bar">
                   <span className="skill-per css">
                       <span className="tooltip">57%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">Soundtracks</span>
               <div className="skill-bar">
                   <span className="skill-per javascript">
                       <span className="tooltip">30%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">Hip-Hop/Rap</span>
               <div className="skill-bar">
                   <span className="skill-per nodejs">
                       <span className="tooltip">26%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">Metal</span>
               <div className="skill-bar">
                   <span className="skill-per reactjs">
                       <span className="tooltip">19%</span>
                   </span>
               </div>
           </div>
           
       </div>
   )
}

export default LinearBar;