var jumlahAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;
for (noAngkot = noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log("Angkot No. " + noAngkot + " Beroperasi dengan baik.");
  } else {
    console.log("Angkot No. " + noAngkot + " Sedang tidak beroperasi.");
  }
}
