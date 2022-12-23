var noAngkot = 1,
  angkotBeroperasi = 6,
  jumlahAngkot = 10;
for (noAngkot = noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log("Angkot No. " + noAngkot + " Beroperasi dengan baik.");
  } else {
    console.log("Angkot No. " + noAngkot + " Sedang tidak beroperasi.");
  }
}
