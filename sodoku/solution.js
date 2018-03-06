
var testPuzzle = [
  [5,3,0,0,7,0,0,0,0],
  [6,0,0,1,9,5,0,0,0],
  [0,9,8,0,0,0,0,6,0],
  [8,0,0,0,6,0,0,0,3],
  [4,0,0,8,0,3,0,0,1],
  [7,0,0,0,2,0,0,0,6],
  [0,6,0,0,0,0,2,8,0],
  [0,0,0,4,1,9,0,0,5],
  [0,0,0,0,8,0,0,7,9]];

const soduku = puzzle => {
  let zeroes = 0;
  for(let columnI = 0; columnI < 9; columnI++){
    for(let rowI = 0; rowI < 9; rowI++){
      if(puzzle[columnI][rowI] === 0){
        zeroes++;
        validate(puzzle, columnI, rowI);
        if(puzzle[columnI][rowI] !== 0)
          zeroes--;
      }
    }
  }
  if(zeroes) soduku(puzzle);
  return puzzle;
};

const validate = (puzzle, colPos, rowPos) => {
  let validator = {1: true, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 8: true, 9: true};
  puzzle[colPos].forEach(el => validator[el] = false);
  puzzle.forEach(arr => validator[arr[rowPos]] = false);
  let quadCol = Math.floor(colPos / 3) * 3;
  let quadRow = Math.floor(rowPos / 3) * 3;
  for(let j = quadCol; j < quadCol + 3; j++){
    for(let i = quadRow; i < quadRow + 3; i++){
      validator[puzzle[j][i]] = false;
    }
  }
  let count = 0;
  let newValue = 0;



  Object.entries(validator).forEach(arr => {
    if(arr[1]){
      count++;
      newValue = arr[0];
    }
  });
  if(count === 1)
    puzzle[colPos][rowPos] = parseInt(newValue);
  return puzzle;
};




soduku(testPuzzle);
module.exports = soduku;







// sudoku(puzzle);
// /* Should return
// [[5,3,4,6,7,8,9,1,2],
// [6,7,2,1,9,5,3,4,8],
// [1,9,8,3,4,2,5,6,7],
// [8,5,9,7,6,1,4,2,3],
// [4,2,6,8,5,3,7,9,1],
// [7,1,3,9,2,4,8,5,6],
// [9,6,1,5,3,7,2,8,4],
// [2,8,7,4,1,9,6,3,5],
// [3,4,5,2,8,6,1,7,9]]
