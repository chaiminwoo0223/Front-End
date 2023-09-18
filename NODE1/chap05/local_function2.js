// 지역함수 2
function outterFunc() {
    function print(msg) {
      console.log(msg);
    }
    print("hello");
}
  
outterFunc();