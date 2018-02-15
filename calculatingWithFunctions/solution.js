function zero(operation=null) {
  if(operation){
    let str = '0' + operation;
    return eval(str);
  }
  return '0';
}
function one(operation=null) {
  if(operation){
    let str = '1' + operation;
    return eval(str);
  }
  return '1';
}
function two(operation=null) {
  if(operation){
    let str = '2' + operation;
    return eval(str);
  }
  return '2';
}
function three(operation=null) {
  if(operation){
    let str = '3' + operation;
    return eval(str);
  }
  return '3';
}
function four(operation=null) {
  if(operation){
    let str = '4' + operation;
    return eval(str);
  }
  return '4';
}
function five(operation=null) {
  if(operation){
    let str = '5' + operation;
    return eval(str);
  }
  return '5';
}
function six(operation=null) {
  if(operation){
    let str = '6' + operation;
    return eval(str);
  }
  return '6';
}
function seven(operation=null) {
  if(operation){
    let str = '7' + operation;
    return eval(str);
  }
  return '7';
}
function eight(operation=null) {
  if(operation){
    let str = '8' + operation;
    return eval(str);
  }
  return '8';
}
function nine(operation=null) {
  if(operation){
    let str = '9' + operation;
    return eval(str);
  }
  return '9';
}


function plus(num) {
  return '+' + num;
}
function minus(num) {
  return '-' + num;
}
function times(num) {
  return '*' + num;
}
function dividedBy(num) {
  return '/' + num;
}


console.log(seven(times(five())), 35);
console.log(four(plus(nine())), 13);
console.log(eight(minus(three())), 5);
console.log(six(dividedBy(two())), 3);
