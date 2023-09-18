// 경로명
let s = ["c:/temp/guide.hwp", "c:/pj/frontend/chap05/substring1.js", "homework.docx"]

for (let i = 0; i < s.length; ++i){
    A = s[i];
    console.log(A.slice(A.lastIndexOf("."))); // 파일 확장자 출력하기
} console.log()

for (let j = 0; j < s.length; ++j){
    B = s[j];
    console.log(B.slice(B.lastIndexOf("/") + 1)); // 파일명 출력하기
} console.log()

for (let k = 0; k < s.length; ++k){
    C = s[k].slice(s[k].lastIndexOf("/") + 1);
    console.log(C.slice(0, C.lastIndexOf("."))); // 파일 이름 부분만 출력하기
}