import { use, useCallback, useEffect, useRef, useState } from "react"

function App() {

  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "1234567890"
    if(charAllowed) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)

      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed])


  const copyToclipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 5);

     window.navigator.clipboard.writeText(password)

  }, [password])


  useEffect( () => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])


  return (
    <>
      <div className="w-full">
        <h1 className='text-2xl text-center text-white'>Password Generator</h1>

        <div className="max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-4 bg-gray-800 text-orange-500">

          <div className="flex rounded-md mb-4 shadow overflow-hidden ">
            <input 
              type="text" className="outline-none w-full px-3 py-2 bg-white" 
              value={password} id="passwordInput" placeholder="Password" 
              ref={passwordRef} 
              readOnly 
            />
            <button 
              className="outline-none bg-blue-900 text-white px-3 py-2 shrink-0 hover:bg-blue-900/70 cursor-pointer" 
              onClick={copyToclipboard}>
              Copy
            </button>
          </div>

          <div className="flex gap-3 text-md">

            <div className="flex items-center gap-1">
              <input type="range" className="cursor-pointer"
              min={6}
              max={50}
              value={length}
              onChange={(e) => {setLength(e.target.value)} } />
              <label htmlFor="length">Length: {length}</label>
            </div>

            <div className="flex items-center gap-1">
              <input type="checkbox" defaultChecked={numberAllowed}
              id="numberInput" onChange={() => { setNumberAllowed((prev) => !prev); }} />
              <label htmlFor="number">Numbers</label>
            </div>

            <div className="flex items-center gap-1">
              <input type="checkbox" defaultChecked={charAllowed}
              id="charInput" onChange={() => { setCharAllowed((prev) => !prev) }} />
              <label htmlFor="number">Characters</label>
            </div>

          </div>

        </div>
      </div>
    </>
    
  )
}

export default App
  