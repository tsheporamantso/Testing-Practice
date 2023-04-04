const capitalizeString = require('./task4');

describe('Is first letter capitalized', () => {
    test('a and b adding' , () => {
        expect(capitalizeString("tshepo")).toEqual("Tshepo")
    })
})