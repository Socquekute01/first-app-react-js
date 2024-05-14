// sẽ tạo ra giá trị mặc định trong trường hợp người dùng không điền vào đủ tham số

const totalNumber = (a = 3, b = 4) => a + b;

console.log(totalNumber());
