function hitungUmur() {
  var inputTanggalLahir = document.getElementById("tahunlahir").value;
  var tanggalLahir = new Date(inputTanggalLahir);
  var sekarang = new Date();

  var tahunLahir = tanggalLahir.getFullYear();
  var bulanLahir = tanggalLahir.getMonth();
  var tanggalLahirAngka = tanggalLahir.getDate();

  var tahunSekarang = sekarang.getFullYear();
  var bulanSekarang = sekarang.getMonth();
  var tanggalSekarang = sekarang.getDate();

  var umur = tahunSekarang - tahunLahir;

  if (
    bulanSekarang < bulanLahir ||
    (bulanSekarang == bulanLahir && tanggalSekarang < tanggalLahirAngka)
  ) {
    umur--;
  }

  var ulangTahunBerikutnya = new Date(
    tahunSekarang,
    bulanLahir,
    tanggalLahirAngka
  );
  if (sekarang > ulangTahunBerikutnya) {
    ulangTahunBerikutnya.setFullYear(ulangTahunBerikutnya.getFullYear() + 1);
  }

  var selisihHari = Math.ceil(
    (ulangTahunBerikutnya - sekarang) / (1000 * 60 * 60 * 24)
  );

  return { umur: umur, hariUlangTahun: selisihHari };
}

function tampilkanPesan() {
  var nama = document.getElementById("nama").value;
  var hasil = hitungUmur();
  var pesan =
    "<h1> Halo " +
    nama +
    ",<br>Umur Anda sekarang adalah " +
    hasil.umur +
    " tahun. <br>";
  pesan +=
    "Hingga ulang tahun berikutnya, tersisa <br>" +
    hasil.hariUlangTahun +
    " hari lagi.</h1>";
  document.write(pesan);
}
