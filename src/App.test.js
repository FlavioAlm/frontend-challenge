import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import Search from './views/Search'
import Artist from './views/Artist'

Enzyme.configure({ adapter: new Adapter() })

describe('App', ()=> {

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

describe('Search', ()=> {

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Search>Search</Search>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('shows one form', ()=> {
    const element = shallow(
      <Search>Search</Search>
    )
    expect(element.find("form").length).toBe(1)
  })
})

describe('Artist', ()=> {

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Artist />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('shows one h2 when there is no data', ()=> {
    const element = shallow(
      <Artist />
    )
    expect(element.find("h2").length).toBe(1)
  })
})

