var penyakit = prompt("masukkan penyakit anda : \n (cth: penyakit1, penyakit2, penyakit3)");
switch (penyakit) {
  case "penyakit1":
    var penyakit1 = prompt('apakah penyakit1 kategori "A" atau Kategori "B"');
    if (penyakit1 == "A") {
      alert("maka solusi A adalah : ...");
    } else if (penyakit1 == "B") {
      alert("maka solusi B adalah : ...");
    } else {
      alert("anda input kategori yang salah");
    }
    break;
}

console.log("  ");

/* Versi lain */ console.log("Versi lain");

console.log("  ");

var angka = prompt("Masukan angka 1-3 :");

switch (angka) {
  case "1":
    alert("anda memasukan angka 1");
    break;
  case "2":
    alert("anda memasukan angka 2");
    break;
  case "3":
    alert("anda memasukan angka 3");
    break;
  default:
    alert("maaf angka yang anda masukan bukan 1-3");
}
