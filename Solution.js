
const {PriorityQueue} = require('@datastructures-js/priority-queue');

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeviation = function (nums) {

    const maxHeap = new MaxPriorityQueue({compare: (x, y) => (y - x)});
    let minimum = Math.pow(10, 9);

    for (let n of nums) {
        if (n % 2 !== 0) {
            n *= 2;
        }
        minimum = Math.min(minimum, n);
        maxHeap.enqueue(n);
    }

    let minDeviation = Math.pow(10, 9);

    while (!maxHeap.isEmpty()) {

        let n = maxHeap.dequeue();
        minDeviation = Math.min(minDeviation, n - minimum);
        if (n % 2 === 0) {
            n /= 2;
            minimum = Math.min(minimum, n);
            maxHeap.enqueue(n);
        } else {
            break;
        }
    }
    return minDeviation;
};
