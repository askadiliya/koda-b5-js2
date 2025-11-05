let belanja = 1_000_000;
let diskon;

switch (true) {
  case belanja > 1_000_000:
    diskon = belanja * 0.1;
    break;
  case belanja >= 500_000 && belanja <= 1_000_000:
    diskon = belanja * 0.05;
    break;
  case belanja < 500_000:
    console.log("Tidak Mendapat diskon");
    break;
  default:
    console.log("Invalid");
}
console.log(diskon);
