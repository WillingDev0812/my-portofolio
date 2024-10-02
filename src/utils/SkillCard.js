import React from "react";
import "../styles/icons.css";

const SkillCard = (props) => {
  return (
    <>
      <div class="col-lg-4 features">
        <span class="fa-stack fa-3x icons">
          <i class="fas fa-circle fa-stack-2x "></i>
          <i class={props.icon}></i>
        </span>
        <h3>{props.name}</h3>
        <p>{props.content}</p>
      </div>
    </>
  );
};

export default SkillCard;
