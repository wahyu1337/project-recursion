
function fibonacci (n, arr = [0, 1, 1]) {
    // base case if 0 & 1
   if (arr.length >= n) return arr;
    
    // calculate next number by sum the last two elements.
    const nextNumber = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(nextNumber);

    // recursively
    return fibonacci(n, arr);
}

function fibLoop (n, arr = [0, 1]) {
    // base
    if (n === 0) return [0];
    if (n === 1) return arr;
    
    // stored value
    let a = 1;
    let b = 1;

    for (let i = n; i < arr.length; i++) {
        let c = a + b;
        arr.push(c);
        // change current value a into b and b into c
        a = b;
        b = c;
    } return b
}

console.log("Printed Recursively");
console.log(fibonacci(6));
console.log(fibonacci(8));

console.log("Printed looply");
console.log(fibonacci(6));
console.log(fibonacci(8));