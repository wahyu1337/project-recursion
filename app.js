function merge (start, mid, end) {
    const merged = [];
}

function mergeSort (arr = [], l = 0, h = arr.length - 1) {
    // base case
    if (l >= h) {
        return arr;
    }

    // split the array in to two halves
    let mid = Math.floor((l + h) / 2);

    // process
    mergeSort(arr, l, mid);
    mergeSort(arr, mid + 1, h);
    console.log(arr);

    // return merge(l, mid, h);
}
console.log(mergeSort([]));
console.log(mergeSort([73]));
// console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));