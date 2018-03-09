function validSolution(board){
  if(!Array.isArray(board)) return false;
  board.forEach(arr => {
    if(arr.reduce((x,y) => x + y) !== 45) return false;
  });

  for(let i = 0; i < 9; i ++){
    let sum = 0;
    board.forEach(arr => {
      sum+= arr[i];
      if(arr[i] === 0) return false;
    });
    if(sum !== 45) return false;
  }
  let add = 0;
  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
      add += board[i][j];
    }
  }
  if(add !== 45) return false;
  return true;
}
