import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [curr, setCurrency] = useState({})
    useEffect(() => {
        const api = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        fetch(api)
        .then((res) => res.json())
        .then((res) => setCurrency(res[currency]))
        console.log(curr);
    }, [currency])
    return curr
}

export default useCurrencyInfo