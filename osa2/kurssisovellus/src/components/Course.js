import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.title}</h1>
  )
}

const Content = (props) => {
  const list = props.parts.map(p => <Part part={p}/>)
  return (list)
}

const Part = (props) => {
  const line = <p>{props.part.name} {props.part.exercises}</p>
  return (line)
}

const Total = (props) => {
  let total = 0
  props.parts.forEach(part => {
    total += part.exercises
  })
  return (
    <p><b>total of {total} exercises</b></p>
  )
}

const Course = ({ course }) => { 
  return (
    <div>
      <Header title={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default Course