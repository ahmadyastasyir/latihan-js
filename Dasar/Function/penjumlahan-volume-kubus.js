function JumlahVolumeDuaKubus(a, b) {
  var volumeA, volumeB, total;

  volumeA = a * a * a;
  volumeB = b * b * b;
  total = volumeA + volumeB;

  return total;
}

alert(JumlahVolumeDuaKubus(8, 3));
alert(JumlahVolumeDuaKubus(10, 15));
