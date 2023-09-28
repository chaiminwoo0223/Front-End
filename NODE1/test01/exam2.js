// dice 함수 구현
function dice() {
    let a = Math.floor(Math.random() * 6 + 1)
    return a;
}

for (let i = 0; i < 10; ++i) 
    console.log(dice());