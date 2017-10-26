function getCount(str) {
  let vowelsCount = 0;
  const vowelArr= 'aeiou'.split("");
  let strArr = str.split("");
  for( i in strArr){
    if(vowelArr.includes(strArr[i])){vowelsCount++};
  }
  return vowelsCount;
}
