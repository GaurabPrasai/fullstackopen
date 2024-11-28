import { useState } from 'react'
import './App.css'


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const forGood = () =>{
    setGood(good + 1)
  };

  const forNeutral = () =>{
    setNeutral(neutral + 1)
  };

  const forBad = () =>{
    setBad(bad + 1)
  };

  return (
    <div>
      
      <h1>give feedback</h1>
      <button onClick={forGood}>good</button>
      <button onClick={forNeutral}>neutral</button>
      <button onClick={forBad}>bad</button>
      <h1>statistics</h1>
      <p>good {good} </p>
      <p>neutral {neutral} </p>
      <p>bad {bad}</p>

    </div>
  )
}

export default App