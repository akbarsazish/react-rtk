import React from 'react'
import  {useSelector}  from 'react-redux'

export const IcecreamView = () => {

  const numofIcecreams = useSelector(state => state.icecream.numOfIcecreams)
  return (
    <div>
        <h2> Number of Icecream: {numofIcecreams} </h2>
        <button>Order icecream </button>
        <button>Restock icecream </button>
    </div>
  )
}
