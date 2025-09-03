// // soal 1
// Variabel ---> variabel adalah wadah untuk menyimpan data di program
// praktik pemograman yang baik untuk selalu mendeklarasikan variabel sebelum digunakan

// cara deklarasi variabel ---> let, var, const
// contoh variabel dalam kode ---> let data = valueData // (let) sebagai deklarasi, (data) sebagai nama variabelnya, dan (valueData) sebagai value dari variabelnya
//cara menggunakan variabel sama seperti kita menggunakan aljabar dalam matematika

// identifiers ---> nama-nama unik yang mengidentifikasikan semua variabel javascript
// aturan umum membuat identifiers  ---> nama dapat berisi huruf, angka, tanda, dll.
//                                  ---> nama juga harus diawali dengan huruf, tapi dapat diawali juga dengan $ dan _
//                                  ---> nama bersifat case sensitive yang berarti beda huruf, atau bentuk huruf adalah hal yang berbeda
//                                  ---> kata-kata yang sudah digunakan, tidak dapat digunakan sebagai nama

// block scope ---> variabel yang dideklarasikan di dalam { } hanya bisa dipakai di dalam block itu, dan apabila dipakai diluarnya maka tidak akan terpengaruh
// perbedaan setiap scope ---> (global scope) variabel bisa dipakai dimanapun secara global, mau itu dalam block atau function
//                        ---> (function scope) hanya bisa dipanggil didalam function itu sendiri
//                        ---> (block scope) variabel yang dideklarasikan didalam block, bisa untuk let dan const, tapi tidak bisa untuk var
// perbedaan scope antar variabel ---> (var) bisa hidup di dalam fungsi, bukan hanya di blok
//                                ---> (let) hanya bisa dipakai jika didalam blok dan variabel bisa berubah
//                                ---> (const) samm dengan let, bedanya variabel tidak bisa berubah setelah deklarasi

// penginisialisasian variabel  ---> (var) bisa diinisialisasi ulang dengan menulis ulang variabel dan isi datanya
//                              ---> (let) bisa diubah nilainya, tapi tidak bisa diubah di scope yang sama
//                              ---> (const) tidak bisa diubah nilainya kecuali object/array


// // Soal 2
// Level 1
//1
let namaLengkap = "Muhammad Rizqi Setiawan"; // mendeklarasikan nama
console.log("nama lengkap saya " + namaLengkap);

let angka1 = 15;
let angka2 = 5;
console.log(angka1 + angka2);

//2
angka1 = 20;
console.log(angka1 * angka2);

//3
let x = 10;
let y = 3;
console.log(x % y); // % menampilkan hasil sisa dari x dibagi y

//4
let saldo = 100000;
let belanja = 25000;
console.log(saldo - belanja); // menurangi jumlah saldo dengan jumlah belanja

//5
let isStudent = true;
console.log("Apakah dia seorang pelajar?", isStudent); // menunjukkan bahwa dia adalah true

//6
let panjang = 10;
let lebar = 15;
let tinggi = 8;

console.log(panjang * lebar * tinggi); // mengkalikan panjang, lebar, dan tinggi

//7
let harga = 50000;
console.log((harga += 10000)); // menambahkan jumlah harga

//8
let greeting = "Selamat";
console.log((greeting += " Pagi")); // menambahkan kata-kata setelah selamat

//9
let totalPembelian = 150000;
totalPembelian *= 0.9; // karena diskon berjumlah 10% atau 0.1 dan sisanya 0.9
console.log(totalPembelian); // hasil dari totaPpembelian tapi hanya 0.9 bukan 1 utuh

// // Level 2
//1
let umurBudi = 25;
let umurAndi = 30;

console.log("Budi lebih muda daripada Andi", umurBudi < umurAndi); // membandingkan umur dan menyetujuinya

//2
let password = "rahasia123";

if (password === "rahasia123") {  // menegaskan bahwa password tidak boleh berubah sedikitpun dalam penulisan
  console.log("Password benar");
} else {
  console.log("Password salah");
}

