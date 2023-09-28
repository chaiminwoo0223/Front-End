// removes 함수 구현
function removes(a) {
    let A = []
    for(let i = 0; i < a.length; ++i){
        if (a[i] % 3 == 0) {
            continue;
        }
        else {
            A.push(a[i]);
        }
    }
    return A;
}

console.log(removes([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(removes([11, 12, 13, 14, 15]));