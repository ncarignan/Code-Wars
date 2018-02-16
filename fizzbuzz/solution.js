'use strict';

const fizzbuzz = num =>{
  let result = '';
  if(num % 3 === 0)
    result += 'Fizz';
  if(num % 5 === 0)
    result += 'Buzz';
  return result;
};




console.log(fizzbuzz(9), 'Fizz');
console.log(fizzbuzz(10), 'Buzz');
console.log(fizzbuzz(15), 'FizzBuzz');
