import React, { useId } from 'react'

const InputBox = ({
    label, 
    amount, 
    onAmountChange, 
    currencyOptions = [], 
    selectCurrency = "usd", 
    onCurrencyChange,
    amountDisable = false,
    currencyDisable = false,
    className = ""
}) => {

    const amountId = useId()
    const currencyId = useId()
     
    return(
        <div className={`flex bg-white rounded p-3 ${className}`}>

            <div className="w-1/2 flex flex-wrap justify-start">
                <label htmlFor={amountId} className="inline-block text-black mb-2">
                    {label}
                </label>
                <input
                    id={amountId}
                    type="number"
                    className='w-full outline-none bg-transparent py-1.5' 
                    placeholder="Amount" 
                    value={amount} 
                    disabled={amountDisable}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <label htmlFor={currencyId} className="w-full text-black">Currency Type</label>
                <select
                    id={currencyId}
                    className='rounded-lg bg-gray-100 px-1 py-1 cursor-pointer outline-none' 
                    value={selectCurrency} 
                    disabled={currencyDisable}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default InputBox