// 지역함수 1
function outterFunc() {
    print("hello");
  
    function print(msg) {
      console.log(msg);
    }
}
  
outterFunc();