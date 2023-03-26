import { useState } from "react";
import "./App.css";
import HeaderNav from "./components/HeaderNav";
import LinearBar from "./components/LinearBar";
import TextAnimation from "./pure/textAnimation";
import About from "./pure/About";
import AboutImg from "./pure/AboutImg";
import ImageList from "./components/ImageList"
import ActionAreaCard from "./components/ActionAreaCard"
import {motion} from "framer-motion"




function App() {
  return (
    <div className="App">

      <header id="header">
        <HeaderNav />
      </header>
      
      <section>
        <TextAnimation />
        <div className="image-container">
        <AboutImg/>
        </div>

        <About/>

      </section>
      <h2 className="stats">Trending Music</h2>
      <LinearBar/>
      <img src="https://cdn-images-1.medium.com/fit/t/1600/480/1*a6D0lMSZOlh_rVx1Nf4hHA.gif" className="rock" alt="" />
      
      <section className="genre">
        <div className="genre-title">
        <h2>Genres</h2>
        </div>
        <div className="genre-img">
        <ImageList/>
        </div>
      </section>

      <section className="pricing">
        <h2 className="pricing-title">Pricing</h2>

        <div className="pricing-card">
        <ActionAreaCard name="Free"/>
        <ActionAreaCard name="Standard"/>
        <ActionAreaCard name="Premium"/>
        </div>

      </section>

      
    </div>

    


  );
}


export default App;
