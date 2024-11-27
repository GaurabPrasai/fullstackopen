import { useState } from 'react'
import './App.css'

const Button = () => {
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={forGood} text="good"/>
      <button onClick={forNeutral} text="neutral"/>
      <button onClick={forBad} text="bad"/>

    </div>
  )
}

export default App