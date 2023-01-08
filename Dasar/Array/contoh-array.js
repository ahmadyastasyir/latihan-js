function myFunc(a) {
  var x = a * a + a - a / a;
  return x;
}
console.log(myFunc(3));
var myArr = [];
myArr = ["text", 2, false, myFunc, [4, 5, 6]];
console.log(myArr[4][2]);
