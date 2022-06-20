import React from "react";

function ProjectItem({ image, name }) {
  return (
    <div className="projectItem">
      <div className="bgImage" style={{ backgroundImage: `url${image}` }}>
        <h1>{name}</h1>
      </div>
    </div>
  );
}

export default ProjectItem;
