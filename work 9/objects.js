// დავალება 1 (map & filter):
const students = [
  { name: "Luka", score: 85 },
  { name: "Gio", score: 40 },
  { name: "Nino", score: 92 },
];
const passedStudents = students
  .filter((student) => student.score >= 51)
  .map((student) => ({ ...student, status: "Passed" }));

console.log(passedStudents);

// დავალება 2 (reduce):
const numbers = [12, 5, 8, 130, 44];

const maxNumber = numbers.reduce((max, current) => {
  return current > max ? current : max;
});

console.log(maxNumber);

// დავალება 3 (Destructuring & Spread):
const car = {
  brand: "Audi",
  model: "A4",
  year: 2019,
  color: "Black",
};

const { brand, model } = car;
console.log(brand, model);

const updatedCar = {
  ...car,
  year: 2024,
  owner: "luka",
};
console.log(updatedCar);
