import React, { useState, useEffect } from "react";
import { GifItem } from "../components/GifItem";
import { getGifs } from "../helpers/getGifs";

export const GifContainer = ({ categoria }) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs(categoria)
        .then( setGifs )
  }, [categoria]);

  
  return (
    <>
      <h3>{categoria}</h3>
      <div className="card__container">
        {gifs.map((g) => {
          return <GifItem img={g.url} title={g.title} key={g.id}></GifItem>;
        })}
      </div>
    </>
  );
};
