// types 함수 구현
function types(a) {
    let A = [];
    for(let i = 0; i < a.length; ++i){
        A.push(typeof(a[i]));
    }
    return A;
}

console.log(types([3, "hello", true]));
console.log(types(["world", []]));