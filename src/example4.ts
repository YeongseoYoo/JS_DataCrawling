interface User {
    readonly id: number;
    name: string;
    age?: number; // Optional Property
  }
  
  let user2: User = {
    id: 1,
    name: "John2",
  };
  user2.name = "Sam";
  // user2.id = 3; // readonly error
  
  let user: User = {
    id: 2,
    name: "John",
    age: 30,
  };
  
//id 값은 read, only만 가능. 수정 못 함
