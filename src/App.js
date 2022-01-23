import { useState, useEffect } from 'react'
import './App.css';

const Clock = props => {
  return <h1>{props.time}</h1>
}


function App() {
  const [time, setTime] = useState(new Date().toLocaleString())
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleString())
    }, 1000)
  }, [time])
  return (
    <div className="App">
     
        <p>
          Time: <Clock time={time} />
        </p>
        
    </div>
  );
}

export default App;
