import { useState } from 'react'
function App() {
  const [color, setColor] = useState("red");

  return (
    <div className='w-full h-screen' style={{backgroundColor: color}}>
      <h1 className='text-xl text-center decoration-6'>Background Changer</h1>
      <div className='flex justify-center'>
        <div className='rounded-3xl bg-slate-400 inline-block '>
          <button onClick = {() => setColor("green")} className='m-2 rounded-3xl p-3 bg-green-600'>GREEN</button>
          <button onClick = {() => setColor("red")} className='m-2 rounded-3xl p-3 bg-red-600'>RED</button>
          <button onClick = {() => setColor("blue")} className='m-2 rounded-3xl p-3 bg-blue-600'>BLUE</button>
          <button onClick = {() => setColor("teal")} className='m-2 rounded-3xl p-3 bg-teal-600'>TEAL</button>
          <button onClick = {() => setColor("pink")} className='m-2 rounded-3xl p-3 bg-pink-600'>PINK</button>
          <button onClick = {() => setColor("orange")} className='m-2 rounded-3xl p-3 bg-orange-600'>ORANGE</button>
          <button onClick = {() => setColor("gray")} className='m-2 rounded-3xl p-3 bg-gray-600'>GRAY</button>
        </div>
      </div>
    </div>
  )
}

export default App
