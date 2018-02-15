function toCamelCase(str){
  let i = 0;
  while(i < str.length){
    if(str[i] === '_' || str[i] === '-')
      str = str.substr(0, i) + str[i+1].toUpperCase() + str.substr(i+2);
    i++;
  }
  return str;
}

toCamelCase('A_camel_is_cased');
