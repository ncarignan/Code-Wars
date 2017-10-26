function insertDash(num) {
   let numStr = num.toString();
   let numArr = numStr.split("");
   for(let i = 0; i <numArr.length; i++){
   if(parseInt(numArr[i]) % 2 === 1 & parseInt(numArr[i+1]) % 2 ===1){
  numArr.splice(i+1, 0, "-")
}
}
return numComplete = numArr.join("");

}
