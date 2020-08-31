import React from 'react'

import "./Albums.css"

const Albums = ({albums}) => {

  const dateToLocale = (release_date) => {
    const AlbumDate = new Date (Date.parse(release_date))
    const releaseDate = (AlbumDate).toLocaleDateString();
    return releaseDate
  }

  return (
    <>
      <hr/>
        <h2 className="album-heading">Albums</h2>
      <hr/>
      
      <div className="album-container">
        {albums.map( item => 
          <section className="album-card" key={item.name}>
            <img 
              className="album-image" 
              src={item.images[0].url}  
              alt={item.name}
            />
            <div className="album-info">
              <label className="album-info-item">{`Disco: ${item.name}`}</label>
              <label className="album-info-item">{`Release: ${dateToLocale(item.release_date)}`}</label>
            </div>
          </section>
        )}
      </div>
    </>
  )
}


export default Albums


