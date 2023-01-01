let lagi = true;
while (lagi) {
  // comp
  let comp = Math.round(Math.random() * 9) + 1;
  console.log(comp);
  // player input
  let p = parseInt(prompt("Silakan masukan angka 1 - 10 \n(Anda memiliki 3 Kesempatan) \nTebak Kesempatan ke-1 :"));
  // alur games
  let hasil = "";
  for (var chance = 3; chance >= 1; chance--) {
    if (p == comp) {
      hasil = "BENAR!";
      alert("Anda menebak angka " + comp + "\nTebakan anda " + hasil);
      break;
    } else if (p != comp && chance > 2) {
      hasil = p < comp ? "Angka terlalu Rendah" : "Angka terlalu Tinggi";
      p = parseInt(prompt("Angka tebakan anda " + hasil + "\nTebak Kesempatan ke-2 : "));
    } else if (p != comp && chance > 1) {
      hasil = p < comp ? "Angka terlalu Rendah" : "Angka terlalu Tinggi";
      p = parseInt(prompt("Angka tebakan anda " + hasil + "\nTebak Kesempatan ke-3 : "));
    } else if (p != comp && chance == 1) {
      hasil = "SALAH!";
      alert("Angka tebakan anda " + hasil + "\nKesempatan anda sudah habis! \nNomor yang benar adalah : " + comp);
    }
  }

  lagi = confirm("Coba bermain lagi?");
}
alert("Terimakasi Telah bermain");
