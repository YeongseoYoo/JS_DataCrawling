"use strict";
function identity(arg) {
    return arg;
}
identity(10);
function useState(arg) {
    return [arg, function (arg2) { }];
}
var _a = useState(0), count = _a[0], setCount = _a[1];
var myIdentity = identity;
