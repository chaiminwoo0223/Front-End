// sum(a) 함수 구현
function sum(a) {
    T = 0;
    for (let i = 0; i < a.length; ++i) {
        for (let j = 0; j < a[i].length; ++j){
            T += a[i][j];
        }
    }
    return T;
}
let a1 = [[1, 2], [3, 4, 5]];
let a2 = [[1], [2, 3, 4], [5, 6]];
console.log(sum(a1));
console.log(sum(a2));