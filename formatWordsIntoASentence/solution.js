function formatWords(words){
  if (words.length>1){
  let arr = [words.slice(0,-1).join(', '), words[words.length - 1]];
  let str = arr.join(' and ');
  return str;
  }
  else{
  let str = words.join('');
  return str;
  }


}
