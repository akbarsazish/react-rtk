import React from 'react'
import { useSelector, useDispatch } from'react-redux'
import {ordered, restocked} from './cakeSlice'

export const CakeView = () => {
  const numofCakes = useSelector(state => state.cake.numofCakes)
  const dispatch = useDispatch()
  return (
    <div>
        <h2> Number of cakes: {numofCakes} </h2>
        <button onClick={() => dispatch(ordered())} >Order cake  </button>
        <button onClick={() => dispatch(restocked(3))} >Restock cake </button>
    </div>
  )
}
