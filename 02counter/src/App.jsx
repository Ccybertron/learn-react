import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setCounter] = useState(4)
  // let counter = 4

  const addvalue = () => {
    setCounter(Counter => {
      if (Counter < 20 ){
        return Counter + 1
      }
      return Counter
    });
  };

  const removevalue = () => {
    setCounter(Counter => {
      if (Counter > 0 ){
        return Counter - 1
      }
      return Counter
    });
  };

  return (
    <>
      <h1> Basic | Counter</h1>
      <h2>conter value: {counter}</h2>

      <button 
      onClick={addvalue}
      >Add value</button>
      <br />
      <button
      onClick={removevalue}
      >Remove value</button>
    </>
  )
}

export default App
