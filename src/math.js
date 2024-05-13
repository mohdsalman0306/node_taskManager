const calculateTip = (total, tipPercentage = .25) => total + (total * tipPercentage)

const fahrenheittoCelsius = (temp) => {
    return (temp - 32) / 1.8
}

const celsiusToFahrenheit = (temp) => {
    return (temp * 18) + 32
}

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a < 0 || b < 0) {
                return reject('Number should be non negative')
            }
            resolve(a + b)
        }, 2000)
    })
}

module.exports = {
    calculateTip,
    fahrenheittoCelsius,
    celsiusToFahrenheit,
    add
}