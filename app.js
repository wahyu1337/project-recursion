function merge (arr, l, mid, h) {
    const leftArr = arr.slice(l, mid + 1);
    const rightArr = arr.slice(mid + 1, h + 1);

    // pointer for comparing two element
    let i = 0;
    let j = 0;
    let k = l;

    while (i < leftArr.length && j < rightArr.length) {
        // comparison logic
        if (leftArr[i] <= rightArr[j]) {
            // push the left side element if it's same
            arr[k] = leftArr[i];
            i++; // move forward
            k++; // move forward the k also
        } else {
            arr[k] = rightArr[j];
            j++; // move forward
            k++; // move forward
        }
    }

    // clean the element if there still any left (left sub)
    while (i < leftArr.length){
        arr[k] = leftArr[i];
        i++;
        k++;
    } 

    // clean the element if there still any left (right sub)
    while(j < rightArr.length) {
        arr[k] = rightArr[j];
        j++;
        k++;
    }
    return arr;
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

    return merge(arr, l, mid, h);
}
console.log(mergeSort([]));
console.log(mergeSort([73]));
console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));