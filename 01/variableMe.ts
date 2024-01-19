let greetings: string = "Richard Aboagye";

console.log(greetings);

// number
let myNumber: number = 33333;
console.log(myNumber);

let hisNumber = 44444;
console.log(hisNumber);

// boolean
let isLoggedIn: boolean = true;
let isloggedOut = true;
console.log(isLoggedIn, isloggedOut);

// function
function addTwo(num: number) {
  return num + 2;
}
addTwo(7);

function signUp(name: string, email: string, isPaid: boolean = true) {
  console.log(name, email, isPaid);
}

signUp("Richard", "richardaboagye100@gmail.com", true);

let signIn = (name: string, email: string, isPaid: boolean = false) => {
  console.log(name, email, isPaid);
};

signIn("Richard", "richardaboagye100@gmail.com", true);

// writing typescript
function functionReturnType(num: number): number {
  return num + 2;
}

const hero = ["Thor", "Ironman", "Superman"];

hero.map((hero): string => {
  return `hero's name is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: "Richard", isPaid: false });

// this won't work
// createUser({ name: "Richard", isPaid: false, email: "a@a.com" });
// but this will
let newUser = { name: "Richard", isPaid: false, email: "a@a.com" };
createUser(newUser);

function createCourse(): { name: string; Paid: number } {
  return { name: "Reactjs", Paid: 300 };
}

type User = {
  name: string;
  age: number;
  isMarried: boolean;
};

function createNewUser(user: User) {}

type newUser = {
  readonly _id: string;
  name: string;
  age: number;
  isMarried: boolean;
  creditCardDetails?: number;
};

let myUser: newUser = {
  _id: "4532",
  name: "h",
  age: 23,
  isMarried: false,
};

myUser.name = "Richard";
// myUser._id = "3345" wont work because it is readonly

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

const superHeros: string[] = [];

const heroPower: number[] = [];
// or const heroPower : Array<number> = []

superHeros.push("Flash");
heroPower.push(8);

type user = {
  name: string;
  isActive: boolean;
};

const allUsers: user[] = [];
allUsers.push({ name: "", isActive: true });

const MLModels: number[][] = [
  [5, 8, 9, 2, 4, 3, 3],
  [55, 6, 62, 62],
];

let score: number | string = 33;

score = 50;
score = "Richard";

type richUser = {
  name: string;
  id: number;
};

type admin = {
  userName: string;
  id: number;
};

let hitesh: richUser | admin = { name: "Akwasi", id: 334 };
hitesh = { userName: "Aboagye", id: 334 };

function getDb(id: number | string) {
  `Db is ${id}`;
}

function getDbId(id: number | string) {
  // id.toLowerCase()   will not work unless
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

const data: (string | number)[] = ["Ama", "Kofi", 3];

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "middle";
// seatAllotment = "crew"  won't work

// tupples
let Userrr: [string, number, boolean] = ["November", 1995, true];

// enum
enum SeatChoice {
  AISLE = "aisle",
  MIDDLE = 3,
  WINDOW,
  FOURTH,
}

const hcSeat = SeatChoice.MIDDLE;

interface AboagyeUser {
  readonly Id: number;
  email: string;
  userId: number;
  googleId?: string;
  startTial(): string;
}

interface AboagyeUser {
  maritalStatus: string;
}

const richard: AboagyeUser = {
  email: "richard@gmail.com",
  userId: 233,
  googleId: "dskh232k",
  Id: 22,
  startTial: () => {
    return "trial started";
  },
  maritalStatus: "single",
};

interface Admin extends AboagyeUser {
  role: "fullstack" | "frontend" | "backend";
}

const Aboagye: Admin = {
  email: "richard@gmail.com",
  userId: 233,
  googleId: "dskh232k",
  Id: 22,
  startTial: () => {
    return "trial started";
  },
  maritalStatus: "single",
  role: "fullstack",
};

// check private and public in typescript in javascript
// getters and setters in javascript

// Generics
function identityOne<Type>(val: Type): Type {
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

function getSearchedProducts<T>(product: T[]): T {
  const myIndex = 3;
  return product[myIndex];
}
const getMoreSearchedProducts = <T>(product: T[]): T => {
  const myIndex = 3;
  return product[myIndex];
};

const makeMoreSearchedProducts = <T>(product: T[]): T => {
  const myIndex = 3;
  return product[myIndex];
};
// the comma does not do anything but just makes you know that this is a generic syntax not a jsx syntax. usually used by react developers.

function moreGeneric<T, U>(product: T, value: U): object {
  return {
    product,
    value,
  };
}

moreGeneric(3, "Akosua")


interface Database {
  connection: string,
  username: string,
  password: string
}

function genericWithExtension<T, U extends Database>(product: T, value: U): object {
  return {
    product,
    value,
  };
}

genericWithExtension(3, {connection: "http", username: "raboagye2", password: "richard"})


type Fish = {swim: () => void}
type Bird = {Fly: () => void}

function isFish(pet: Fish | Bird) {
  return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
      pet
      return "Fish Food"
  } else {
      pet
      return "Bird Food"
  }
}


export {};
