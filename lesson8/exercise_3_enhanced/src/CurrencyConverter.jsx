import { useState } from 'react'

const CurrencyConverter = (props) => {
    const { fromCurrency, toCurrency } = props
    const [fromAmount, setFromAmount] = useState(1)
    const [toAmount, setToAmount] = useState(2)

    return (
        <div class="container">
            <input 
                value={fromAmount}
                placeholder="Enter amount"
                className="converter-input"
                onChange={(event) => {
                    setFromAmount(event.target.value)
                    // hardcode conversion logic to be double of fromAmount
                    setToAmount(2 * event.target.value)
                }}
            />
            <p>{fromCurrency}</p>
            <p>=</p>
            <p className="converter-result">{toAmount}</p>
            <p>{toCurrency}</p>
        </div>
    )
}

export default CurrencyConverter