import React from 'react'

function User({user, url}) {

  const onDelete = (user) => {

    fetch(url(`/api/users/${user.id}`), {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => alert('User has been deleted...'))
    .catch(err => console.log(err))


  }

  return (
    <li key={user.id}>

      <span className="username">{user.name}</span>
      <div className="buttons">
        <button onClick={() => console.log('wait for it')}>POSTS</button>
        <button onClick={() => onDelete(user)}>DEL</button>
      </div>


    </li>
  )
}

export default User
