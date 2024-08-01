import React from "react";
import { image } from "../data/data";

function About() {
  return ( <div id="about"> 
  <h2>About Me  </h2>
 <p>Iam learning react</p>
<img src={image}alt="i made this"/>
  </div>);
}

export default About;
