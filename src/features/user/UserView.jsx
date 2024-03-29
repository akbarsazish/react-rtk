import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUser } from './userSlice'

export const UserView = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])
  return (
    <div>
      <h1>List of users</h1>
      {user.loading && <div>Loading...</div>}
      {user.error && <div>Error: {user.error}</div>}
      {user.users.map(user => (
        <ul key={user.id}>
          <li>
            <strong>Name:</strong> {user.name}
          </li>
          <li>
            <strong>Email:</strong> {user.email}
          </li>
        </ul>
      ))}
      
    </div>
  )
}
