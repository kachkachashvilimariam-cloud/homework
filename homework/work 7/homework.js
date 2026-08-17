// Task 1
const fullName = "მარიამ კაჭკაჭაშვილი";
// fullName = "მარი კაჭკაჭაშვილი";
// const-ის ცვლილება და მნიშვნელობის ხელახლა მინიჭება შეუძლებელია. ის არის მუდმივი ცვლადი და თუ შევცვლით გამოიწვევს error-ს.
let age = 27;

// Task 2
let textValue = "გამარჯობა";
let numberValue = 33;
let booleanValue = true;
let undefinedValue;
let nullValue = null;

console.log("typeof textValue -> " + typeof textValue);
console.log("typeof numberValue -> " + typeof numberValue);
console.log("typeof booleanValue -> " + typeof booleanValue);
console.log("typeof undefinedValue -> " + typeof underfinedValue);
console.log("typeof nullValue -> " + typeof nullValue);

// Task 3
let message = `ჩემი სახელია ${fullName} და ვარ ${age} წლის.`;
console.log(message);

// Task 4
let num1 = 10;
let num2 = 3;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);

// Task 5
let score = 10;

score += 5;
console.log(score);

score -= 3;
console.log(score);

score *= 2;
console.log(score);

// Task 6
const valueA = 7;
const valueB = "7";

console.log(valueA === valueB);
console.log(valueA == valueB);
console.log(valueA !== valueB);
// == ტიპებს გარდაქმნის, მხოლოდ მნიშვნელობებს ადარებს. ამას უნდა ვერიდოთ.
// === და !== ადარებს როგორც მნიშვნელობებს, ისე ტიპებს. მკაცრად ამოწმებს და გამოვიყენოთ ეს.

// Task 7
const hasAge = true;
const hasEmail = true;

if (hasAge && hasEmail) {
  console.log("რეგისტრაცია შესაძლებელია");
} else {
  console.log("რეგისტრაცია ვერ მოხერხდება");
}

// Task 8 - Bonus
const birthYear = 1999;
const currentYear = 2026;

const userAge = currentYear - birthYear;

console.log(typeof userAge === "number");
console.log(
  `მომხმარებლის ასაკია ${userAge} წელი, ხოლო ტიპი არის ${typeof userAge}.`,
);
