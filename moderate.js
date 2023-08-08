// problem 1 : convert inch to feet
// function inchToFeet(inch) {
//     if (typeof inch !== 'number' || inch <= 0) {
//         return "please provide a number";
//     }
//     else {
//         const feet = inch / 12;
//         return feet;
//     }
// }
// const myInches = 144;
// const findFeet = inchToFeet(myInches);
// console.log(findFeet);

// problem 2 : convert miles to kilometer
// function milesToKilometer(miles) {
//     if (typeof miles !== 'number' ||  miles <=0) {
//         return "plese provide a valid number"
//     } else {
//         const kilometer = miles * 1.609;
//         return kilometer;
//     }
// }
// const totalMiles =  -3;
// const findKilometer = milesToKilometer(totalMiles);
// console.log(findKilometer);

// problem 3: even or odd
// function isEven(number) {
//     if (typeof number !== 'number') {
//         return "please provide a number"
//     } else {
//         const remainder = number % 2;
//         if (remainder === 0) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
// }
// const ProvidedNumber = 22;
// const findOddOrEven = isEven(ProvidedNumber)
// console.log('the number is Even :', findOddOrEven);

// problem 4 find leap year
// function isLeapYear(year) {
//     if (typeof year !== 'number' || year <= 0) {
//         return "please provide a number"
//     }
//     else {
//         const remainder = year % 4;
//         if (remainder === 0 && (year % 100 !== 0 || year % 400 === 0)) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
// }
// const lipYear = isLeapYear(2024);
// console.log('isLeapYear :', lipYear)

// problem 5 :find sum of numbers in an array

// function getSumOfAnArray(arr) {
//     if (!Array.isArray(arr)) {
//         return "please provide a array"
//     }
//     let sum = 0;
//     for (let item of arr) {
//         sum +=item
//     }
//     return sum;
// }


// const numbers = [45, 87, 89, 56, 32, 51, 25];
// const findSum = getSumOfAnArray(numbers);
// console.log(findSum);

// function findOddOfAnArray(arr) {
//     const findOdds = [];
//     for (let item of arr) {
//         if (item % 2 === 1) {
//             findOdds.push(item)
//         }
//     }
//     return findOdds;
// }
// const findOddNumber = findOddOfAnArray(numbers);
// console.log(findOddNumber);

// function findEvenOfAnArray(arr) {
//     let evenArray = [];
//     for (let item of arr) {
//         if (item % 2 === 0) {
//             evenArray.push(item);
//         }
//     }
//     return evenArray;
// }
// const findEvenNumber = findEvenOfAnArray(numbers);
// console.log(findEvenNumber);

// problem 6 : factorial
// function factorial(number) {
//     if (typeof number !== 'number') {
//         return "please provide a number"
//     }
//     else {
//         if (number === 0 || number === 1) {
//             return 1;
//         } else {
//             let result = 1;
//             for (let i = number; i >= 1; i--){
//                 result *= i
//             }
//             return result;
//         }
//     }
// }
// console.log(factorial(5))

// problem 7: find the largest number

// function findLargest(number) {
//     if (!Array.isArray(number)) {
//         return "please provide me an array"
//     } else {
//         let largestNumber = number[0];
//         for (let item of number) {
//             if (typeof item !== 'number') {
//                 return "please provide me a number"
//             }
//             else {
//                 if (item > largestNumber) {
//                     largestNumber = item
//                 }
//             }
//         }
//         return largestNumber;
//     }
// }

// const numbers = [45, 87, 89, 56, 32, 51, 25,102];
// const findLargestNumber = findLargest(numbers);
// console.log(findLargestNumber);

// problem 8: find smallest number

// function findSmallest(arr) {
//     if (!Array.isArray(arr)) {
//         return "please provide me an array"
//     } else {
//         let smallest = arr[0];
//         for (let item of arr) {
//             if (typeof item !== 'number') {
//                 return 'Please provide me a number'
//             } else {
//                 if (item < smallest) {
//                     smallest = item;
//                 }
//             }
//         }
//         return smallest;
//     }
// }

// const numbers = [45, 87, 89, 56, 32, 51, 25, 102];
// const findSmallestNumber = findSmallest(numbers);
// console.log(findSmallestNumber);

// problem 9 : findout vowel and consonent from an string


// function findVowel(s) {
//     if (typeof s !== 'string') {
//         return "please provide me a string"
//     }
//     let vowel = 0;
//     let consonent = 0;
//     let space = 0;
//     let vowelArray =[]
//     for (let i = 0; i < s.length; i++){
//         let char = s[i].toLowerCase();
//         if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//             vowelArray.push(char);
//             vowel++;
//         }
//         else if (char !== ' ') {
//             consonent++
//         }
//         else {
//             space++
//         }
//     }
//     const obj = {
//         vowelCount: vowel,
//         consonentCount: consonent,
//         spaceCount: space,
//         vowelArray: vowelArray
//     }
//     return obj;
// }

// const sentence = 'the name of our country is bangladesh'
// const find = findVowel(sentence);
// console.log(find);