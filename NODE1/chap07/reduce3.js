// 최댓값 계산
let a1 = [7, 3, 8, 6, 9, 5, 1, 4];
let max = a1.reduce((result, i) => i > result ? i : result, 0);

console.log(max);