"use strict";
var user2 = {
    id: 1,
    name: "John2",
};
user2.name = "Sam";
// user2.id = 3; // readonly error
var user = {
    id: 2,
    name: "John",
    age: 30,
};
//id 값은 read, only만 가능. 수정 못 함
