let a = [];
const MAX = 100, MIN = 1;

for (let i = 0; i < 100; ++i){
    a.push(Math.floor(Math.random() * (MAX - MIN + 1) + MIN));
}
a.sort(compareNumber);
console.log(a);

function compareNumber(i, j){
    return i - j;
}