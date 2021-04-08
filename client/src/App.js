import React,{useState,useEffect} from 'react'
import './App.css';

function url(path){
  return process.env.NODE_ENV  === "development"
  ? `http://localhost:1422${path}` : path
}


function App() {

  const [data, setData] = useState([])

  useEffect(() => {

    fetch(url("/api/users"))
      .then(res => res.json())
      .then(apiData => setData(apiData))

  },[])



  return (
    <div className="App">

      <header className="App-header">
        <h1>Welcome to nothing</h1>
        <h2>what is life</h2>
        <p>Enjoy your stay</p>
        <h6>Check out the endpoints</h6>

        <h6>The amount of users {data.length}</h6>
      </header>



    </div>
  );
}

export default App;
