const acronymGenerator = str => {
  let excludes = ['a', 'for', 'an', 'and', 'of', 'or', 'the', 'to', 'with'];
  let result = '';
  let strArr = str.split(' ');
  let filtered = strArr.filter(str => !excludes.includes(str.toLowerCase()));
  filtered.forEach(str => result += str[0].toUpperCase());
  return result;
};

console.log(acronymGenerator('My name is Nicholas'), 'MNIN');
//
