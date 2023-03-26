import React from "react";
import "../styles/headerNav.css";

const HeaderNav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Help</li>
          <li>Genres</li>
          <li>Pricing</li>
          <li>Contact</li>
          <li>Account</li>
        </ul>
      </nav>


        {/* Video container */}
      <video autoPlay muted loop>
        <source src=".\src\assets\video.mp4" type="video/mp4" />
      </video>

      <div className="header-title">
          <h1>Lyrics+</h1>
      </div>

    </>
  );
};

export default HeaderNav;
