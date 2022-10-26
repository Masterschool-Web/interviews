const { sum } = require('.');

describe('sum', function () {
    it('should sum all the numbers correctly', function () {
        expect(sum(2)).toBe(2);
        expect(sum(2, 3, 4)).toBe(9);
        expect(sum(10, 10, 10, 10)).toBe(40);
    });
});