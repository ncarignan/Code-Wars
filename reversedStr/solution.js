function solution(str){
let arr = str.split('');
let newArr = [];
for(i in arr){
newArr[i]=arr[arr.length-i-1]
}
return newArr.join('');
}
