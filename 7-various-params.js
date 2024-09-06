/***
 * for a given string tell me whether it has even number of characters or not
 */

function evenSizedString(str){
    const size = str.length;
    console.log(str, size);
    if(size % 2 === 0){
        console.log('Even size');
        return true;
    }
    else{
        console.log('Odd size');
        return false;
    }
   

}

// evenSizedString('Dhaka With us.');
// evenSizedString('Bangladesh ');

// ==================================================================

function doubleOrTriple(number, doDouble){//boolean parameter
    if(doDouble === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }

}

// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));

// ==================================================================

function numberOfElements(numbers){ // array parameter
    const len = numbers.length;
    return len;
}

// numberOfElements([45, 54, 96, 24, 56, 22]);


// =========================================================

function getAge(person){
    const age = person.age;
    return age;
}