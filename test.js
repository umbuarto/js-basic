// var n = 5;
// var result = "";

// for (var i = 0; i < n; i++) {
//   for (var j = 0; j <= i; j++) {
//     result += "#";
//   }
//   console.log(result);
//   result = "";
// }

// for (var i = 1; i <= n; i++) {
//   for (var j = 1; j <= i; j++) {
//     result += j;
//   }
//   console.log(result);
//   result = "";
// }

// murid

var murid = [
  [1, "Vinsen", 3.5],
  [2, "Udin", 3.0],
  [3, "Mamang", 2.1],
];

for (var i = 0; i < murid.length; i++) {
  var infoMurid = murid[i];
  var id = infoMurid[0];
  var nama = infoMurid[1];
  var ipk = infoMurid[2];

  var status;
  if (ipk >= 3.0) {
    status = "Lulus";
  } else {
    status = "Tidak lulus";
  }

  console.log(id + ". " + nama + ", IPK = " + ipk + ", " + status);
}
