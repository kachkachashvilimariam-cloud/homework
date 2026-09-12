const car = {
  brand: "Audi",
  start() {
    console.log(`${this.brand} სტარტავს!`);
  },
};

const startFn = car.start;
startFn();

const boundStartFn = car.start.bind(car);
boundStartFn();

const curriedMultiply = (a) => (b) => (c) => a * b * c;

const double = curriedMultiply(2);

const doubleAndTriple = double(3);

console.log(doubleAndTriple);

const emails = ["a@mail.com", "b@mail.com", "a@mail.com"];

const uniqueEmails = [...new Set(emails)];
console.log("უნიკალური ელემენტები:", uniqueEmails);

const emailCounts = new Map();

for (const email of emails) {
  if (emailCounts.has(email)) {
    emailCounts.set(email, emailCounts.get(email) + 1);
  } else {
    emailCounts.set(email, 1);
  }
}

console.log("სიხშირეების Map:", emailCounts);
