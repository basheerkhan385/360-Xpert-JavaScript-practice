// Array 
// JavaScript Array kya hai?
// Array ek data structure hai jo multiple values ko ek variable me store karne ke liye use hota hai.
// Array me values ordered list me hoti hain, aur har value ka index hota hai (0 se start).
// Array me different types ke data ho sakte hain: numbers, strings, boolean, objects, etc.

// Students ke names store karna
// let students = ["Ali", "Sara", "Ahmed", "Hina"];
// console.log(students);

// Shopping cart me products store karna
// let cart = ["Shirt", "Shoes", "Watch", "Bag"];
// console.log(cart);
// console.log(cart[1])

// Methods
// Array length

// let fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits.length); 


// Array toString()

// let fruits = ["Apple", "Banana"];
// console.log(fruits.toString()); // "Apple,Banana"


// Array at()

// let fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits.at(1)); // "Banana"


// Array join()

// let fruits = ["Apple", "Banana"];
// console.log(fruits.join(" - ")); // "Apple - Banana"


// Array pop()


// let fruits = ["Apple", "Banana"];
// console.log(fruits);
// let last = fruits.pop(); 
// console.log(last); // "Banana"
// console.log(fruits); // ["Apple"]


// Array push()

// let fruits = ["Apple"];
// console.log(fruits)
// fruits.push("Banana");
// console.log(fruits); // ["Apple","Banana"]


// Array shift()

// let fruits = ["Apple", "Banana"];
// let first = fruits.shift();
// console.log(first); // "Apple"
// console.log(fruits); // ["Banana"]


// Array unshift()

// let fruits = ["Banana"];
// fruits.unshift("Apple");
// console.log(fruits); // ["Apple", "Banana"]


// Array isArray()

// let fruits = ["Apple"];
// console.log(Array.isArray(fruits)); // true
// console.log(Array.isArray("Hello")); // false


// Array delete

// let fruits = ["Apple", "Banana"];
// delete fruits[1];
// console.log(fruits); // ["Apple", empty]


// Array concat()

// let arr1 = ["Apple"];
// let arr2 = ["Banana"];
// let allFruits = arr1.concat(arr2);
// console.log(allFruits); // ["Apple","Banana"]


// Array copyWithin()

// let arr = [1,2,3,4,5];
// arr.copyWithin(0,3,5);
// console.log(arr); // [4,5,3,4,5]


// Array Flat()

// let arr = [1, [2,3], [4, [5]]];
// console.log(arr.flat(2)); // [1,2,3,4,5]


// Array Searching


// indexOf()

// let names = ["Ali", "Sara", "Ali", "Ahmed"];
// console.log(names.indexOf("Ali"));


// lastIndexOf()

// let names = ["Ali", "Sara", "Ali", "Ahmed"];
// console.log(names.lastIndexOf("Ali"));


// includes()

// let fruits = ["Apple", "Banana", "Mango"];
// fruits.includes("Banana"); // true
// fruits.includes("Orange"); // false


// find()

// let ages = [12, 16, 18, 21];
// let result = ages.find(age => age >= 18);
// console.log(result);


// findIndex()

// let marks = [30, 45, 60, 80];
// let index = marks.findIndex(m => m >= 50);
// console.log(index);


// findLast()

// let marks = [45, 60, 30, 80, 40];
// let result = marks.findLast(m => m < 50);
// console.log(result);


// findLastIndex()

// let index = marks.findLastIndex(m => m < 50);
// console.log(index);


// ARRAY SORTING

// Alphabetic Sort


// sort()

// let fruits = ["Banana", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits);

// reverse()

// let days = ["Mon", "Tue", "Wed"];
// days.reverse();
// console.log(days);

// toSorted()

// let fruits = ["Banana", "Apple", "Mango"];
// let sorted = fruits.toSorted();

// console.log(fruits);
// console.log(sorted);


// toReversed()

// let nums = [1, 2, 3];
// let rev = nums.toReversed();

// console.log(nums);
// console.log(rev);


// Sorting Objects

// let students = [
//   { name: "Ali", age: 22 },
//   { name: "Sara", age: 18 },
//   { name: "Ahmed", age: 20 }
// ];

// students.sort((a, b) => a.age - b.age);


// Numeric Sort

// let numbers = [40, 100, 1, 5];
// numbers.sort((a, b) => a - b);
// console.log(numbers);


// Random Sort

// numbers.sort(() => Math.random() - 0.5);


// Math.min()

// let nums = [10, 5, 20];
// console.log(Math.min(...nums));


// Math.max()

// let nums = [10, 5, 20];
// console.log(Math.max(...nums));


// Home made Min()

// let nums = [10, 5, 20];
// let min = nums[0];

// for (let i = 1; i < nums.length; i++) {
//   if (nums[i] < min) {
//     min = nums[i];
//   }
// }

// console.log(min);


// Home made Max()

// let max = nums[0];

// for (let i = 1; i < nums.length; i++) {
//   if (nums[i] > max) {
//     max = nums[i];
//   }
// }

// console.log(max);


// ARRAY ITERATION

// Array forEach()

// let students = ["Ali", "Ahmed", "Sara"];

// students.forEach(name => {
//   console.log("Hello " + name + " Kesy hon!");
// });


// Array map()

// let numbers = [2,3,4];
// let squares = numbers.map(n => n * n);

// console.log(squares);


// Array flatMap()

// let arr = [1,2,3];

// let result = arr.flatMap(n => [n, n*2]);
// console.log(result);
// [1,2,2,4,3,6]


// rray filter()

// let ages = [12,18,20,15];

// let adults = ages.filter(age => age >= 18);
// console.log(adults); // [18,20]


// Array reduce()

// let numbers = [1,2,3,4];

// let sum = numbers.reduce((total , n) => total + n, 0);
// console.log(sum); // 10


// reduceRight()

// let words = ["I", "Love", "JS"];

// let sentence = words.reduceRight((acc, word) => acc + " " + word);
// console.log(sentence); // JS Love I


// Array every()

// let marks = [60,70,80];
// console.log(marks.every(m => m >= 50)); // true


// Array some()

// let marks = [30,40,90];
// console.log(marks.some(m => m >= 50)); // true


// Array from()

// let str = "HELLO";
// let arr = Array.from(str);
// console.log(arr); // ["H","E","L","L","O"]


// Array keys()

// let fruits = ["Apple","Banana"];

// for (let key of fruits.keys()) {
//   console.log(key);
// }iuu


// Array entries()

// let fruits = ["Apple","Banana"];
// for (let [i, v] of fruits.entries()) {
//   console.log(i, v);
// }

