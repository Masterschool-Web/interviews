const { sumAggregator } = require('.');

describe('sum aggregator', function () {
    it('should perform sum aggregation as expect', function () {
        const actualResult = sumAggregator.add(5).add(10).add(5).result();

        expect(actualResult).toBe(20);
    });

    it('should perform sum aggregation as expect', function () {
        sumAggregator.add(20).add(2);
        sumAggregator.add(3);

        const actualResult = sumAggregator.result();

        expect(actualResult).toBe(25);
    });
});
