import React, { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Display = ({ stat, text }) => {
  return (
    <div>
      {text} {stat}
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [count, setCount] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setCount(count + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setCount(count + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setCount(count + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button onClick={handleGood} text='good'></Button>
        <Button onClick={handleNeutral} text='neutral'></Button>
        <Button onClick={handleBad} text='bad'></Button>
      </div>
      <div>
        <h1>Statistics</h1>
        <Display stat={good} text='good' />
        <Display stat={neutral} text='neutral' />
        <Display stat={bad} text='bad' />
        <Display stat={count} text='count' />
        <Display stat={(good - bad) / count} text='average' />
        <Display stat={((good / count) * 100) + " %"} text='positive' />
      </div>
    </div>
  )
}

export default App