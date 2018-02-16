'use strict';

const techAbbr = str => {
  if(str.length < 3)
    return null;
  let result = '';
  result += str[0];
  result += (str.length - 2);
  result += str[str.length - 1];
  return result;
};

console.log(techAbbr('nicholas'), 'n6s');
console.log(techAbbr('ok'), null);
