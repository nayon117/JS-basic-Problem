// function findBiggestHeight(arr) {
//     if (!Array.isArray(arr)) {
//         return 'please provide me an array'
//     } else {
//         const height = Math.max(...arr);
//         return height;
//     }
// }

// const heights = [167, 190, 120, 165, 137];
// const find = findBiggestHeight(heights);
// console.log(find);

// problem 2 : find unique name
// function findUniqueName(arr) {
//     if (!Array.isArray(arr)) {
//         return "please provide me an array"
//     } else {
//         let unique = [];
//         for (let item of arr) {
//             if (typeof item !== 'string') {
//                 return 'please return a number'
//             } else {
//                 if (unique.includes(item) === false) {
//                     unique.push(item)
//                 }
//             }
//         }
//         return unique;
//     }
// }

// const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'babul', 'kabul', 'cabul', 'gabul']
// const findUnique = findUniqueName(names);
// console.log(findUnique);

// problem 3
// function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
//     const chairWood = chairQuantity * 3;
//     const tableWood = tableQuantity * 10;
//     const bedWood = bedQuantity * 50;
//     const totalWood = chairWood + tableWood + bedWood;
//     return totalWood;
// }
// const totalWoodNeed = woodCalculator(4, 5, 6);
// console.log(totalWoodNeed);

// problem 4 : find total expense
// const shoppingCart = [
//     {name:'shoe', price: 1200, quantity:2},
//     {name:'shirt', price: 2200, quantity:4},
//     {name:'pant', price: 1200, quantity:2},
//     {name:'Belt', price: 1200, quantity:1},
// ]
// function totalCost(arr) {
//     if (!Array.isArray(arr)) {
//         return 'please provide an array'
//     }
//     let sum = 0;
//     for (let item of arr) {
//         sum += item.price * item.quantity
//     }
//     return sum;
// }
// const expense = totalCost(shoppingCart)
// console.log('total expense today:', expense);

// problem 5
// function ticketPrice(ticketQuantity) {
//     if (typeof ticketQuantity !== 'number') {
//         return 'please provide a number'
//     }
//     const first100Rate = 100;
//     const second100Rate = 90;
//     const restTicketRate = 70;
//     if (ticketQuantity <= 100) {
//         const price = ticketQuantity * first100Rate;
//         return price;
//     }
//     else if (ticketQuantity <= 200) {
//         const first100Price = 100 * first100Rate;
//         const restTicketQuantity = ticketQuantity - 100;
//         const restTicketPrice = restTicketQuantity * second100Rate;
//         const totalPrice = first100Price + restTicketPrice;
//         return totalPrice;
//     }
//     else {
//         const first100Price = 100 * first100Rate;
//         const second100Price = 100 * second100Rate;
//         const restTicketQuantity = ticketQuantity - 200;
//         const restTicketPrice = restTicketQuantity * restTicketRate;
//         const totalCost = first100Price + second100Price + restTicketPrice;

//         return totalCost;
//     }

// }
// const price = ticketPrice(120);
// console.log(price);

// problem 6
// function isInteger(number) {
//     if (typeof number !== 'number') {
//         return "please provide a number"
//     } else {
//         if (number % 1 === 0) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }
// console.log(isInteger(2));

// problem 7
// function isJavascriptFile(filename) {
//     if (typeof filename !== 'string') {
//         return 'please provide a valid file name'
//     } else {
//         if (filename.toLowerCase().endsWith(".js")) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }
// const fileName = 'index.js'
// console.log(isJavascriptFile(fileName));

// problem 8
// function mindGame(x) {
//     if (typeof x !== 'number') {
//         return 'please provide a number'
//     } else if (x <= 0) {
//         return 'please provide a positive number'
//     } else {
//         const result = (((x * 3) + 10) / 2) - 5;
//         return result;
//     }
// }
// console.log(mindGame(5))
// problem 9
// function isLgSeven(x) {
//   if (typeof x !== "number") {
//     return "please provide a number";
//   } else {
//     const differ = x - 7;
//     if (differ < 7) {
//       return differ;
//     } else {
//       return x * 2;
//     }
//   }
// }
// console.log(isLgSeven(6));

// problem 10 : find bad data
// function findingBadData(arr) {
//     if (!Array.isArray(arr)) {
//         return "please provide an array"
//     }
//     else {
//         let badData = 0;
//         let badDataArray = []
//         for (let item of arr) {
//             if (typeof item !== 'number') {
//                 return ' please provide a number'
//             } else {
//                 if (item < 0) {
//                     badData++
//                     badDataArray.push(item)
//                 }
//             }
//         }
//         const obj = {
//             badData: badData,
//             badDataArray: badDataArray
//         }
//         return obj;
//     }
// }
// const x = [2, 3, 4, 6, -4, 6, -7, -9, 4];
// console.log(findingBadData(x));

// problem 11
// function gemsToDiamond(x, y, z) {
//     if (typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
//         return "please provide a valid number"
//     } else if (x < 0 || y < 0 || z < 0) {
//         return "please provide me positive number"
//     } else if (x % 1 !== 0 || y % 1 !== 0 || z % 1 !== 0) {
//         return "please provide me an integer"
//     }
//     else {
//         const frnd1 = 21;
//         const frnd2 = 32;
//         const frnd3 = 43;
//         const total = (x * frnd1) + (y * frnd2) + (z * frnd3);
//         if (total > 2000) {
//             return total-2000
//         } else {
//             return total;
//         }
        
//     }

   
// }
// console.log(gemsToDiamond(1,2,3));

// problem 12
// function printDetails(person) {
//     if (typeof person !== 'object') {
//         return "please provide me an object"
//     } else {
//         const name = person.name || "nai";
//         const age = person.age || "nai";
//         const email = person.email || "nai";
//         const bou = person.bou || "nai";

//         return "amar name " + name + ", amar boyos " + age + ', amar email ' + email + ', amar bou ' + bou;

//     }
// }

// const obj = {
//     name: 'nayon',
//     age: 24,
//     email:"abc@gmail.com"
// }
// const findObj = printDetails(obj)
//  console.log(findObj);

// problem 13:
// function isValidPhotoName(photoName, imageExtensions) {
//     if (typeof photoName !== 'string' || !Array.isArray(imageExtensions)) {
//         return "please provide valid inputs"
//     }
//     else {
//         for (let item of imageExtensions) {
//             if (photoName.toLowerCase().endsWith(item.toLowerCase())) {
//                 return true;
//             }
            
//         }
//         return false;
//     }
// }
// const photo = 'image.png'
// const extentions = [".jpg", "JPEG", ".png","gif", "ico"]
// console.log(isValidPhotoName(photo,extentions));

// problem 14 : find prime number
// function findPrimeNumer(arr) {
//     if (!Array.isArray(arr)) {
//         return "please provide me an array"
//     }
//     else {
//         let primes = [];
//         for (let item of arr) {
//             if (item > 1) {
//                 let isPrime = true;
//                 for (let i = 2; i < item; i++){
//                     if (item % i === 0) {
//                         isPrime = false;
//                         break;
//                     }
                    
//                 }
//                 if (isPrime === true) {
//                     primes.push(item)
//                 }
//             }
//         }
//         return primes;
//     }
// }

// const PrimeNumbers = [1, 3, 4, 56, 6, 7, 9, 19, 25, 27]
// const findPrime = findPrimeNumer(PrimeNumbers)
// console.log(findPrime);

// problem 15  :recursive function
// function sumOfN(n) {
//     if (n === 1) {
//         return 1
//     } else{
//         return n+sumOfN(n-1)
//     }
// }
// const n = 3;
// console.log(sumOfN(n));