import React from 'react'
import { Link } from 'react-router-dom'

import { SubHeader } from 'components'

import styles from './Home.module.css'

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
          <img src="lupa.jpg" alt="lupa" />
          <Link to={`/busca`}> Searching for an Artist </Link>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
