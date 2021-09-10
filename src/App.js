import React, { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Stats = ({ good, neutral, bad, count }) => {
  if (count === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <Display value={good} text='Good' />
      <Display value={neutral} text='Neutral' />
      <Display value={bad} text='Bad' />
      <Display value={count} text='Count' />
      <Display value={(good - bad) / count} text='Average' />
      <Display value={((good / count) * 100) + " %"} text='Positive' />
    </div>
  )
}

const Display = ({ value, text }) => {
  return (
    <div>
      {text} {value}
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
      <h1>Give feedback</h1>
      <div>
        <Button onClick={handleGood} text='Good'></Button>
        <Button onClick={handleNeutral} text='Neutral'></Button>
        <Button onClick={handleBad} text='Bad'></Button>
      </div>
      <h1>Statistics</h1>
      <Stats good={good} neutral={neutral} bad={bad} count={count} />
    </div>
  )
}

export default App