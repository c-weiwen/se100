import { useEffect, useState } from 'react'
import "./CurrencyStyling.css"

const CurrencyDropdown = () => {
    const fakeResponseData = {
        supported_codes: [
            ["AED", "UAE Dirham"],
            ["CAD", "Canadian Dollar"],
            ["USD", "United States Dollar"],
            ["NZD", "New Zealand Dollar"],
            ["SGD", "Singapore Dollar"]
        ]
    }
    useEffect(() => {
        // fetch("https://v6.exchangerate-api.com/v6/80eefd8a8a81d7b44915e930/codes")
        // .then((response) => {
        //     return response.json()
        // })
        // .then((data) => {
        //     setCurrencyList(data.supported_codes)
        // })

        // simulate API request
        setCurrencyList(fakeResponseData.supported_codes)
    }, [])

    const [currencyList, setCurrencyList] = useState([])

    const renderDropdownOptions = () => {
        return currencyList.map((currencyArray) => {
            return (
                <option value={currencyArray[0]}>{currencyArray[1]}</option>
            )
        })
    }

    return (
        <div class="container">
            <p>I want to convert</p>
            <select name="currency" id="currencySelect">
                {renderDropdownOptions()}
            </select>
            <p>to</p>
            <select name="currency" id="currencySelect">
                {renderDropdownOptions()}
            </select>
        </div>
    )
}

export default CurrencyDropdown