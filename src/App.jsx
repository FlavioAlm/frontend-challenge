import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import { Layout } from 'components'
import { Home, DisplayArtist } from 'views'

import './App.module.css'

const App = () => (
  <Layout>
    <Router>
      <Switch>
        <Route path="/artista/:id" component={DisplayArtist} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </Layout>
)

export default App
