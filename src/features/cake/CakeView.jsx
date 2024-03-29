import React from 'react'
import { useSelector } from'react-redux'

export const CakeView = () => {
  const numofCakes = useSelector(state => state.cake.numofCakes)
  return (
    <div>
        <h2> Number of cakes: {numofCakes} </h2>
        <button>Order cake </button>
        <button>Restock cake </button>
    </div>
  )
}
