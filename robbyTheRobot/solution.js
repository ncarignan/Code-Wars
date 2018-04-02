'use strict';

// getCommands('T.S.', 5); // -> ['f'], because he just has to move forward
// getCommands('S.......T', 10); // -> ['r', 'f', 'f', 'r', 'f', 'f']
// getCommands('S.......T', 5); // -> [], because he needs at least 6 units of power
// getCommands('S#.##...T', 20); // => [], because the target can not be reached (with an arbitrary amount of power)


function getCommands(field, power) {
  let side = Math.sqrt(field.length)
  return shortestPath(field, side, power);
}

let shortestPath = (field, power, current) => {
  let side = Math.sqrt(field.length);

  if(field[current] === 'T') return ({route, path})
  return Math.min(shortestPath())

}

getCommands('T.S.', 5); // -> ['f'], because he just has to move forward
getCommands('S.......T', 10); // -> ['r', 'f', 'f', 'r', 'f', 'f']
getCommands('S.......T', 5); // -> [], because he needs at least 6 units of power
getCommands('S#.##...T', 20); // => [], because the target can not be reached (with an arbitrary amount of power)
