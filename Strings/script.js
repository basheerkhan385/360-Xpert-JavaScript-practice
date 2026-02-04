// String in JavaScript
// Correct JavaScript String Definition (Exam-Ready)

// A string in JavaScript is an immutable, ordered sequence of characters used to represent and manipulate text. Strings can contain letters, numbers, symbols, or spaces and support various built-in methods for searching, modifying, and formatting text.

// Example 1

// User Greeting:

// let name = "Sara";
// console.log(`Hello ${name}, welcome!`);


// Form Validation:

// let email = "test@gmail.com";
// console.log(email.includes("@")); // true/false

// Shopping Cart Item:

// let item = "Shirt";
// console.log("Item added: " + item);


// Message Sending App:

// let friend = "Ali";
// console.log(`Message sent to ${friend}`);

// Templete

// Multi-line Example

// let message = `Hello Ali,
// Welcome to JavaScript
// Learning Session!`;
// console.log(message);


// Expressions in Template Literals

// let a = 5;
// let b = 10;

// console.log(`Sum of ${a} and ${b} is ${a + b}`);
// // Output: Sum of 5 and 10 is 15


// Invoice / Report

// let product = "Laptop";
// let qty = 2;
// let total = 50000 * qty;
// console.log(`Product: ${product}, Quantity: ${qty}, Total: ${total} PKR`);


// String methods

// length

// let str = "Hello";
// console.log(str.length); // 5

// charAt(index)

// let str = "Hello";
// console.log(str.charAt(1)); // "e" (index 1)


// charCodeAt(index)

// let str = "A";
// console.log(str.charCodeAt(0)); // 65


// codePointAt(index)

// let str = "😊";
// console.log(str.codePointAt(0)); // 128522 


// concat()

// let str1 = "Hello";
// let str2 = "World";
// console.log(str1.concat(" ", str2)); // "Hello World"


// at(index)

// let str = "Hello";
// console.log(str.at(-1)); // "o" (last character)


// [ ] (Bracket Notation)

// let str = "Hello";
// console.log(str[0]); // "H"
// console.log(str[4]); // "o"


// slice(start, end)

// let str = "JavaScript";
// console.log(str.slice(0, 4)); // "Java"
// console.log(str)


// substring(start, end)

// let str = "JavaScript";
// console.log(str.substring(0,4)); // "Java"


// substr(start, length) (deprecated)

// let str = "JavaScript";
// console.log(str.substr(4,6)); // "Script"


// toUpperCase()

// let str = "hello";
// console.log(str.toUpperCase()); // "HELLO"


// toLowerCase()

// let str = "HELLO";
// console.log(str.toLowerCase()); // "hello"


// isWellFormed()

// let str = "😊";
// console.log(str.isWellFormed()); // true


// toWellFormed()

// let str = "\uD800"; // invalid
// console.log(str.toWellFormed()); // returns valid replacement


// trim()

// let str = "   Hello        ";
// console.log(str.trim()); // "Hello"


// trimStart()

// let str = "   Hello   ";
// console.log(str.trimStart()); // "Hello   "


// trimEnd()

// let str = "   Hello   ";
// console.log(str.trimEnd()); // "   Hello"


// padStart(targetLength, padString)

// let str = "5";
// console.log(str.padStart(3,"0")); // "005"


// padEnd(targetLength, padString)

// let str = "5";
// console.log(str.padEnd(3,"0")); // "500"


// repeat(count)

// let str = "Hi ";
// console.log(str.repeat(3)); // "Hi Hi Hi "


// replace(searchValue, newValue)

// let str = "Hello Ali";
// console.log(str.replace("Ali","Sara")); // "Hello Sara"


// replaceAll(searchValue, newValue)

// let str = "Banana Apple Banana";
// console.log(str.replaceAll("Banana","Orange")); // "Orange Apple Orange"


// split(separator)

// let str = "Apple,Banana,Mango";
// console.log(str.split(",")); // ["Apple","Banana","Mango"]


// String searching

// indexOf()

// let msg = "I love JavaScript";
// console.log(msg.indexOf("love")); // 2


// lastIndexOf()

// let msg = "JS is easy, JS is powerful";
// console.log(msg.lastIndexOf("JS")); // 13


// search()

// let text = "I love coding";
// console.log(text.search("coding")); // 7


// match()

// let text = "I love JS and JS loves me";
// console.log(text.match("JS"));
// // ["JS"]


// matchAll()

// let text = "JS JS JS";
// let result = text.matchAll(/JS/g);

// for (let m of result) {
//   console.log(m[0]);
// }



// includes()

// let msg = "Welcome to university";
// console.log(msg.includes("university")); // true


// startsWith()

// let url = "https://google.com";
// console.log(url.startsWith("https")); // true


// endsWith()

// let file = "report.pdf";
// console.log(file.endsWith(".pdf")); // true
