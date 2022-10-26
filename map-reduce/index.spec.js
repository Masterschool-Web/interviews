require('.');

describe('mapper', function () {
    it('should work as expected ', function () {
        const mappedArr = [1, 3].mapper(function (x) {
            return x * 2;
        });
        expect(mappedArr).toEqual([2, 6]);
    });

    it('should work as expected ', function () {
        const mappedArr = [1, 3, 5].mapper(function (x) {
            return x * 2;
        });
        expect(mappedArr).toEqual([2, 6, 10]);
    });
});

describe('reducer', function () {
    it('should work as expected ', function () {
        const reducedArr = [1, 3].reducer(function (acc, x) {
            return acc + x;
        }, 0);
        expect(reducedArr).toEqual(4);
    });

    it('should work as expected ', function () {
        const reducedArr = [1, 3, 5].reducer(function (acc, x) {
            return acc + x;
        }, 0);
        expect(reducedArr).toEqual(9);
    });
});

