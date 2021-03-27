let a = 1;
let b = 2;
let c = "";

console.log(`a = ${a},b = ${b}, c = ${c}`);
a += 0;
b = a + c;

if (b === a) {
  console.log("a equal b");
} else {
  console.log("someting went worng"); // <----- ผลลัพธ์ เหตุผล คือ b ไม่เท่ากับ a เพราะ DataType string != number !!!!
}

/////////////////////////////////////////////////////////////

console.log(square(5));

var square = function (n) {
  return n * n;
};

function square(n) {
  return n * n;
}

//  Ans  เหมือน  1 .var square คือ การ stored in a variable   2.functon square คิอการ ประการ Function ปกติ การทำงานไม่ต่างกัน

////////////////////////////////////////////////////////////
