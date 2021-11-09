import React from "react";
import { actors } from "../data";

function Actors({actors}) {
  return <div>
    <h1>
      Actors Page
    </h1>
    {actors.map((act)=>{
      return <div>
        <h2>{act.name}</h2>
        <ul>
          {act.movies.map((mov)=>{
            return <li>{mov} </li>
          })}
        </ul>
      </div>
    })}</div>;
}

export default Actors;
