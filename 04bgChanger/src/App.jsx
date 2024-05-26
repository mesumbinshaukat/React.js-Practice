import { useState } from 'react'


function App() {
  const [color, changeColor] = useState("black")
 

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-slate-300 px-3 py-2 rounded-3xl'>
          <button onClick={() => changeColor("green")} className='text-black outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"green"}}>Green</button>
          <button onClick={() => changeColor("yellow")} className='text-black outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={() => changeColor("purple")} className='text-black outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"purple"}}>Purple</button>
          <button onClick={() => changeColor("olive")} className='text-black outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"olive"}}>Olive</button>
          <button onClick={() => changeColor("grey")} className='text-black outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"grey"}}>Grey</button>
          <button onClick={() => changeColor("blue")} className='text-black outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={() => changeColor("brown")} className='text-black outline-none px-4 py-1 rounded-full shadow-lg' style={{backgroundColor:"brown"}}>Brown</button>
        </div>
      </div>
    </div>
  )
}

export default App
