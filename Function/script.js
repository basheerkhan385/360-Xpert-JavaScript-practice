// Function

// Function JavaScript ka ek reusable block of code hota hai jo ek specific task perform karta hai, inputs (parameters) le sakta hai, output (return value) de sakta hai, aur sirf tab run hota hai jab usay call kiya jaye.

// Example

// Return (result wapas dena)

// function add(a, b) {
//   return a + b;
// }

// let result = add(5, 3);
// console.log(result); // 8

// Withdraw ATM 
// function withdraw(amount) {
//   console.log(amount + " PKR withdrawn");
// }

// withdraw(20000)
// withdraw(110000)


// Function Expression

// Basic Syntax

// const add =function(a, b) {
// return a + b;
// };

// Discount System

// const discount =function(price) {
// return price *0.9;
// };


// Arrow Function

// Greeting System

// const greet =function(name) {
// return"Hello " + name;
// };


// Calculator Add Button

// const add =function(a, b) {
// return a + b;
// };


// Area Calculator

// constarea = r =>3.14 * r * r;


// Student Result

// constisPass = marks => marks >=50;


//  Closure Function

//  Definition

// Closure wo situation hoti hai jahan inner function apne outer function ke variables ko yaad rakhta hai.

// Example

// function outer() {
//     let count =0;

//     function inner() {
//         count++;
//         console.log(count);
//     }

// return inner;
// }

// let counter =outer();
// counter();// 1
// counter();// 2


// Counter App

// function counter() {
// let value =0;
// return() => ++value;
// }


// Login Session

// function login(user) {
// return function() {
// console.log(user +" logged in");
//   };


// Bank Balance

// function bank() {
// let balance =1000;
// return amount => balance -= amount;
// }

// Promise 

// let p = new Promise((resolve,reject) => {
//     console.log("Promis is pending")
//     setTimeout(() => {
//         // resolve("The work is done")
//         reject("Their is an error")
//     }, 5000)
// })

// p.then((value) => {
//     console.log(value)
// })
// p.catch((error) => {
//     console.log(error)
// })


// Call back Function 

// Example 
// Online payment 


// function processPayment(callback) {
//   let success = true;
//   setTimeout(() => {
//     if(success) callback(null, "Payment Successful");
//     else callback("Payment Failed", null);
//   }, 2000);
// }

// processPayment((error, result) => {
//   if(error) console.log(error);
//   else console.log(result);
// });


// Data fetch karna
// function fetchData(cb) {
//   setTimeout(() => {
//     cb("Data mil gaya");
//   }, 2000);
// }

// fetchData(function(result) {
//   console.log(result);
// });



// Promise Example

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data mil gaya");
//     }, 2000);
//   });
// }

// fetchData()
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

// Async await 



// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data mil gaya");
//     }, 2000);
//   });
// }

// async function getData() {
//   let result = await fetchData();
//   console.log(result);
//   console.log("End")
// }
// getData();


// Asyncronus 

// setTimeout(function() {
//   console.log("Kapray dhul gaye");
// }, 5000);

// console.log("End");


// Call back hell = paramid of dom 

// getUser(function(user) {
//   getProfile(user, function(profile) {
//     getOrders(user, function(orders) {
//       getPaymentInfo(user, function(payment) {
//         console.log("All data loaded");
//       });
//     });
//   });
// });


// Pure Function 

// same input same output

// function add(a, b) {
//   return a + b;
// }

// add(2, 3); // 5
// add(2, 3); // 5

// impure function

// same input but different output

// let total = 0;

// function addAmount(amount) {
//   total = total + amount;
//   return total;
// }

// console.log(addAmount(20))
// console.log(addAmount(20))


