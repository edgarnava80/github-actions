import { useState, useEffect } from 'react'
import './App.css';

const Clock = props => {
  return <h1>{props.time}</h1>
}


function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
  }, [time])
  return (
    <div className="App">
     
        <p>
          Time: <Clock time={time} />
          Current local live time.
        </p>
        
    </div>
  );
}

export default App;
