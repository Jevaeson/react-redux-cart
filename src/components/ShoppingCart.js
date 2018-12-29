import React, { Component } from 'react'
import styled from 'styled-components'
import { isCartEmpty } from '../selectors/'

class ShoppingCart extends Component {
  state = {
    val: true
  }
  render() {
    const { val } = this.state
    const {
      cart,
      products,
      addToCart,
      minProductQuantity,
      minToCart
    } = this.props
    // {pid:[],byid:{}}   [{},{},{}]
    const cartContent = isCartEmpty(cart, products) ? (
      <ul>
        {cart.productId.map(e => {
          const product = products.find(product => product.id === e)
          return (
            <li key={e}>
              <input
                type="checkbox"
                checked={val}
                onChange={this.handleChange}
              />
              {product.productName}
              <span>￥{product.price} x</span>
              <button
                onClick={() => {
                  minProductQuantity(e)
                  minToCart(e, { inventory: product.inventory + 1 })
                }}
              >
                -
              </button>
              <span>{cart.quantityById[e]}</span>
              <button
                onClick={() => {
                  if (val) {
                    addToCart(e, { inventory: product.inventory - 1 })
                  } else {
                    this.setState({
                      val: true
                    })
                    addToCart(e, { inventory: product.inventory - 1 })
                  }
                }}
                disabled={product.inventory === 0 ? true : false}
              >
                +
              </button>
            </li>
          )
        })}
      </ul>
    ) : (
      <div>购物车空空的~快去购物吧~</div>
    )

    const total =
      cart.productId.length && products.length
        ? cart.productId.reduce(
            (num, e) =>
              num + products.find(i => i.id === e).price * cart.quantityById[e],
            0
          )
        : 0

    return (
      <Wrap>
        <h2>购物车</h2>
        {cartContent}
        <span>总价钱{total}</span>
        <br />
        <Button
          onClick={() => {
            this.props.checkoutCart()
          }}
          disabled={cart.productId.length ? false : true}
        >
          清空购物车
        </Button>
      </Wrap>
    )
  }
  handleChange = event => {
    this.setState({
      val: event.target.checked
    })
  }
  // addToCart = (inventory, id) => {
  //   const { addToCart } = this.props
  //   const newInventory = {
  //     inventory: inventory - 1
  //   }
  //   addToCart(id, newInventory)
  // }
}

export default ShoppingCart

const Wrap = styled.div`
  width: 50%;
  margin: 0 auto;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  ul li {
    margin-top: 5px;
    border: 1px solid #ccc;
    padding: 20px 10px;
    display: flex;
    justify-content: space-around;
  }
`
const Button = styled.button`
  margin-top: 20px;
  background-color: #c91623;
  color: #fff;
  outline: none;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    background-color: teal;
  }
`
