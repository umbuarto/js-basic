var num = 10;

for (var i = 0; i < num; i++) {
  if (i % 2 == 0) {
    console.log(i + " adalah bilangan genap");
  } else {
    console.log(i + " adalah bilangan ganjil");
  }
}

var jumvac = 0;
var angka = 10;

for (var j = 1; j <= angka; j++) {
  if (angka % j === 0) {
    jumvac++;
  }
}

console.log(jumvac);

if (jumvac === 2) {
  console.log(jumvac + " Bilangan Prima");
} else {
  console.log(jumvac + " Bukan Bilanga Prima");
}
