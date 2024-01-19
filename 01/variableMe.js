"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Richard Aboagye";
console.log(greetings);
// number
var myNumber = 33333;
console.log(myNumber);
var hisNumber = 44444;
console.log(hisNumber);
// boolean
var isLoggedIn = true;
var isloggedOut = true;
console.log(isLoggedIn, isloggedOut);
// function
function addTwo(num) {
    return num + 2;
}
addTwo(7);
function signUp(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
    console.log(name, email, isPaid);
}
signUp("Richard", "richardaboagye100@gmail.com", true);
var signIn = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    console.log(name, email, isPaid);
};
signIn("Richard", "richardaboagye100@gmail.com", true);
// writing typescript
function functionReturnType(num) {
    return num + 2;
}
var hero = ["Thor", "Ironman", "Superman"];
hero.map(function (hero) {
    return "hero's name is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Richard", isPaid: false });
// this won't work
// createUser({ name: "Richard", isPaid: false, email: "a@a.com" });
// but this will
var newUser = { name: "Richard", isPaid: false, email: "a@a.com" };
createUser(newUser);
function createCourse() {
    return { name: "Reactjs", Paid: 300 };
}
function createNewUser(user) { }
var myUser = {
    _id: "4532",
    name: "h",
    age: 23,
    isMarried: false,
};
myUser.name = "Richard";
