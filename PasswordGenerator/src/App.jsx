import { useState, useCallback, useEffect } from 'react';

function App() {
  const [btnText, setBtnText] = useState('Copy');
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState('');

  const handleClick = () => setBtnText('Copied')
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numAllow) str += '0123456789';
    if (charAllow) str += '!@#$%^&*~';
    
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    
    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllow, charAllow, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto text-center shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text"
            value={password}
            placeholder='password'
            readOnly
            className='outline-none w-full py-1 px-3' 
          />
          <button 
            className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'
            onClick={() => {handleClick}}
          >
            {btnText}
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range"
              min={6}
              max={24}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(Number(e.target.value))} 
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              checked={numAllow}
              onChange={() => setNumAllow(prev => !prev)}
            />
            <label>Numbers: {numAllow ? 'On' : 'Off'}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              checked={charAllow}
              onChange={() => setCharAllow(prev => !prev)}
            />
            <label>Characters: {charAllow ? 'On' : 'Off'}</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
