let persons = [
    { name: "전우치", age: 20 },
    { name: "임꺽정", age: 18 },
    { name: "홍길동", age: 16 }
];
  
persons.sort((p1, p2) => p1.age - p2.age);
console.log(persons);  