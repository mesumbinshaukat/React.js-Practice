import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(5); // This useState Hook is used to update value asynchronously everywhere where the variable is called.

  // let counter = 5;

  const addVal = () => {
    if(counter < 20){
      setCounter(counter + 1);
    }else{
      document.querySelector('#add').setAttribute('disabled', 'disabled')
    }

    if(counter >= 0){
      document.querySelector('#decrease').removeAttribute('disabled')
    }
  }

  const decreaseVal = () => {
    if(counter > 0){
      setCounter(counter - 1);
    }else{
      document.querySelector('#decrease').setAttribute('disabled', 'disabled')
      document.querySelector('#add').removeAttribute('disabled')
    }

    if(counter < 21){
      document.querySelector('#add').removeAttribute('disabled')
    }
    
  }


  return (
    <>
      <h1>Basic Counter To Practice Hooks</h1>
      <h2>Counter Value: {counter}</h2>

      <button id='add' onClick={addVal}>Add Value {counter}</button>
      <br/>
      <button id='decrease' onClick={decreaseVal}>Decrease Value {counter}</button>
      <p>Footer, {counter}</p>

    </>
  )
}

export default App
