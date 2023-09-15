//---------------------0---------------------
console.log("----------------0--------------");
let isWorking = function (age) {
  return age >= 16 && age <= 65 ? true : false;
};
// true
console.log(isWorking(20));
// false
console.log(isWorking(4));
// false
console.log(isWorking(88));

//---------------------1---------------------
console.log("----------------1--------------");
function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return number > 1;
}

console.log(isPrime(13));
console.log(isPrime(12));

//---------------------2---------------------
console.log("----------------2--------------");

/**
 * Check if the first number is divisible by the second number.
 * @param {number} firstNum - The first operand of the division operation.
 * @param {number} secondNum - The second operand of the division operation.
 * @returns {boolean} - True if first number is divisible by the second number.
 */
function checkMultiplicity(firstNum, secondNum) {
  return firstNum % secondNum === 0 ? true : false;
}
console.log(checkMultiplicity(25, 5)); // true
console.log(checkMultiplicity(15, 3)); // true
console.log(checkMultiplicity(15, 5)); // true
console.log(checkMultiplicity(15, 4)); // false

//---------------------3---------------------
console.log("----------------3--------------");
/**
 * Check if the triangle exists.
 * @param {number} a - The first side of triangle.
 * @param {number} b - The second side of triangle.
 * @param {number} c - The third side of triangle.
 * @returns {boolean} - True if the triangle exists.

 *
 */
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a && a > 0 && b > 0 && c > 0
    ? true
    : false;
}
console.log(isTriangle(1, 2, 10));
console.log(isTriangle(10, 10, 10));

//---------------------4---------------------
console.log("----------------4--------------");
function areaTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) {
    return "Incorrect parameters";
  } else {
    return Math.sqrt((a + b + c) * (b + c - a) * (a + c - b) * (a + b - c)) / 4;
  }
}
console.log(areaTriangle(3, 4, 5));
console.log(areaTriangle(3, 4, 0));

let areaParallelepiped = function (a, b, c) {
  return 2 * (a * b + b * c + a * c);
};

console.log(areaParallelepiped(2, 3, 4));
