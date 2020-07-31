import React from "react";
import "../Project.css";

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  temporary = () => {
    return (
      <div className="project-info-box">
        <b className="project-info-box-title">Overview</b>
        <p className="project-info-box-description">
          Every 12 hours a boss event occurs. A boss event is an NPC that every
          player can attack at will. If the boss isnt killed within those 12
          hours.
        </p>
      </div>
    );
  };

  render() {
    return (
      <div className="project">
        <div className="project-one-take">
          <b>Project Name</b>
          <div className="links">
            <a href="#">live site</a>
            <a href="#">source code</a>
          </div>
          <div className="project-image" />
        </div>
        <div className="project-details">
          {this.temporary()}
          {this.temporary()}
          {this.temporary()}
          {this.temporary()}
        </div>
      </div>
    );
  }
}

export default Project;
