function countSpace(s) {
    return s.match(/\s/g).length;
  }
  
  console.log(countSpace("aa bb ccc"));
  console.log(countSpace("a b cc ddd  e"));