let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

//1
favoriteAnimals.push("turtle");

//2
console.log(favoriteAnimals);

//3
favoriteAnimals.splice(1, 0, "meerkat");

//4
console.log("the result is going to be [ 'blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle' ]");

//5
console.log(favoriteAnimals);

//6
favoriteAnimals.length;

console.log("The array has a length of: " + favoriteAnimals.length)

//7
favoriteAnimals.splice(3, 1);

//8
console.log(favoriteAnimals);

//9
favoriteAnimals.indexOf("meerkat");

//10
console.log("The item you are looking for is at index: " + favoriteAnimals.indexOf("meerkat"));