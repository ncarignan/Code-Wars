function cubeOdd(arr) {

if (arr.some(isNaN)){return undefined};
arr = arr.filter(el => el % 2);
if(arr.length ===0){return 0};
arr = arr.map(el => el * el * el).reduce((sum, el) => sum +el);
if(arr== [] & arr !== 0){return undefined};
return arr



}
