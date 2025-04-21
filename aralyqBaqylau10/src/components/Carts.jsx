import React, { useContext } from 'react'
import CartContext from './CartContext'


export default function Carts() {
    const {state, dispatch} = useContext(CartContext)

    const totalPrice = state.cart.reduce((sum, item) => sum + item.price, 0); 
    
  return (
    <div className='container'>
        <h3>Cart</h3>
        <ul>
        {state.cart.map(product => (
          <li key={product.id}>
            <p>{product.name}</p>
            <p>{product.price}₸</p>
            <button style={{backgroundColor: 'red'}} onClick={()=>dispatch({ type: 'REMOVE_ITEM' ,  payload: product.id})}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: {totalPrice}т</p>
      {state.cart.length > 0 && <button style={{backgroundColor: 'blue'}} onClick={()=>dispatch({ type: 'CLEAR_CART' })}>Clear Cart</button>}
      

      
    </div>
  )
}
