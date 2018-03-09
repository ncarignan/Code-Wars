let validateBattlefield = (field) => {
  let valid = true;
  validateBattlefield.boats = {4: 0, 3: 0, 2: 0, 1: 0};
  for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
      if(field[i][j]){
        valid = hasNoCorners(field, i, j);
        addToBoatX(field, i, j);
        addToBoatY(field, i, j);
      }
      if(!valid) {
        console.log(i,j);
        return valid;
      }

    }
  }
  console.log(validateBattlefield.boats);
  if(!(validateBattlefield.boats[4] === 1 && validateBattlefield.boats[3] === 3 && validateBattlefield.boats[2] === 6 && validateBattlefield.boats[1] === 30)) return false;
  return valid;
};
let hasNoCorners = (field, x, y) => {
  return !((field[x+1] && (field[x+1][y-1] || field[x+1][y+1])) || (field[x-1] && (field[x-1][y-1] || field[x-1][y+1])));
};

let addToBoatX = (field, x, y) => {
  let size = 0;
  for(let i = 0; i < 4; i++){
    if(!(field[x+i] && field[x+i][y])) break;
    size++;
  }
  validateBattlefield.boats[size]++;
};
let addToBoatY = (field, x, y) => {
  let size = 0;
  for(let i = 0; i < 4; i++){
    if(!field[x][y+i]) break;
    size++;
  }
  validateBattlefield.boats[size]++;
};




console.log(validateBattlefield(
  [[1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]));
