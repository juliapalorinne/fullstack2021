import React, { useState } from 'react'


const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  const av = (props.good - props.bad) / all
  const pos = 100 * props.good / all

  if (all === 0) {
    return (
      <div>
      <h1>Statistics</h1>
      <p>No feedback given.</p>
    </div>
    ) 
  }

  return (
    <div>
      <h1>Statistics</h1>
      <StatisticLine text="good" value ={props.good}/>
      <StatisticLine text="neutral" value ={props.neutral}/>
      <StatisticLine text="bad" value ={props.bad}/>
      <StatisticLine text="all" value ={all}/>
      <StatisticLine text="average" value ={av}/>
      <StatisticLine text="positive" value ={pos}/>
    </div>
  )
}

const StatisticLine = (props) => {
  return (<p>{props.text}: {props.value}</p>)
}


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickGood = () => {
    setGood(good + 1)
  }

  const clickNeutral = () => {
    setNeutral(neutral + 1)
  }

  const clickBad = () => {
    setBad(bad + 1)
  }


  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <Button handleClick={clickGood} text='good' />
        <Button handleClick={clickNeutral} text='neutral' />
        <Button handleClick={clickBad} text='bad' />
      </div>
      <br/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App