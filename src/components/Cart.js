import React, { Component } from 'react'
import ProductList from './ProductList'
import ShoppingCart from './ShoppingCart'
import { connect } from 'react-redux'
import './cart.scss'
import {
  addToCart,
  checkoutCart,
  minProductQuantity,
  minToCart
} from '../actions/'

class Cart extends Component {
  render() {
    const {
      products,
      addToCart,
      cart,
      checkoutCart,
      minProductQuantity,
      minToCart
    } = this.props
    return (
      <div className="shopping">
        <ProductList products={products} addToCart={addToCart} />
        <ShoppingCart
          cart={cart}
          products={products}
          checkoutCart={checkoutCart}
          addToCart={addToCart}
          minProductQuantity={minProductQuantity}
          minToCart={minToCart}
        />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    products: state.products,
    cart: state.cart
  }
}
export default connect(
  mapStateToProps,
  { addToCart, checkoutCart, minProductQuantity, minToCart }
)(Cart)
