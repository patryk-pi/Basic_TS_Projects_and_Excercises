function add (n1: number, n2: number, showResult: boolean, phrase: string) {

    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result)
    } else {
        return resultPhrase
    }

}

const number1 =  5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);

enum Role {ADMIN, READ_ONLY, AUTHOR};

const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

const person = {
    name: 'Patryk',
    age: 30,
    hobbies: ['programming', 'music'],
    role: Role.ADMIN
}

type Combinable = number | string;

function combine(input1: Combinable, input2: Combinable ) {
    let result;

    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result
}