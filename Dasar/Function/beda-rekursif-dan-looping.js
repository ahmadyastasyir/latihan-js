//looping
function faktorial(n) {
  var hasil = 1;
  for (var i = n; i > 0; i--) {
    hasil *= i;
  }
  return hasil;
}
console.log(faktorial(5));

//rekursif
function faktorial2(a) {
  if (a === 0) return 1;
  return a * faktorial2(a - 1);
}
console.log(faktorial2(5));
