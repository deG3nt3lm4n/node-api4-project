import React from 'react'

function Users({userData}) {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {
          userData.map(user => {
            console.log(user)
            return <li>{user.name}</li>
          })
        }
      </ul>
    </div>
  )
}

export default Users
