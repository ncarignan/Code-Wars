function pickPeaks(arr){
  let result = {pos:[],peaks:[]};
  let leftMaxI = 0;
  for(let i = 0; i < arr.length; i++){
    if(leftMaxI && arr[i] < arr[leftMaxI]){
      result.pos.push(leftMaxI), result.peaks.push(arr[leftMaxI]);
      leftMaxI = 0;
    }
    if(arr[i] > arr[i-1])
      leftMaxI = i;
  }
  return result;
}

console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]));