//3
let nilaiUjian = 85;

if (nilaiUjian >= 80 && nilaiUjian <= 90) {  // mencari tahu apakah nilainya ada diantara angka itu
  console.log("nilai diantara 80 dan 90");
} else {
  console.log("nilai bukan diantara 80 dan 90");
}

//4
let cuaca = "hujan";
let adaPayung = true;

if (cuaca === "hujan" || adaPayung === true) {
  console.log("punya payung");
} else {
  console.log("tidak ada payung");
}

//5
function sapa() {
  console.log("Halo, selamat datang!");
}
sapa();

//6
function jumlahkan(a, b) {
  return a + b; // mengembalikan hasil penjumlahan a + b
}

console.log(jumlahkan(4, 6)); // menjumlahkan a + b = 10

//7
let nilai = 75;
if (nilai >= 70) {  // cek nilai, apakah lebih besar atau sama dengan 70
  console.log("Anda lulus!"); // jika benar, cetak lulus
} else {
  console.log("Belum lulus"); // jika tidak, cetak belum lulus
}

//8
let angka = 10;
if (angka % 2 === 0) {   // cek apakah 10 bisa dibagi 2
  console.log("Genap"); // kalau benar berarti genap
} else {
  console.log("Ganjil"); // kalau tidak berarti ganjil
}

//9
function cekUmur(umur) {
  if (umur > 17) {     // cek apakah umur lebih besar dari 17
    console.log("Anda dewasa."); // jika benar, maka sudah dewasa
  } else {
    console.log("Belum dewasa."); // jika tidak, maka belum dewasa
  }
}

cekUmur(18); // contoh pemanggilan -> "Anda dewasa."
cekUmur(17); // contoh pemanggilan -> "Belum dewasa."

//10
function cekNilai(nilai) {
  if (nilai > 90) {    // jika nilainya lebih dari 90
    console.log("Nilai Anda A."); // dapat nilai A
  } else {
    console.log("Nilai bukan A."); // jika tidak, maka bukan nilai A
  }
}

cekNilai(95);
cekNilai(85);

// // Level 3
//1
let nama = prompt("Masukkan nama:"); // minta pengguna memasukkan nama
if (nama) {
  console.log("Selamat datang, " + nama + "!"); // tampilkan pesan selamat datang kepada pengguna
} else {
  console.log("Anda tidak memasukkan nama."); // kalau kosong, tampilkan ini bahwa belum isi nama
}

//2
function hitungDiskon(totalBelanja, persenDiskon) {
  let diskon = persenDiskon / 100; // mengubah pesen menjadi desimal
  return totalBelanja * (1 - diskon); // kembalikan harga setelah diskon
}

console.log(hitungDiskon(200000, 10)); // contoh -> 180000

//3
function hitungPajak(gaji, persenPajak) {
  let pajak = persenPajak / 100; // mengubah persen ke desimal
  return gaji * (1 - pajak); // kembalikan gaji bersih
}

console.log(hitungPajak(5000000, 5));

//4
function cekKelayakan(umur, punyaSim) {
  if (umur > 18 && punyaSim === true) {   // cek umur apak sudah diatas 18 atau belum
    console.log("Anda layak mengemudi."); // jika sudah, tampilkan layak mengemudi
  } else {
    console.log("Anda belum layak mengemudi."); // jika belum, tampilkan belum layak
  }
}

cekKelayakan(20, true);
cekKelayakan(16, false);

//5
function cekSuhu(suhu) {
  if (suhu > 30) {    // jika suhu +30
    console.log("Suhu panas.");
  } else if (suhu >= 20 && suhu <= 30) { // jika suhu = 20 sampai 30
    console.log("Suhu normal.");
  } else {  // jika suhu -20
    console.log("Suhu dingin.");
  }
}

cekSuhu(35); // "Suhu panas."
cekSuhu(25); // "Suhu normal."
cekSuhu(15); // "Suhu dingin."
