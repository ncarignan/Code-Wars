function abbrevName(name){
  name = name.split(' ');
  name = name.map(function(x){
    return x.toUpperCase().slice(0,1);
  });
  return name = name.join('.');
};
