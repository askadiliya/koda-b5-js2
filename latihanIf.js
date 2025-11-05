let belanja = 1_000_000;
let diskon;
if (belanja > 1_000_000) {
  diskon = belanja * 0.1;
} else if (belanja >= 500_000 && belanja <= 1_000_000) {
  diskon = belanja * 0.05;
} else if (belanja < 500_000) {
  console.log("Tidak mendapat diskon");
} else {
  console.log("invalid");
}
console.log(diskon);
