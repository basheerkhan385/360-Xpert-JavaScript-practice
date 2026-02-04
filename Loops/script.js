// // for loop tab use hota hai jab aapko pata ho kitni baar code repeat karna hai.
// // print Name of 10 cities with for loop 
// // name manualy likhe he array me
// // Example 1
// console.log("print Name of 10 cities with for loop  \n \n")

// const cities = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Peshawar", "Quetta", "Multan", "Faisalabad", "Sialkot", "Hyderabad"];
// let text = ""
// for(let i = 0; i < cities.length; i++){
//     text  += i +" ) " + cities[i] + "\n" ;
// }
// console.log(text, "\n \n")


// // Example 2
// // Todo list me completed tasks check karna
// console.log("Todo list me completed tasks check karna \n \n")
// let todo = ["Study JS","Study loops", "Do exercises"];

// for (let i = 0; i < todo.length; i++) {
//     console.log(todo[i] + "  completed");
// }
// console.log("\n \n")


// // Example 3
// // Messages send karna friends ko
// console.log( " Messages send karna friends ko \n \n")
// let friends = ["Kaleem Raja", "M.Mahad", "Danish akhter"];

// for (let i = 0; i < friends.length; i++) {
//     console.log("Send message to: " + friends[i]);
// }
// console.log("\n \n")


// // Example 4
// // daly task print karna
// console.log("daly task print karna \n \n")
// let tasks = ["Wake up", "Brush teeth", "Eat breakfast", "Go to university"];

// for (let i = 0; i < tasks.length; i++) {
//     console.log("Task: " + tasks[i]);
// }
// console.log("\n \n")


// While loop
// Jab loop kab khatam hoga pata nahi ho (condition dependent)
// Example 1
// Bank ATM PIN verification
// console.log("While loop \n")

// console.log("Bank ATM PIN verification \n \n")

// let correctPIN = 1234;
// let enteredPIN = 0;

// while (enteredPIN !== correctPIN) {
//     let input = prompt("Enter your PIN:");
//     if (input === null) {  // User clicked Cancel
//         alert("You cancelled!");
//         break;
//     }
//     enteredPIN = Number(input);
// }

// if (enteredPIN === correctPIN) {
//     alert("PIN correct. Welcome!");
//     console.log("PIN correct. Welcome!")
// }



// example 2
// Coffee Machine Brewing Until Full Cup
// let cupLevel = 0;
// while (cupLevel < 100) {
//     cupLevel += 10; // 10% fill each time
//     console.log("Coffee cup level: " + cupLevel + "%");
// }
// console.log("Coffee ready!");



// example 3
// Elevator Moving Between Floors
// let currentFloor = 1;
// let targetFloor = 5;

// while (currentFloor < targetFloor) {
//     console.log("Elevator at floor: " + currentFloor);
//     currentFloor++;
    
// }
// console.log("Elevator arrived at floor " + targetFloor);



// Do while loop
// Ask for consent 
// Example 1
// let consent;

// do {
//     consent = prompt("Do you agree to the terms? (yes/no)");
// } while (consent.toLowerCase() !== "yes");

// alert("Thank you for agreeing!");


// exemple 2
// Coffee Machine Brewing

// let cupFull = false;

// do {
//     console.log("Pouring coffee...");
//     cupFull = confirm("Is the cup full?");
// } while (!cupFull);

// console.log("Coffee ready!");



