import { useState } from 'react'

const Statistics = ({good, neutral, bad, all}) => {

  all = good + neutral + bad;
  const average = (good - bad) / all;
  const positivePercentage = (good / all) * 100;

  if(all === 0){
    return <p>No feedback given</p>
  }

  return(
    <>
      <h1>statistics</h1>
      <p>good {good} </p>
      <p>neutral {neutral} </p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positivePercentage}</p>  
    </>
  )
}

const Button = ({onClick, text}) =>{
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodBtn = () => setGood(good + 1)
  const handleNeutralBtn = () => setNeutral(neutral + 1)
  const handleBadBtn = () => setBad(bad + 1)

  return (
    <div>

      <h1>give feedback</h1>
      <Button onClick={handleGoodBtn} text="Good" />
      <Button onClick={handleNeutralBtn} text="Neutral" />
      <Button onClick={handleBadBtn} text="Bad" />
      <Statistics 
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
      />
      
    </div>
  )
}

export default App