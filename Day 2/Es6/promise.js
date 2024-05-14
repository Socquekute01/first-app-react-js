function rollDice() {
  return new Promise((resolve, reject) => {
    // random => trả kết quả từ 0 -> 0.9999999
    //làm tròn số floor
    // return kết quả

    const randNumber = Math.random() * 6;
    const floorNumber = Math.floor(randNumber);
    const result = floorNumber + 1;
    //check kết quả resul không thuộc các giá trị undefined null false NaN
    if (result) {
      resolve(result);
    } else {
      reject("Error: Unexpected result");
    }
  });
}

// async await => then cath

let a;
// rollDice()
//   .then((result) => {
//     a = result;
//     return console.log("Kết quả xúc sắc là: ", result);
//   })
//   .catch((err) => console.log(err))
//   .finally(() => console.log("a", a));

// pending == null
a = rollDice()
 console.log("a", a);