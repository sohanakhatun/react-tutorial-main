import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => setData(response[currency]));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;