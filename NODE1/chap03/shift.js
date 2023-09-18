let a = [1, 3, 5, 7];
let value;

while(a.length > 0){
    value = a.shift();
    console.log("pop value = %d, array = [%s]", value, a.toString());
}