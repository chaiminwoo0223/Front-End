function insertZero(a, index) {
    a.splice(index, 0, 0);
  }
  
  let a = [1, 2, 3];
  insertZero(a, 2);
  console.log(a);
  insertZero(a, 1);
  console.log(a);
  
  