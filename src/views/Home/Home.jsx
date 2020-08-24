import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'
import Search from './search'

import styles from './Home.module.css'

class Home extends React.Component {
  state = {}

  client = new SomosClient()

  render() {
    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          heading="Somos Front-end Challange - Flávio"
        />
        <div className={styles.wrapper}>
          <Search />
        </div>
      </React.Fragment>
    )
  }
}

export default Home
