'use strict';

function whoIsNext(names, r){
  r = (r)/names.length;
  // console.log('starting r/arraylength', r);

  while(r > 1){
    let nth = 0;
    while(Math.pow(2, (nth+1)) <= r){
      nth++;
    }
    // console.log(r, 2**nth)
    r = r - Math.pow(2, nth);
  }
  // console.log(r)
  r = Math.round(r*names.length);
  console.log('ending r', r);
  return(names[r-1]);
}

// console.log(whoIsNext(['A', 'B', 'C', 'D', 'E'], 7), 'A');
console.log(whoIsNext(['A', 'B', 'C', 'D', 'E'], 1), 'A');
console.log(whoIsNext(['A', 'B', 'C', 'D', 'E'], 2));
console.log(whoIsNext(['A', 'B', 'C', 'D', 'E'], 3));
console.log(whoIsNext(['A', 'B', 'C', 'D', 'E'], 4));
console.log(whoIsNext(['A', 'B', 'C', 'D', 'E'], 5));
console.log(whoIsNext(['A', 'B', 'C', 'D', 'E'], 6));
console.log(whoIsNext(['A', 'B', 'C', 'D', 'E'], 7));
console.log(whoIsNext(['A', 'B', 'C', 'D', 'E'], 8));
console.log(whoIsNext(['A', 'B', 'C', 'D', 'E'], 9));
console.log(whoIsNext(['A', 'B', 'C', 'D', 'E'], 10));
console.log(whoIsNext(['A', 'B', 'C', 'D', 'E'], 11));
console.log(whoIsNext(['A', 'B', 'C', 'D', 'E'], 12));
console.log(whoIsNext(['A', 'B', 'C', 'D', 'E'], 13));
console.log(whoIsNext(['A', 'B', 'C', 'D', 'E'], 14));
console.log(whoIsNext(['A', 'B', 'C', 'D', 'E'], 15));
console.log(whoIsNext(['A', 'B', 'C', 'D', 'E'], 16));
let x = 'ABCDE';
let y = 'ABCDEAABBCCDDEEAAAABBBBBCCCCCDDDDDEEEEE';
