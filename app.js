// 1 write an ES2015 version of this code
// function createInstructor(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName
//   }
// }
const createInstructor = (firstName, lastName) => {
  return {
    firstName,
    lastName
  }
}
// 2
// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"
let favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}
// 3
// var instructor2 = {
//   firstName: "Colt",
//   sayHi: function(){
//     return "Hi!";
//   },
//   sayBye: function(){
//     return this.firstName + " says bye!";
//   }
// }
const instructor2 = {
  firstName: "Colt",
  sayHi() {
    return "Hi!"
  },
  sayBye() {
    return this.firstName + " says bye!";
  }
}

// 4 
// const d = createAnimal("dog", "bark", "Woooof!")
// // {species: "dog", bark: ƒ}
// d.bark()  //"Woooof!"

// const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// // {species: "sheep", bleet: ƒ}
// s.bleet() //"BAAAAaaaa"

const createAnimal = (species, verb, noise) => ({
  species,
  [verb]() { return noise }
})