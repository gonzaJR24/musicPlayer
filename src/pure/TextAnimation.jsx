import React from "react";
import "../styles/textAnimation.css"


const TextAnimation = () => {
  return (
  
  <div className="wrapper">
    <div className="static-txt">We're</div>
    <ul className="dynamic-txts">
      <li><span>Passion</span></li>
      <li><span>Freedom</span></li>
      <li><span>Inspiration</span></li>
      <li><span>Music🎵</span></li>
    </ul>
  </div>
  );
};

export default TextAnimation;
