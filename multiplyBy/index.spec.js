const { multiplyBy } = require('.');

describe('multiplyBy', () => {
    it('should multiply a number by a number', () => {
        const multiplyBy5 = multiplyBy(5);

        const expectedResult = multiplyBy5(4);
        expect(expectedResult).toBe(20);
    });

    it('should multiply a number by a number', () => {
        const multiplyBy11 = multiplyBy(11);

        const expectedResult = multiplyBy11(2);
        expect(expectedResult).toBe(22);
    });
});