/***
 * create function that will return only the even numbers
 * return the sum of even numbers
 */

function evenNumbersOnly(numbers){
    const evens = [];
    for(const number of numbers){
        if(number % 2 === 0){
            // console.log('Even:', number);
            evens.push(number);
        }
    }
    return evens;
}

const number = [2, 5, 6, 8, 9];
// const evens = evenNumbersOnly(number);
// console.log('even numbers', evens);

function sumOfEvenNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 0){
            sum += number;
        }
    }
    return sum;
}

const numbers = [4, 6, 9, 7, 2, 1];
const sum = sumOfEvenNumbers(numbers);
console.log('sum of the even number is:', sum);

