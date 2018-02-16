var twoSum = function(nums, target) {
  let result = [];
  for(let i = 0; i < nums.length; i++){
    for(let j = (i + 1); j < nums.length; j++){
      if(nums[i] + nums[j] === target){
        result.push(i);
        result.push(j);
        // break;
      }
    }
  }
  return result;
};


let nums = [2, 7, 11, 15];
let target = 9;

console.log(twoSum(nums, target), [2, 7]);
