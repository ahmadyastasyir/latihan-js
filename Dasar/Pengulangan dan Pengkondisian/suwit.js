var tanya = true;
while (tanya) {
  //Menangkap pilihan player
  var player = prompt("Pilihlah jagoanmu : \ngajah / orang / semut");
  //Menangkap pilihan komputer
  //Meng-Generate bilangan random
  var computer = Math.random();

  if (computer < 0.34) {
    computer = "gajah";
  } else if (computer >= 0.34 && computer < 0.67) {
    computer = "orang";
  } else {
    computer = "semut";
  }
  console.log(computer);
  //Menentukan rules
  var hasil = "";
  if (player == computer) {
    hasil = "Hasilnya SERI!";
  } else if (player == "gajah") {
    if ((computer = "orang")) {
      hasil = "Hasilnya MENANG!";
    } else {
      hasil = "Hasilnya KALAH!";
    }
  } else if (player == "orang") {
    //cara lain selain menggunakan if else, yaitu operator ternary
    hasil = computer == "gajah " ? "Hasilnya KALAH!" : "Hasilnya MENANG!";
  } else if (player == "semut") {
    if ((computer = "gajah")) {
      hasil = "Hasilnya MENANG!";
    } else {
      hasil = "Hasilnya KALAH!";
    }
  } else {
    hasil = "Maaf anda typo atau memasukan pilihan lain";
  }
  //Penentuan hasilnya
  alert("Kamu memilih " + player + " dan Komputer memilih " + computer + ".\nMaka " + hasil);
  tanya = confirm("Mau coba Lagi?");
}
alert("Terima kasih telah Bermain");
