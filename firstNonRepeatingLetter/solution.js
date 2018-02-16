function firstNonRepeatingLetter(s) {
  let map = {};
  for(let i = 0; i < s.length; i++){
    if(map[s[i]]){
      map[s[i]]++;
    }else{
      map[s[i]] = 1;
    }
  }
  let result ='';
  for(let key in map){
    if(map[key] === 1)
      return key;
  }

  return result;
}


console.log(firstNonRepeatingLetter('abcabd'));
