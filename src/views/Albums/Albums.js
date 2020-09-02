import React from 'react'

import "./Albums.css"

const Albums = ({albums}) => {

  const dateToLocale = (release_date) => {
    const AlbumDate = new Date (Date.parse(release_date))
    return AlbumDate.toLocaleDateString()
  }

  return (
    <>
      <hr/>
        <h2 className="album-heading">Albums</h2>
      <hr/>
      
      <main className="album-container">
        {albums.map( item => 
          <article className="album-card" key={item.name}>
            {!item.images.length
              ? <img 
                  className="album-image" 
                  src="noImageAvailable.jpg"  
                  alt="noImageAvailable.jpg"
                />
              : <img 
                  className="album-image" 
                  src={item.images[0].url}  
                  alt={item.name}
                />
            }
            <section className="album-info">
              <p className="album-info-item">{`Disco: ${item.name}`}</p>
              <p className="album-info-item">{`Release: ${dateToLocale(item.release_date)}`}</p>
            </section>
          </article>
        )}
      </main>
    </>
  )
}


export default Albums


