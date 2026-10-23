import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import {InputBox} from './components/'

function App() {
  
  const [from, setFrom] = useState("usd")
  const [amount, setAmount] = useState(0)
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currenyInfo = useCurrencyInfo(from)
  //console.log('currencyInfo: ',currenyInfo)

  const options = Object.keys(currenyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currenyInfo[to])
  }

  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center bg-cover bg-no-repeat" style={{backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}}>        
        
        <div className="w-full max-w-7xl mx-auto px-4 ">

          <h1 className="text-4xl font-medium my-8 text-black">Currency Converter App</h1>

          <div className="w-full max-w-md mx-auto border border-gray-800 rounded-lg p-5 backdrop-blur-sm bg-white/30 text-black">
          
            <form onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}>

              <div className="w-full mb-1">                
                <InputBox 
                  label="From" 
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency) }
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)} />
              </div>

              <div className="relative w-full h-0.5">
                <button 
                  type="button" className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded bg-blue-900 text-white px-3 py-2 hover:bg-blue-900/80"
                  onClick={swap} 
                >
                  Swap
                </button>
              </div>

              <div className="w-full mb-4 mt-1">                
                <InputBox 
                  label="To" 
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>

              <button type="submit" className="w-full rounded bg-blue-800 text-white px-3 py-2 hover:bg-blue-900/90 cursor-pointer">Convert</button>

            </form>
          </div>
        </div>
      </div>
      
    </>
  )
}


export default App
