# Task & Objectives
Implement an aggregator function that enables you to chain _sum_ operations indefinitely with `add` method and return the
result once the method `result` is called on it.

For example:
```javascript
sumAggregator.add(20).add(2);
sumAggregator.add(3);

const actualResult = sumAggregator.result();
// should be 25
```
