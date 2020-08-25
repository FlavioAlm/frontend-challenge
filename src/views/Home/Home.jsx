import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'
import Search from './search'

import styles from './Home.module.css'

const client = new SomosClient()

class Home extends React.Component {
  state = {}

  render() {
    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          heading="Somos Front-end Challange - Flávio"
        />
        <div className={styles.wrapper}>
          <Search 
            getArtistList={client.getArtistList} 
            searchArtists={client.searchArtists}/>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
