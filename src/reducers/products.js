const products = (state = [], action) => {
  // 修改 state 的方法 相关 action 的一些事
  switch (action.type) {
    case 'GET_PRODUCTS':
      return action.products
    case 'ADD_TO_CART':
      const newState = [...state]
      newState.find(e => e.id === action.id).inventory--
      return newState
    case 'MIN_TO_CART':
      const newCart = [...state]
      newCart.find(e => e.id === action.id).inventory++
      return newCart
    default:
      return state
  }
}

export default products
