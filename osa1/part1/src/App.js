import React from 'react'


const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const ika = 10;
  const nimi = 'Jari'
  let ika2 = 12
  const taulukko = [1, 2, 3]
  taulukko.push(4)
  const taulukko2 = taulukko.concat(5)
  const taulukko3 = taulukko2.map(value => value*value)

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Sari" age={ika2} />
      <Hello name={nimi} age={ika} />
      <p>{taulukko}</p>
      <p>{taulukko2}</p>
      <p>{taulukko3}</p>
    </>
  )
}

export default App