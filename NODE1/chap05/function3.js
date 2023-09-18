// 함수 호출 5
function add(a, b) {
    return a + b;
}

console.log(add(3, 4));
console.log(add(3));

// 함수 호출 6
function add(a, b){
    if (b == undefined) b = 0;
    return a + b;
}

console.log(add(3, 4));
console.log(add(3));

// 함수 호출 6
function add(a, b){
    if (!b) b = 0;
    return a + b;
}

console.log(add(3, 4));
console.log(add(3));

// 함수 호출 7
function add(a, b){
    return a + (b || 0)
}

console.log(add(3, 4));
console.log(add(3));