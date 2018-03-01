'use strict';

function decompose(n) {
  return _decompose(n*n, [], n-1);
}

const _decompose = (squared, arr, next) => {
  if(squared === 0){
    return arr;
  }
  while(next > 0){
    if(squared >= next*next){
      let newArr = [next, ...arr];
      let solution = _decompose(squared - (next*next), newArr, next-1);
      if(solution)
        return solution;
    }
    next--;
  }
  return null;
};


console.log(decompose(11));
// console.log(decompose(20));
// console.log(decompose(25));
