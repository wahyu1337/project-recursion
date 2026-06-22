function mergeSort (arr, l = 0, h = arr.length - 1) {
    // base case
    if (l >= h) {
        return arr;
    }

    // split into two var, (left(l/low) & right(h/high))
    let mid = Math.floor((l + h) / 2);

    // recursive progress
    mergeSort(arr, l, mid)
    mergeSort(arr, mid + 1, h)

    return merge(arr, l, mid, h);
}

function merge(arr, l, mid, h){
    // get the left element and right elements
    const leftSub = arr.slice(l, mid + 1);
    const rightSub = arr.slice(mid + 1, h + 1);

    // pointer
    let i = 0;
    let j = 0;
    let k = l;

    // case
    while (i < leftSub.length && j < rightSub.length) {
        // conditional logic
        if (leftSub[i] <= rightSub[j]) {
            // move the lowest number into arr[k] 
            arr[k] = leftSub[i];
            // move forward each step after pushing the element
            i++;
            k++;
        } else {
            // move the lowest number into arr[k]
            arr[k] = rightSub[j];
            // move forward each step after pushing the element
            j++;
            k++;
        }
    }


    // case if there any element left (i) or (j)
    while (i < leftSub.length) {
        // move it into arr[k]
        arr[k] = leftSub[i];
        i++;
        k++;
    }

    while (j < rightSub.length) {
        // move it into arr[k]
        arr[k] = rightSub[j];
        j++;
        k++;
    }
    return arr;
}

console.log(mergeSort([]))
console.log(mergeSort([73]))
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))