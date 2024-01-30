"use strict";
var student1 = {
    name: "YS",
    greeting: function () {
        return "Hello ".concat(this.name);
    },
    sno: 20202020,
};
var professor1 = {
    name: "김정호",
    greeting: function () {
        return "Hi ".concat(this.name);
    },
    salary: 10000,
    evaluate: function (student) { return 100; },
};
function UserAction(user) {
    if ("sno" in user) {
        console.log(user.sno); //IStudent
    }
    else {
        console.log(user.evaluate); //IProfessor
    }
}
var sample10 = "hi";
