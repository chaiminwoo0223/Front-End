// 모음 위치
let s =  "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be."
let lower = s.toLowerCase()

for (let i = 0; i < lower.length; ++i){
    word = lower[i];
    if (word == 'a' || word == 'e' || word == 'i' || word == 'o' || word == 'u'){
        console.log(i)
    }
}