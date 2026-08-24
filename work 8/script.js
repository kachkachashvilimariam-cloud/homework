// დავალება 1 (Ternary Operator):
function checkPassOrFail(score) {
  if (score >= 51) {
    return "Passed";
  } else {
    return "Failed";
  }
}
console.log(checkPassOrFail(75));
console.log(checkPassOrFail(51));
console.log(checkPassOrFail(45));

// დავალება 2 (Switch + Functions):
function calculator(a, b, operation) {
  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        return "0-ზე გაყოფა შეუძლებელია";
      } else {
        return a / b;
      }
    default:
      return "არასწორი ოპერაცია";
  }
}
console.log(calculator(10, 5, "+"));
console.log(calculator(10, 5, "-"));
console.log(calculator(10, 5, "*"));
console.log(calculator(10, 2, "/"));
console.log(calculator(10, 0, "/"));

// დავალება 3 (Arrow Functions + Conditions):
const getTaxAmount = (salary) => {
  if (salary < 1000) {
    return 0;
  } else if (salary <= 3000) {
    return salary * 0.1;
  } else {
    return salary * 0.2;
  }
};
console.log(getTaxAmount(800));
console.log(getTaxAmount(2000));
console.log(getTaxAmount(4000));

// დავალება 4 Function Expression (ფუნქციის გამოსახულება)
const calculateDiscount = function (price, discauntPercent) {
  return price - (price * discauntPercent) / 100;
};
console.log(calculateDiscount(100, 20));

// დავალება 5 Function Declaration (ფუნქციის გამოცხადება)
function createProduct(title, price, category = "ზოგადი") {
  return `პროდუქტი: ${title}, ფასი: ${price} ლ, კატეგორია: ${category}`;
}

const item1 = createProduct("ლეპტოპი", 3500, "ტექნიკა");
const item2 = createProduct("წიგნი", 20);

console.log(item1);
console.log(item2);
