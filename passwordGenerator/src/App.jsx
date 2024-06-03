import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(6);
  const [num, setNum] = useState(false);
  const[char, charAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (setNum){
      str += "0123456789"
    }
    if (charAllowed){
      str += "!@#$%^&*"
    }
    for(let i = 1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass);

  }, [length, num, char, setPassword]);

  useEffect(() => {
    passwordGenerator()
  }, [length, setNum, charAllowed, passwordGenerator])


  //ref hook
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef .current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-m rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text" 
        value = {password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref = {passwordRef}
        />
        <button className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0' onClick = {copyPasswordToClipboard}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max = {24} value = {length} className='cursor-pointer' onChange = {(e) => {setLength(e.target.value)}} />
          <label htmlFor="">Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked = {setNum}
          id = "numberInput"
          onChange = {() => {
            setNum((prev) => !prev);
          }}
          />
          <label htmlFor="">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked = {charAllowed}
          id = "characterInput"
          onChange = {() => {
            charAllowed((prev) => !prev)}} />
            <label htmlFor="">Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
