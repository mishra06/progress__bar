import React,{useState, useEffect} from 'react';
import './App.css';
import Home from './components/Home';


function App() {

  const [progres,setProgres] = useState(0);

  useEffect(()=>{
    setInterval(()=>{
      setProgres((time)=> time+1)
    },100)
  },[]);


  return (
    <div className="App">
      <div className="container">
        <h2 className="mt-3 mb-3">Progress Bar</h2>
        <div className="row justify-content-md-center">
          <div className="col-md-6">
           <Home value={ progres}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
