import React,{useState} from 'react'
import User from './User'

const initialData = {
  name: ''
}


function Users({userData, url}) {
  const [user, setUser] = useState(initialData)

  const addUser = (user) => {

    fetch(url('/api/users/'),{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => alert('Congratz you created ', data.name))
  }

  const onChange = (e) => {
    const {value} = e.target
    setUser({
      ...user,
      name: value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    addUser(user)
    setUser(initialData)
  }

  return (
    <div className="userDataTable">
      <h2>Users</h2>

      <form onSubmit={onSubmit} className="userAddForm">
        <label>
          <span className="labelText">Add User:</span>
          <input type="text" value={user.name} onChange={onChange}  />
        </label>
        <button>Add</button>
      </form>


      <ul>
        {
          userData.map(user => <User user={user} url={url} />)
        }
      </ul>
    </div>
  )
}

export default Users
