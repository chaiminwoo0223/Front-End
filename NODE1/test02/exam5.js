function rotate(a) {
    a.unshift(a.pop());
  }
  
  let a = [1, 2, 3, 4];
  rotate(a);
  console.log(a);
  
  rotate(a);
  console.log(a);
  
  
  