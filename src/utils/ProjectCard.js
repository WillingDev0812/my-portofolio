import * as React from "react";
import "../styles/projectcard.css";

export default function ProjectCard(props) {
  return (
    <div
      onClick={() => {
        window.open(props.link, "_blank");
      }}
      className="col-lg-6"
    >
      <div className="card" >
        <div className="card-body">
          <i className="tech_project_icons iconify mySpan" data-icon={props.logo}></i>
          {/*<img src={props.img} className="card__image" alt="project"/>*/}
          <br/>
          <br/>
          <h3 className="card-title">{props.name}</h3>
          <p className="card-text">{props.description}</p>
        </div>
        <button className="card__btn">View Project</button>
      </div>
    </div>
  );
}
