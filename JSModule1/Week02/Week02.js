//part 1
console.log("----------------------Part 1----------------------");

console.log("Hello world!") //English
console.log("Merhaba dunya!") //Turkish
console.log("Konnichiwa sekai!") //Japanese in romaji
console.log("Salve mundi!") //Latin because quidquid latine dictum sit, altum videtur :o
console.log("Aia arda!") // Quenya Elvish
console.log("Hallo wereld!") //Dutch


//part 2
console.log("----------------------Part 2----------------------");

console.log('I\'m awesome'); // using an escape  for ' so it wont mess up the syntax 

//part 3
console.log("----------------------Part 3----------------------");

var x;
console.log("the value of x will be: undefined");
console.log(x);
var x = (1337);
console.log("the value of x will be: 1337");
console.log(x);

//part 4
console.log("----------------------Part 4----------------------");

var y = ("Hello There!");
console.log("the value of my string will be: 'Hello There!'");
console.log(y);
var y = ("General Kenobi!"); //this overwrites the value, in ES6 with using "let" it should be "y = ("whatever");"
console.log("the value of my string will be:'General Kenobi!'"); //Absolute bold one...
console.log(y);

//part 5
console.log("----------------------Part 5----------------------");

var z = (7.5);
console.log(z);
var a = Math.round(z);
console.log(a);
var za = Math.max(a, z);
console.log(za);

//part 6
console.log("----------------------Part 6----------------------");

var reasonsForBrannToBeKing = [];
console.log("The value of this array will be: []");
console.log(reasonsForBrannToBeKing);
var myFavoriteFamiliars = ["Doge", "Dragon", "Unicorn", "Phoenix"]
console.log(myFavoriteFamiliars);
myFavoriteFamiliars.push("baby pig");
console.log(myFavoriteFamiliars);
myFavoriteFamiliars.shift(); //removing doge since he cannot survive the adventure :( dont want to recover him with a new var since I want him safe at home
console.log(myFavoriteFamiliars);

//part 7
console.log("----------------------Part 7----------------------");
let myString = "this is a test";
stringLenght_myString = myString.length;
console.log(stringLenght_myString);

//part 8
console.log("----------------------Part 8----------------------");

let s = "samurai"; //string
let f = 76; // number
let j = false; //boolean
let k = null; //object 

console.log("The value of my variable s is: " + s);
console.log("The value of my variable f is: " + f);
console.log("The value of my variable j is: " + j);
console.log("The value of my variable k is: " + k);

console.log(typeof s);
console.log(typeof f);
console.log(typeof j);
console.log(typeof k);

if (typeof(s) == typeof(f)) {
    console.log("Its the same type! Wheeee~");
} else {
    console.log("Nope, different type");
}
if (typeof(j) == typeof(k)) {
    console.log("Its the same type! Wheeee~");
} else {
    console.log("Nope, different type");
}
if (typeof(f) == typeof(k)) {
    console.log("Its the same type! Wheeee~");
} else {
    console.log("Nope, different type");

}
if (typeof(s) == typeof(k)) {
    console.log("Its the same type! Wheeee~");
} else {
    console.log("Nope, different type");
}

//part 9
console.log("----------------------Part 9----------------------");

function part9(x, y) {
    console.log(x = x % y) //% is the remainder operator that returns the remainder when x is divided by y
};
part9(7, 3); // 5%2 is 1 since 7 = (2*3)+1 
part9(-12, 5) //-12%5 is -2 since x is a negative number here
part9(6, 0) //I just divided by zero, the universe will explode bwahaha... oh wait, it will just return NaN since we still cant divide by zero :(
part9(8, NaN) //Also cant divide by NaN since its stands for Not a Number :( booo

//part 10
console.log("----------------------Part 10----------------------");

let part10Array = ["hurr", "durr", 5, 9, [3, 2, 1], true, NaN, null]
console.log(part10Array);

function part10(x, y) {
    console.log(x = x / y)
};

part10(6, 0); //postive infinity
part10(10, 0); //positive infinity
part10(-10, 0); //negative infinity


console.log((6 / 0) === (10 / 0)); //infinity is treated as single entity so it checks out
console.log((-6 / 0) === (10 / 0)); // -inifnity is not the same as +infinity
console.log(NaN === (10 / 0)); //NaN is not infinity OwO