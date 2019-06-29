//part 1
console.log("----------------------Part 1----------------------");

function part1(x, y, z) {
  console.log((i = (x + y + z) / 3));
}

part1(345, 18345, 6756);

// ES6

const part1a = (x, y, z) => {
  return (x + y + z) / 3;
};

console.log(part1a(345, 18345, 6756));

//part 2
console.log("----------------------Part 2----------------------");

const colorCar = x => {
  return "a " + x + " car";
};

console.log(colorCar("red"));

//part 3
console.log("----------------------Part 3----------------------");

let myComputer = new Object();
myComputer.brand = 'Asus';
myComputer.cpu = 'Intel Core i7-8750H';
myComputer.gpu = 'NVIDIA GeForce GTX 1060' ;
myComputer.nvme = 'Samsung 970 EVO Plus 1TB';
myComputer.summary = 'PC Gaming Mustard Race';

function showProps(obj, objName) {
  var result = ``;
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  return result;
}

console.log(showProps(myComputer, "myComputer"));

//part 4
console.log("----------------------Part 4----------------------");

const vehicleType = (x, y) => {
  var y;
  if (y === 1) {
    y = "car";
  } else if (y === 2) {
    y = "motorbike";
  } else {
    y = "teapot";
  }
  return "a " + x + " " + y;
};

console.log(vehicleType("blue", 2));

//part 5
console.log("----------------------Part 5----------------------");

console.log(3 === 3 ? "yes" : "no");

//part 6
console.log("----------------------Part 6----------------------");

let vehicle = (x, y, z) => {
  var y;
  if (y === 1) {
    y = "car";
  } else if (y === 2) {
    y = "motorbike";
  } else {
    y = "teapot";
  }

  if (z >= 1) {
    z = "used";
  } else {
    z = "new";
  }
  return "a " + x + " " + z + " " + y;
};

console.log(vehicle("blue", 1, 5));

//part 7 & 8
console.log("----------------------Part 7 & 8----------------------");

const listOfVehicles = ["motorbike", "caravan", "spaceship", "bike"];

console.log(listOfVehicles[2]);

//part 9
console.log("----------------------Part 9----------------------");

vehicle = (x, y, z) => {
  var y = listOfVehicles[y];

  if (z >= 2) {
    z = "used";
  } else {
    z = "new";
  }
  return "a " + x + " " + z + " " + y;
};

console.log(vehicle("green", 3, 1)); //

//part 10
console.log("----------------------Part 10----------------------");


let resultString = "";

for (var i = 0; i < listOfVehicles.length-1; i++)

resultString += listOfVehicles[i] + "s, ";
resultString += "and " + listOfVehicles[listOfVehicles.length-1] +"s.";

let amazingJoe = "Amazing Joe's Garage, we service " + resultString;


console.log(amazingJoe);

//part 11
console.log("----------------------Part 11----------------------");

listOfVehicles.splice(0, 0, 'mecha');

console.log(listOfVehicles); 

//we can run the code for the for loop again in here OR do it the dirty way

amazingJoe = "Amazing Joe's Garage, we service " + listOfVehicles[0]+"s " + resultString;

console.log(amazingJoe);

//part 12
console.log("----------------------Part 12----------------------");

const emptyObject = new Object();

console.log(emptyObject);

//part 13
console.log("----------------------Part 13 & 14----------------------");

function Teacher(name, language) {
  this.name = name;
  this.language = language;
}

const teachers = [(new Teacher('Philipp', 'HTML-CSS')), (new Teacher('Igor', 'CLI & GIT')), (new Teacher('Nick', 'JavaScript'))];

console.log(teachers);


//part 15
console.log("----------------------Part 15----------------------");

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;


console.log(x == y);  //false
console.log(x === y);  //false
console.log(z == y);  //true
console.log(z == x);  //false

/* the problem here is the equality operator does not look for the contents of and array when you try to compare two different arrays.
z and y works because we assigned the variable y and its contents to the variable z.
*/

console.log(z);

console.log(x[0,1,2] === y[0,1,2]); //the contents are the same so it even works with the strict equality operator

//part 16
console.log("----------------------Part 16----------------------");

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

console.log(o2);

//1- o3 is already assigned so messing with o2 after the assignment wont change anything

o2 = { foo: "something" };

console.log(o2);
console.log(o3);

//2- o2 = o3 or o3 = o2 does matter because before "o3 = o2" the o3 is undefined

//part 17
console.log("----------------------Part 17----------------------");

let bar = 42;
typeof typeof bar;

console.log(typeof bar);


//typeof bar is "number" which happens to be a string since it is a string :D when we test it the return we get back is "string"
// typeof typeof of anything should return a string because we are asking for a string to describe the type 




