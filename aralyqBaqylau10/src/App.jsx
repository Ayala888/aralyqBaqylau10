
import { useReducer } from 'react'
import './App.css'
import CartContext from './components/CartContext'
import ProductList from './components/ProductList'
import Carts from './components/Carts'

const initialState={
  cart: [],
  products: [
    {id:1, name: 'Book', price: 2000},
    {id:2, name: 'Laptop', price: 150000},
    {id:3, name: 'Headphones', price: 12000}, 
  ]
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        cart: [...state.cart, action.payload]
       }
    case 'REMOVE_ITEM':
      return{
        ...state,
        cart: state.cart.filter(cart=>{
          return cart.id != action.payload
        })
      }
    case 'CLEAR_CART':
      return initialState
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state);
 

  return (
    <CartContext.Provider value={{state, dispatch}}>
      <h2>Cart Manager</h2>
      <ProductList/>
      <Carts/>
    </CartContext.Provider>


  )
}

export default App
