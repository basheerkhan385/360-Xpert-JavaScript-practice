
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

// Example with json 

// console.log("Start")

// console.log("Example of git data")

// async function getData() {
//   try {
//     let res = await fetch("data.json");

//     // agar response ok nahi hai
//     if (!res.ok) {
//       throw new Error("Network response was not ok");
//     }

//     let data = await res.json();
//     console.log(data);

//   } catch (err) {
//     console.log("Error:", err);
//   }
// }
// console.log("End")


// with out try and catch use then and catch in async await 

// async function getData() {
//   let res = await fetch("wrong-url");
//   let data = await res.json();
//   return data;
// }

// getData()
//   .then(data => console.log(data))
//   .catch(err => console.log("Error:", err.message));


// Three await one Fail hogia to kia hoga ik sath try catch lagana

// async function getData() {
//   try {
//     let a = await Promise.resolve("Data 1");  //  ye chaly ga
//     console.log(a);

//     let b = await Promise.reject("Error in Data 2");
//     console.log(b); //yeh line chalegi hi nahi

//     let c = await Promise.resolve("Data 3");  // ye kabhy run nahi hoga q ke error catch me direct chala jaye ga
//     console.log(c);
//   } catch (error) {
//     console.log("Caught Error:", error);
//   }
// }

// getData();


// Alag alag try catch lagana / is me ik fail hova baqi sary chalthy rahy


// async function getData() {
//   try {
//     let a = await Promise.resolve("Data 1");
//     console.log(a);
//   } catch (e) {
//     console.log("Error in A");
//   }

//   try {
//     let b = await Promise.reject("Error in Data 2");
//     console.log(b);
//   } catch (e) {
//     console.log("Error in B");
//   }

//   try {
//     let c = await Promise.resolve("Data 3");
//     console.log(c);
//   } catch (e) {
//     console.log("Error in C");
//   }
// }

// getData();

sayHello(); // "Hello World"

function sayHello() {
  console.log("Hello World");
}
