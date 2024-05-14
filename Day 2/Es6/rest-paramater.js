// số lượng paramaters truyền vào
const totalNumber = (a, b) => {
  return a + b;
};

console.log(totalNumber(1, 2));

// khi không biết số lượng tham số truyền vào hoặc số lượng paramaters quá lớn

const totalNumberRestParam = (...numbers) => {
  // for (let i = 0; i < numbers.length; i++) {
  //     console.log(numbers[i]);
  // }
  let result = 0;
  for (let num of numbers) {
    result += num
  }
  console.log(result)
};

totalNumberRestParam(0, 11, 12, 13, 14, 15);
