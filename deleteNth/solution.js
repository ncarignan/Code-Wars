'use strict';

function deleteNth(arr,n){
  let HM = new Map();
  let i = 0;
  while(i < arr.length){
    if(!HM[arr[i]]){
      HM[arr[i]] = 1;
    }else if(HM[arr[i]] === n){
      arr.splice(i, 1);
      i--;
    }else{
      HM[arr[i]]++;
    }
    i++;
  }
  return arr;
}
