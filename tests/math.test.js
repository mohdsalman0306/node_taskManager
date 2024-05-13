const {calculateTip, fahrenheittoCelsius, celsiusToFahrenheit, add} = require('../src/math')

test('Should Calculate total with tip', () => {
    const total = calculateTip(10, .3)
    expect(total).toBe(13)
}) 

test('Should Calculate total with fixed tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12.5)
})

test('fahrenheittoCelsius', () => {
    const temp = fahrenheittoCelsius(32)
    expect(temp).toBe(0)
})

test('celsiusToFahrenheit', () => {
    const temp = celsiusToFahrenheit(0)
    expect(temp).toBe(32)
})

// test('Async test demo', (done) => {
//     setTimeout(() => {
//         expect(1).toBe(2)
//         done()
//     }, 2000)
// })

test('Should add two numbers', (done) => {
    add(2, 5).then((sum) => {
        expect(sum).toBe(7)
        done()
    })
})

test('Should add 2 numbers async/await', async () => {
    const sum = await add(10, 5)
    expect(sum).toBe(15)
})