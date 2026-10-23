import {useState} from 'react'
import './App.css'

function App() {

  // let count = 5;
  const [counter, setCounter] = useState(5)

  const addvalue = () => {
    // counter = counter + 1;
    // setCounter(counter)
    if(counter >= 20){ 
      alert("Maximum value reached!"); 
      return;
    }

    setCounter(counter + 1)
    // console.log("Add Value", counter)
  }

  return (
    <>
      <h1>Counter Project</h1>
      <h3>Value is: {counter}</h3>
      <button onClick={addvalue}>Add Value {counter}</button><br />
      <button onClick={() => counter <= 0 ? alert("Minimum value reached!") : setCounter(counter - 1)} >Remove Value</button>
      <br />
      <p>Test at multiple place: {counter}</p>
    </>
  )
}

export default App
