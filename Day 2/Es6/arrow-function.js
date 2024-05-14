function multipleTwoNumbers(a, b) {
  return a * b;
}
console.log(multipleTwoNumbers(40, 50));

// truyền vào nhiều tham số
const multipleTwoNumbersArrowFunction = (a, b) => {
  return a * b;
};
console.log(multipleTwoNumbersArrowFunction(3, 4));

// truyền vào một tham số

const printStringWithTheSample = string => {
  return string;
};

console.log(printStringWithTheSample("Hello world!"));


// không truyền vào tham số nào
const functionHelloWorld = () => {
    return "Hello world!2";
}
console.log(functionHelloWorld());

// viết function vào trong một object 

const objectA = {
    name: "Loc",
    age: 23,
    getName: () => {
        console.log (this.name)
    },
    getAge: function () {
        return this.age
    }
}
objectA.getName();
console.log(objectA.getAge());


// trong trường hợp function bên trong chỉ chứa return 

const printStringWithTheSample2 = string => string
console.log(printStringWithTheSample2("Hi!"))