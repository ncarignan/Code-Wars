function isValidIP(str) {
  let arr = str.split('.');
  let result = true;
  if(arr.includes('') || arr.length !== 4) result = false;
  arr.forEach(el => {
    if(el === '' || (el[0] === '0' && el[1]) || parseInt(el) > 255 || isNaN(parseInt(el)) || el.indexOf(' ') !== -1)
      result = false;
  });
  return result;
}

let a= '1.2.3';
let b='1.2.3.4.5';
let c ='123.456.78.90';
let d ='123.045.067.089';
let e = ' 1.2.3.4 ';
let f = ' 0.0.0.0 ';
console.log(isValidIP(a));
console.log(isValidIP(b));
console.log(isValidIP(c));
console.log(isValidIP(d));
console.log(isValidIP(e));
console.log(isValidIP(f));

console.log('0'.indexOf(' '));
