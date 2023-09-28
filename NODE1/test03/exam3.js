function testCallback(f, a, b) {
    console.log(f(a, b));
}
  
testCallback((a, b) => a + b, 3, 4);
testCallback((a, b) => a * b, 3, 4);