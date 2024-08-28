import React, { useState } from 'react'

import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from,setFrom]=useState("usd")
  const [to,setTo]=useState("inr")
  const currencyInfo=useCurrencyInfo(from)
  const options=Object.keys(currencyInfo)
  const [convertedAmount,setConvertedAmount]=useState(0)
  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }
  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  return (
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
    }}
>
  <div className="w-full">
    <form onSubmit={(e)=>{e.preventDefault();
        convert();
    }}>
        <div className="w-full mt-1 mb-4">
          <InputBox label="From" onCurrencyChange={(currency)=>setFrom(currency)} amount={amount} onAmountChange={(amount)=>{setAmount(amount)}} selectCurrency={from} currencyOptions={options} />
        </div>
        <div className="w-full mb-1">
          <button type='button' onClick={swap} className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5">Swap</button>
        </div>
        <div className="w-full mt-1 mb-4">
          <InputBox label="To" onCurrencyChange={(currency)=>setTo(currency)} amount={convertedAmount} selectCurrency={to} currencyOptions={options} disableamount />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>

    </form>
  </div>
</div>
  )
}

export default App
