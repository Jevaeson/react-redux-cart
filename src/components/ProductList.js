import React, { Component } from 'react'
import styled from 'styled-components'

class ProductList extends Component {
  render() {
    const { products } = this.props
    const list = products.length ? (
      <Wrap>
        <ul>
          {products.map(e => (
            <li key={e.id}>
              <img src={e.imgSrc} alt="" />
              <div>
                <h2>{e.productName}</h2>
                <Span>价格{e.price}元</Span>
                <Span>剩余{e.inventory}部</Span>
                <button
                  onClick={() => {
                    this.addToCart(e.inventory, e.id)
                  }}
                  disabled={e.inventory === 0 ? true : false}
                >
                  添加到购物车
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Wrap>
    ) : (
      <div>请稍等……</div>
    )
    return <>{list}</>
  }
  addToCart = (inventory, id) => {
    const { addToCart } = this.props
    const newInventory = {
      inventory: inventory - 1
    }
    addToCart(id, newInventory)
  }
}

export default ProductList

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
  ul li > div {
    display: flex;
    flex-direction: column;
  }
  ul li > div > button {
    margin-top: 20px;
    background-color: #c91623;
    color: #fff;
    outline: none;
    border: none;
    padding: 4px 0px;
    border-radius: 4px;
    cursor: pointer;
  }
  ul li > div > button:hover {
    background-color: teal;
  }
`
const Span = styled.span`
  margin-top: 20px;
`
