// trường hợp là array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [first, second, third, ...rest] = arr;

console.log(first, second, third);

console.log("rest", rest);

//trường hơp object

const objectA = {
  name: "Loc",
  age: 23,
  school: "FPT",
  address: "Ha Noi",
};

const { name, age, address } = objectA;

console.log(example);