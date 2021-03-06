import React from "react";
import { GifItem } from "../components/GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from 'prop-types'

export const GifContainer = ({ categoria }) => {
  //Renombro data
  const { data: images, loading } = useFetchGifs(categoria);

  return (
    <>
      <h3>{categoria}</h3>

      {/* {loading ? <p>Cargando... </p> : null } */}
      {loading && <p className="animate__animated animate__flash"> Cargando </p>}
      <div className="card__container">
        {images.map((g) => {
          return <GifItem img={g.url} title={g.title} key={g.id}></GifItem>;
        })}
      </div>
    </>
  );
};

GifContainer.propTypes = {
  categoria: PropTypes.string.isRequired
}