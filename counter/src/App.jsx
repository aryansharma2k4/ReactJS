//UI Updation is controlled by react so you need to use hooks
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//responsible for changing the state of the variable in the entire UI and propogate it 
//the usestate hook returns two things in the form of array on is the variable and the other is the method which will control the variable

  const [counter, setCounter] = useState(0)
  const addValue = () => {
    setCounter(counter + 1)
  }
  const remValue = () => {
    if(counter - 1 >= 0){
     setCounter(counter -1)
    }
  }
  return (
    <>
    <h1>
      Counter value: {counter}
    </h1>
    <button onClick={addValue}>
      Add Value
    </button>
    <button onClick={remValue}>
      Reduce Value
    </button>
    </>
  )
}

export default App
