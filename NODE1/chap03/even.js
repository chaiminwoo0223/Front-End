let a = [];
const MAX = 100, MIN = 1;

for (let i = 0; i < 100; ++i){
    a.push(Math.floor(Math.random() * (MAX - MIN + 1) + MIN));
}

for (let j = 0; j < 100; ++j){
    if(a[j] % 2 === 0) delete a[j];
}
console.log(a);