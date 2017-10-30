function capitalize(s){

  let first = s.split('');
  for(let i = 0; i<first.length; i+=2){
    first[i]= first[i].toUpperCase();
    console.log(first[i]);
  }
  let second = s.split('');
  for(let i = 1; i<second.length; i+=2){
    second[i]= second[i].toUpperCase();
    console.log(second[i]);
  }

  return [first.join(''),second.join('')];
}
