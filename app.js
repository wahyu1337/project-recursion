function mergeSort (arr = [], l = arr[0], h = arr[arr.length - 1]) {
    // base case
    if (arr.length <= 1) return sorted = arr;

    console.log(`L : ${l}`);
    console.log(`H : ${h}`);
}

// console.log(mergeSort([]));
// console.log(mergeSort([73]));
// console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));