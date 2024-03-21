// var umur = 17;

// if (umur >= 17) {
//   consule.log("cukup umur untuk bikin ktp");
// } else {
//   consule.log("Belum Cukup Umur");
// }

// var minuman = "kopi";

// switch (kopi) {
//   case "kopi":
//     consule.log("yes");
//     break;

//   case "teh":
//     consule.log("no");
//     break;

//   default:
//     break;
// }

// var anak = 17;
// var tinggi = 150;

// switch (anak) {
//   case 17:
//     switch (tinggi) {
//       case 150:
//         consule.log("Boleh Masuk");
//         break;

//       default:
//         console.log("Tidak bisa");
//         break;
//     }
//     break;

//   default:
//     console.log("Tidak bisa");
//     break;
// }

// document.writeln("ddfv<br>");
// document.write("ddfv");

function tampilkanPesan() {
  // Ambil nilai dari input
  // var inputNilai = document.getElementById("inputField").value;

  // // Tampilkan pesan dengan nilai input
  // document.write("Halo, " + inputNilai + "!");

  var nama = document.getElementById("nama").value;
  var kondisi = document.getElementById("kondisi").value;
  var tahunlahir = document.getElementById("tahunlahir").value;
  var umur = 2024 - tahunlahir;

  if (kondisi == "Galau") {
    document.write(
      nama + " lagi " + kondisi + " Berat" + " Umur sekarang adalah " + umur
    );
  } else {
    document.write(nama + " lagi " + kondisi + " Umur sekarang adalah " + umur);
  }
}
