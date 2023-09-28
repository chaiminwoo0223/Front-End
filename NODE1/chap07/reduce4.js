let persons = [
    { name: "홍길동", age: 16 },
    { name: "임꺽정", age: 18 },
    { name: "전우치", age: 20 }
];
  
let person = persons.reduce((p1, p2) => p2.age > p1.age ? p1 : p2);
console.log(person.name);