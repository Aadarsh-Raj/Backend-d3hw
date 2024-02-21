const arrayUtills = {
    sum:(arr) => arr.reduce((acc, num)=> acc + num, 0),
    clearDuplicates: (arr)=> [...new Set(arr)],
    filterEven: (arr)=> arr.filter(num => num % 2 === 0),
    filterOdd: (arr)=> arr.filter(num=>num % 2 !== 0),
    findMax: (arr)=>Math.max(...arr),
    findMin: (arr)=> Math.min(...arr),
    reverseArray: (arr)=> arr.reverse(),
    sortAsc: (arr) => arr.slice().sort((a,b) => a - b),
    calculateAvg: (arr) => arr.reduce((acc, num)=> acc + num, 0) / arr.length,
};

module.exports = arrayUtills;