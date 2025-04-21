import React, { useContext } from 'react'
import CartContext from './CartContext'


export default function Carts() {
    const {state, dispatch} = useContext(CartContext)
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
      {state.cart.length > 0 && <button style={{backgroundColor: 'blue'}} onClick={()=>dispatch({ type: 'CLEAR_CART' })}>Clear Cart</button>}
      

      
    </div>
  )
}
