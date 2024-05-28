import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "aryan sharma",
    age : 19
  }
  return (
    <>
    <h1 className='bg-green-500 p-4 rounded-xl'>
      Tailwind CSS
    </h1>
    <Card someObj = {myObj} btnText = "Click me"/>
    </>
  )
}

export default App
