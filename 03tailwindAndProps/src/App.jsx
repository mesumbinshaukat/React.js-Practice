import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import AnotherCard from './components/AnotherCard'

function App() {
  
  const laptopObj = {
    name: 'Macbook',
    description: 'Best macbook laptop available in stores. Get one for yourself now!!!',
    btnText: 'Visit Store'
  }

  return (
    <>
     <h1 className="bg-yellow-400 text-black p-4 rounded-xl mb-5">Tailwind + Props</h1>
     
     <Card details={laptopObj} /> {/*This is the first approach*/}
     {/* ___________________________________ */}
     <AnotherCard productName="Macbook Pro M1" productDescription="Latest Macbook Pro M1. Get one for yourself now!!!" btnText="Visit Store"/> {/*This is the second approach*/}
     <AnotherCard productName="Acer Nitro 5" productDescription="Latest Acer Nitro 5. Get one for yourself now!!!" btnText="Website"/> 
     <AnotherCard productName="Lenovo Legion 5" productDescription="Buy the latest Lenovo Legion 5. Get one for yourself now!!!"/> 
    </>
  )
}

export default App
