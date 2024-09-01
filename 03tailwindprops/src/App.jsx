import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className=' text-black bg-green-500 rounded-xl p-4 mb-4'>tailwind css</h1>

      <Card username= "cybertron" btnText="Click Me"/>
      <Card username="Cybe" />
    </>
  )
}

export default App
