import React,{useState,useEffect} from 'react'
import './App.css';
import Header from './componets/Header';
import Users from './componets/Users';

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
      <Header/>
      <Users userData={data} />
    </div>
  );
}

export default App;
