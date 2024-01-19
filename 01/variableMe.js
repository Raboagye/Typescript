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
var superHeros = [];
var heroPower = [];
// or const heroPower : Array<number> = []
superHeros.push("Flash");
heroPower.push(8);
var allUsers = [];
allUsers.push({ name: "", isActive: true });
var MLModels = [
    [5, 8, 9, 2, 4, 3, 3],
    [55, 6, 62, 62],
];
var score = 33;
score = 50;
score = "Richard";
var hitesh = { name: "Akwasi", id: 334 };
hitesh = { userName: "Aboagye", id: 334 };
function getDb(id) {
    "Db is ".concat(id);
}
function getDbId(id) {
    // id.toLowerCase()   will not work unless
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
var data = ["Ama", "Kofi", 3];
var seatAllotment;
seatAllotment = "middle";
// seatAllotment = "crew"  won't work
// tupples
var Userrr = ["November", 1995, true];
// enum
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice[SeatChoice["MIDDLE"] = 3] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 4] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 5] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.MIDDLE;
var richard = {
    email: "richard@gmail.com",
    userId: 233,
    googleId: "dskh232k",
    Id: 22,
    startTial: function () {
        return "trial started";
    },
    maritalStatus: "single",
};
var Aboagye = {
    email: "richard@gmail.com",
    userId: 233,
    googleId: "dskh232k",
    Id: 22,
    startTial: function () {
        return "trial started";
    },
    maritalStatus: "single",
    role: "fullstack",
};
// check private and public in typescript in javascript
// getters and setters in javascript
// Generics
function identityOne(val) {
    return val;
}
// the same as
// function identityOne<T>(val: T): T{
//   return val
// }
identityOne(4);
// accepts a number and will return a number
identityOne("Richard");
//  accepts a string and will return a string
function getSearchedProducts(product) {
    var myIndex = 3;
    return product[myIndex];
}
var getMoreSearchedProducts = function (product) {
    var myIndex = 3;
    return product[myIndex];
};
var makeMoreSearchedProducts = function (product) {
    var myIndex = 3;
    return product[myIndex];
};
// the comma does not do anything but just makes you know that this is a generic syntax not a jsx syntax. usually used by react developers.
function moreGeneric(product, value) {
    return {
        product: product,
        value: value,
    };
}
moreGeneric(3, "Akosua");
function genericWithExtension(product, value) {
    return {
        product: product,
        value: value,
    };
}
genericWithExtension(3, { connection: "http", username: "raboagye2", password: "richard" });
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish Food";
    }
    else {
        pet;
        return "Bird Food";
    }
}
