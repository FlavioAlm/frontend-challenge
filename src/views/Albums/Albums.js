import React from 'react'

import "./Albums.css"

const Albums = ({albums}) => 
  <>
    <hr/>
      <h2 className="album-heading">Albums</h2>
    <hr/>
    
    <div className="album-container">
      {albums.map( item => 
        <ul className="album-card" key={item.name}>
          <li>
            <img 
              className="album-image" 
              src={item.images[0].url}  
              alt={item.name}
            />
          </li>
          <li><label className="album-name">{item.name}</label></li>
          <li><label className="album-date">{item.release_date}</label></li>
        </ul>
      )}
    </div>
  </>

export default Albums


