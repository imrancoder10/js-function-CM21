function tenTimes(number){
    const result = number *10;
    return result;
}

function cutHalf(number){
    const half = number / 2;
    return half;
}

// call the function
const output = tenTimes(5);
console.log('output', output);

console.log('--------------------------------');

const bigNumber = tenTimes(99);
console.log('Output', bigNumber);
