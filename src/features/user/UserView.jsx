import React from 'react'
import { useSelector } from 'react-redux'

export const UserView = () => {
  const users = useSelector(state => state.user.users)
  return (
    <div>
    <h2> List of users: {users} </h2>
    
</div>
  )
}
