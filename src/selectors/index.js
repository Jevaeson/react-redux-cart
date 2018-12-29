export const isCartEmpty = (cart, products) => {
  return cart.productId.length && products.length
}
