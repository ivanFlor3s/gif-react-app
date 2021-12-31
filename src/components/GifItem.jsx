import React from 'react'

export const GifItem = ({img, title}) => {
    return (
        <div className="card animate__animated  animate__fadeInLeftBig">
          <div>
              <img  className="card__img" src={img} alt={title} />
          </div>
          <div className="card__footer">
              <h4>{title}</h4>
          </div>
      </div>
    )
}   
