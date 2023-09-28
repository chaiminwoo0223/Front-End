let a1 = [1, 2, 3, 4, 5];
let a2 = [0 ,2, 4, 6, 8];
let isEven = (i) => i % 2 == 0;

console.log(a1.every(isEven));
console.log(a2.every(isEven));