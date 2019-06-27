//part 1
console.log("----------------------Part 1----------------------");

const part1 = [5, 3, 2, 9, 19, 20, 3, 5];

//first I will sort the array because I am too lazy to implement "smarter" methods

part1.sort(function(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});

console.log(part1);

const returnForPart1 = part1.splice(1, 2);

part1.push(100);

console.log(part1);

console.log(returnForPart1); //returned values are here safe&sound

//part 2
console.log("----------------------Part 2----------------------");

/* I was always fascinated by the fact that the original gameboy game only contained 38 different cries stored in 38 decimals
 for the original 150 pokemon to save space on the game cart. They just added a pitch and lenght modifier to create more variations, 
 that was it for the totally useless information for the day... WoW
 */
const kantoStarters = [
  {
    name: "Bulbasaur",
    weight: 6.9,
    dexNumber: "001",
    pokemonCry: function() {
      console.log("BULBAAASAUUUR!");
    }
  },
  {
    name: "Charmender",
    weight: 8.5,
    dexNumber: "004",
    pokemonCry: function() {
      console.log("Chaaaaa! Chaaaa!");
    }
  },

  {
    name: "Squirtle",
    weight: 2,
    dexNumber: "007",
    pokemonCry: function() {
      console.log("'quIRTLEEE!!!");
    }
  }
];

const pokemonName = "name";

kantoStarters.forEach(pokemon => {
  console.log(pokemon.name);
  pokemon.pokemonCry();
  return;
});

//part 3
console.log("----------------------Part 3----------------------");
//quick and dirty

let part4 =
  "Hello, it is a good day, I eat good bananas, I do not like the word good";

console.log(part4);

part4 = part4.replace(/\bgood\b/gi, ""); //including a space here so if we had a "feelsgood" in the string the "good" stays in place. 

console.log(part4);

let part4b =
  "Hello, it is a good day, I eat goody bananas, I do not like the word feelsgood";

part4b = part4b.replace(/\b good\b/gi, ""); //edit: it was wrong, redid it with a "kinda" proper method with \b so both feelsgood and goody passes without problems

console.log(part4b);

//there is probably a better way of doing this

//part 4
console.log("----------------------Part 4----------------------");

//just reversing the fizzbuzz code from last class---haha-----Okay I admit that I am lazy...

const isDivisible = n => {
  for (i = 200; i > n; i--) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
};

isDivisible(0);
