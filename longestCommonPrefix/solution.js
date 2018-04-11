var longestCommonPrefix = function(strs) {
  let dict = {};
  traverseString(strs[0], 0, dict);
  console.log(printObj(dict));
  strs.forEach(str => {
    console.log('dict ', str[0] , dict[str[0]])
    if(!dict[str[0]]) return '';
    checkPref(strs[1], 0, dict)
  });

  return printObj(dict);
};

let traverseString = (str, i, dict) => {
  if(!str[i]) return;
  dict[str[i]] = {};
  traverseString(str, i+1, dict[str[i]]);
};

let checkPref = (str, i, dict) => {
  console.log(str[i])
  if(!str[i]) return;
  if(!dict[str[i]][str[i+1]]){
    dict[Object.keys(dict)[0]] = null;
    dict = null;
    return
  }
  checkPref(str, i+1, dict[str[i]]);
};

let printObj = obj => {
  if(obj === null || !Object.keys(obj)[0]) return '';
  // console.log(obj[Object.keys(obj)[0]]);
  // console.log(`${Object.keys(obj)[0]}`);
  return `${Object.keys(obj)[0]}${printObj(obj[Object.keys(obj)[0]])}`
  // console.log(str);

}
