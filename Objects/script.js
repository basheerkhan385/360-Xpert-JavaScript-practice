// Objects in JavaScripts

// In JavaScript, an object is an entity that represents a real-world thing and contains properties (attributes) and methods (actions).
// 📌 Important:
// Object real life cheez ko represent karta hai
// Sirf data nahi, behavior bhi hota hai

// Example 1

// Student

// let student = {
//   name: "Ali",
//   rollNo: 23,
//   study: function () {
//     console.log("Student is studying");
//   }
// };


// Example 2
// Car 

// let car = {
//   "brand": "Toyota",
//   "speed": 120,
//   start: function () {
//     console.log("Car started");
//   }
// };

// console.log(car.brand)
// console.log(car.speed)


// Nested Objects

// myObj = {
//   name:"John",
//   age:30,
//   myCars: {
//     car1:"Ford",
//     car2:"BMW",
//     car3:"Fiat"
//   }
// }
// console.log(myObj.myCars.car1)


// JavaScript Object Constructor
// 🔹 Definition

// Object constructor ek function hota hai jisse hum ek hi type ke multiple objects create kar sakte hain.
// Ye template / blueprint ki tarah kaam karta hai.

// Matlab: Agar aapko bohot sare similar objects create karne hain, to constructor use karte hain.

// Example

// function Car(brand, price) {
//   this.brand = brand;  // property
//   this.price = price;  // property
//   this.showInfo = function() {   // method
//     console.log(`Car: ${this.brand}, Price: ${this.price}`);
//   }
// }

// let car1 = new Car("Honda", 80000);
// let car2 = new Car("Toyota", 90000);

// car1.showInfo(); // Car: Honda, Price: 80000
// car2.showInfo(); // Car: Toyota, Price: 90000


