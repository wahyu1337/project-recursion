const arr = [3, 2, 1, 13, 8, 5, 0, 1];

const test = 0;
const test2 = arr.length - 1;

const mid2 =  Math.ceil((test + test2) / 2);

let mid = Math.ceil(arr.length / 2);

const low = arr.slice(0, mid);
const high = arr.slice(mid);

console.log(mid);
console.log(low);
console.log(high);
console.log(`test : ${test}`);
console.log(`test2 : ${test2}`);
console.log(`mid: ${mid}`);
console.log(`mid2: ${mid2}`);