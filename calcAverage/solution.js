function find_average(array) {
  let y = array.reduce(function(y, x) {
    return y + x;
});
  return y/array.length;
}
