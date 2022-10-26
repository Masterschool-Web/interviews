function sumAggregator() {
    let _sum = 0;

    function add(value) {
        _sum += value;
        return this;
    }

    function result() {
        const res = _sum;
        _sum = 0;
        return res;
    }

    return {
        add,
        result
    }
}

module.exports = { sumAggregator: sumAggregator() };
