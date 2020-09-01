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
          <img className={styles.lupa} src="magnifying glass.png" alt="magnifying glass" />
          <Link to={`/busca`}> Searching for an Artist </Link>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
