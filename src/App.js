import React, { Component } from 'react'
import './static/gloable.css'
import Cart from './components/Cart'
import { connect } from 'react-redux'
import { getProducts } from './actions/'

class App extends Component {
  componentDidMount() {
    const { getProducts } = this.props
    getProducts()
  }
  render() {
    return (
      <>
        <h1>react-redux shopping-cart</h1>
        <Cart />
      </>
    )
  }
}

export default connect(
  null,
  { getProducts }
)(App)
