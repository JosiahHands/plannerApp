import React from "react";
import { Tile } from "../tile/Tile";
export const TileList = (props) => {
  return (
    <div>
      {props.items.map((item, index) => {
        const { name, ...description } = item;
        return <Tile key={index} name={name} description={description} />;
      })}
    </div>
  );
};
