var noAngkot = 1,
  angkotBeroperasi = 6,
  jumlahAngkot = 10;
while (noAngkot <= angkotBeroperasi) {
  console.log("Angkot No. " + noAngkot + " Beroperasi dengan baik.");
  noAngkot++;
}
for (noAngkot > angkotBeroperasi; noAngkot <= jumlahAngkot; noAngkot++) {
  console.log("Angkot No. " + noAngkot + " Sedang tidak Beroperasi.");
}
