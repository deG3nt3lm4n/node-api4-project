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

  },[data])



  return (
    <div className="App">
      <Header/>
      <Users userData={data} url={url} />
    </div>
  );
}

export default App;
