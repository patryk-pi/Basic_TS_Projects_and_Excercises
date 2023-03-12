function add(n1: number, n2: number) {
    return n1 + n2
}

function printResult(num: number) {
    console.log(`Result ${num}`)
}

// FUNKCJA PRZYJMUJE 2 PARAMERTY TYPU NUMBER I ZWRACA NUMBER
let combinedValues: (a: number, b: number) => number

combinedValues = add;

printResult(combinedValues(5,8));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result)
}

addAndHandle(10, 20, (result)=> {
    console.log(result)
})