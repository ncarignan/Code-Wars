'use strict';
// fancy solution
const evenOdd = arr => {
  let orOdd = arr[0] + arr[1] + arr[2]; //go over whole array and find if odd or even instead
  if(orOdd > 1){ 
    for(let num of arr){
      if(!(num % 2))
        return num;
    }
  }else{
    for(let num of arr){
      if(num % 2)
        return num;
    }
  }
};

console.log(evenOdd([1, 3, 4, 5]), 4);
console.log(evenOdd([8, 2, 4, 5]), 5);
