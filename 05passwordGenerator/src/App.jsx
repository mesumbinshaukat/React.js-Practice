import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  
  const [length, setLength] = useState(8)
  const [numberPermit, setNumberPermit] = useState(false)
  const [specialCharPermit, setSpecialCharPermit] = useState(false)
  const [password, setPassword] = useState('')

  const passRef = useRef(null)

  const passwordGenerator = useCallback(()=>{

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberPermit) str += "0123456789"
    if(specialCharPermit) str += "!@#$%^&*()"

    for(let i = 1; i <= length; i++){
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }

    setPassword(pass)

  }, [length, numberPermit, specialCharPermit, setPassword])

  const copyToClipboard = useCallback(()=> {
      passRef.current?.select()
      window.navigator.clipboard.writeText(password)
    }, [password])


  useEffect(()=> {
    passwordGenerator()
  }, [length, numberPermit, specialCharPermit, setPassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-1 my-8 py-3 text-black bg-zinc-700'>
        <h1 className='text-white text-center my-3 text-2xl'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" placeholder='Password' value={password} className='outline-none w-full py-1 px-3' readOnly ref={passRef}/>
          <button onClick={copyToClipboard} className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium text-sm p-2">Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='pointer-cursor' onChange={(e) => setLength(e.target.value)}/>
            <label className='text-orange-300 text-sm font-medium'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberPermit} onChange={() => setNumberPermit((prev) => !prev)}/>
            <label className='text-orange-300 text-sm font-medium'>Number</label>
            
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={specialCharPermit} onChange={() => setSpecialCharPermit((prev) => !prev)}/>
            <label className='text-orange-300 text-sm font-medium'>Special Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
