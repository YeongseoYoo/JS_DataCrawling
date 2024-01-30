"use strict";
var User7 = /** @class */ (function () {
    function User7(name, age) {
        this.name = name;
        this.age = age;
    }
    User7.prototype.greet = function () {
        return "Hello my name is ".concat(this.name);
    };
    return User7;
}());
