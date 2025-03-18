// Simple currency conversion function
function convertCurrency() {
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const resultElement = document.getElementById('conversion-result');

    // Example static exchange rates (you could replace this with dynamic rates from an API)
    const exchangeRates = {
        USD: { KHR: 4100, VND: 23000, EUR: 0.92 },
        KHR: { USD: 0.00024, VND: 5.61, EUR: 0.00022 },
        VND: { USD: 0.000042, KHR: 0.18, EUR: 0.00004 },
        EUR: { USD: 1.09, KHR: 4600, VND: 25000 }
    };

    // Convert the amount
    if (exchangeRates[fromCurrency] && exchangeRates[fromCurrency][toCurrency]) {
        const rate = exchangeRates[fromCurrency][toCurrency];
        const convertedAmount = (amount * rate).toFixed(2);
        resultElement.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } else {
        resultElement.innerHTML = 'Unable to convert. Please try again.';
    }
}
