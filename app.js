function mergeSort (arr = [], l = 0, h = arr.length - 1) {
    // base case
    if (l >= h) {
        return arr;
    }

    // process
    if (l < h) {
        // split the array in to two halves
        let mid = Math.ceil((l + h) / 2);
        mergeSort(arr, l, mid);
        mergeSort(arr, mid + 1, h);
        console.log(arr);
    }

    // return start;
    
}
console.log(mergeSort([]));
console.log(mergeSort([73]));
// console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));