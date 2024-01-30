"use strict";
var User8 = /** @class */ (function () {
    function User8(name) {
        this.name = name;
    }
    User8.prototype.greeting = function () {
        return "Hello, my name is ".concat(this.name);
    };
    return User8;
}());
