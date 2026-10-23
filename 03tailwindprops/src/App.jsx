import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  let myObj = {
    name: "abc",
    age: 20
  }

  let myArr = ["abc", "def", "ghi"]

  return (
    <>
      <h1 className="bg-green-400 text-black p-2 rounded">Tailwind test</h1>

      <div className="flex flex-wrap gap-2">
        {/* <Card name="Jhon" obj={myObj} arr={myArr} /> */}
        <Card name="Jhon" btnText="Read More" />
        <Card name="Den" />
        <Card name="Bob" />
      </div>
    </>
  );
}

export default App
