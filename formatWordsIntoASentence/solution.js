functfunction formatWords(words){
  if (!words) {
  return ''}

  for (i=0; i<words.length; i++) {
    console.log(i);
    if(words[i] === ''){
      words.splice(i,1);
      i--;
    }
  }

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
