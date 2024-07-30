import "./work.css";
import Works from "./Works";
import React from "react";

const Work = () => {
  return (
    <section className="work section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent works</span>
         
        <Works />
    </section>
  );
};

export default Work;
