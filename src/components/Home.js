import React, { useEffect , useState} from 'react'
import './Home.css'

const Home = ({value = 0}) => {

const[percent,setPercent] = useState(value);

useEffect(()=>{

  if(percent<100){
    setTimeout(()=>setPercent(newval=>newval+1),200)
  }

},[percent])

  return (
    <div>
      <div className="progress_bar">
        <div className="progress_fill" style={{width:`${percent}%`}}>
              {percent}%
        </div>
      </div>
    </div>
  )
}

export default Home;
