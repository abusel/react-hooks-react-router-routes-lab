import React from "react";
import { directors } from "../data";

function Directors({directors}) {
  return <div>
    <h1>
      Directors Page
    </h1>
    {directors.map((director)=>{
      return <div>
        <h2>{director.name}</h2>
        <ul>
          {director.movies.map((mov)=>{
            return <li> {mov}</li>
          })}
        </ul>
        </div>
    })}</div>;
}

export default Directors;
