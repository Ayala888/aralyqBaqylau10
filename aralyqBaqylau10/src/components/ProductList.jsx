import React, { useContext } from 'react'
import CartContext from './CartContext'

export default function ProductList() {
    const {state, dispatch} = useContext(CartContext)

  return (
    <div className='container'>
        <h3>Products</h3>
        <ul>
        {state.products.map(product => (
          <li key={product.id}>
            <p>{product.name}</p>
            <p>{product.price}₸</p>
            <button style={{backgroundColor: 'green'}} onClick={()=>dispatch({ type: 'ADD_ITEM' ,  payload: product})}>Add to cart</button>
          </li>
        ))}
      </ul>



      
    </div>
  )
}

