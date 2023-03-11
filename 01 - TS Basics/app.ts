function add(n1: number, n2: number) {
    return n1 + n2
}

function printResult(num: number) {
    console.log(`Result ${num}`)
}

// FUNKCJA PRZYJMUJE 2 PARAMERTY TYPU NUMBER I ZWRACA NUMBER
let combinedValues: (a: number, b: number) => number

combinedValues = add;

printResult(combinedValues(5,8))