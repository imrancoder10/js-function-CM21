/***
 * objective : write a function to give me the sum of all numbers in an array.
 * step-1: declare a function
 * step-2: call check whether the function is called properly
 * step-3: set a parameter(s)
 * step-4: pas the parameter(s), check whether parameter is passed in a proper format.
 * step-5: dov the function tasks (step by step)
 */

function sumOfNumbers(numbers){
    // console.log(numbers);
    let sum = 0;
    for(const number of numbers){
        sum += number;
    }
    return sum;

}

const numbs = [2, 2, 6, 6, 5, 1];
const sum = sumOfNumbers(numbs);
console.log('sum of numbers is ', sum);