function isNice(arr){
 if(arr.length === 0){return false};
 let count = 0;
  for(let i = 0; i<arr.length; i++){
    for(let j = 0; j<arr.length; j++){
      if(Math.abs(arr[i] - arr[j]) === 1){count++; break}
    }
  }

return count === arr.length
}
