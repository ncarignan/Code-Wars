'use strict';

let isMerge = (s, part1, part2) => {
  if(!part1 && !part2 && !s)
    return true;
  if(!s)
    return false;
  let left = part1[0] === s[0] ? isMerge(s.substring(1), part1.substr(1), part2) : false;
  let right = part2[0] === s[0] ? isMerge(s.substring(1), part1, part2.substr(1)) : false;
  return left || right;
};


console.log(isMerge('codefellows', 'cdf', 'oeellows'));
