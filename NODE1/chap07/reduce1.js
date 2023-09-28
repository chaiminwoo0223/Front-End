// 합계 계산1
function callback(result, i) { 
    console.log(result + ", " + i); 
    return result + i; 
}
  
let a1 = [10, 20, 30, 40, 50];
let sum = a1.reduce(callback, 0);
console.log(sum);  