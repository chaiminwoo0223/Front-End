function createArray(count) { // 이 함수를 구현하라
    let a = [];
    for (let i = 0; i < count; ++i){
        a.push(Math.floor(Math.random() * 5 + 1));
    }
    return a;
} 

console.log(createArray(2));
console.log(createArray(3));
console.log(createArray(4));
console.log(createArray(5));