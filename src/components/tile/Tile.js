import React from "react";

export const Tile = ({name, description}) => {
  return (
    <div className="tile-container">
      <p>{name}</p>
      {description.map((desc, index) => (
        <p className="tile" key={index}>{desc}</p>
      ))}
    </div>
  );
};
