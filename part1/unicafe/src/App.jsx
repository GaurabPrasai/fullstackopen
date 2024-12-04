import { useState } from 'react'


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const forGood = () =>{
    setGood(good + 1)
    const updatedGood = good + 1;
    setAll(updatedGood + neutral + bad)
  };

  const forNeutral = () =>{
    setNeutral(neutral + 1)
    const updatedNeutral = neutral + 1;
    setAll(good + updatedNeutral + bad)

  };

  const forBad = () =>{
    setBad(bad + 1)
    const updatedBad = bad + 1;
    setAll(good + neutral + updatedBad)
  };

  const average = (good - bad) / all;
  const positivePercentage = (good / all) * 100;


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
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positivePercentage}</p>

    </div>
  )
}

export default App