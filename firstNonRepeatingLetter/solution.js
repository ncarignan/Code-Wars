function firstNonRepeatingLetter(s) {
  let map = {};
  for(let i = 0; i < s.length; i++){
    if(map[s[i].toLowerCase()]){
      map[s[i].toLowerCase()]['value']++;
    }else{
      map[s[i].toLowerCase()] = {};
      map[s[i].toLowerCase()]['value'] = 1;
      map[s[i].toLowerCase()]['letter'] = s[i];
    }
  }
  let result ='';
  for(let key in map){
    if(map[key]['value'] === 1)
      return map[key]['letter'];
  }
  return result;
}


console.log(firstNonRepeatingLetter('sTreSS'), 'T');
