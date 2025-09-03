CATATAN

Variabel 
---> variabel adalah wadah untuk menyimpan data di program
praktik pemograman yang baik untuk selalu mendeklarasikan variabel sebelum digunakan

cara deklarasi variabel 
---> let, var, const

contoh variabel dalam kode 
---> let data = valueData // (let) sebagai deklarasi, (data) sebagai nama variabelnya, dan (valueData) sebagai value dari variabelnya
cara menggunakan variabel sama seperti kita menggunakan aljabar dalam matematika

identifiers ---> nama-nama unik yang mengidentifikasikan semua variabel javascript

aturan umum membuat identifiers  
---> nama dapat berisi huruf, angka, tanda, dll.
---> nama juga harus diawali dengan huruf, tapi dapat diawali juga dengan $ dan _
---> nama bersifat case sensitive yang berarti beda huruf, atau bentuk huruf adalah hal yang berbeda
---> kata-kata yang sudah digunakan, tidak dapat digunakan sebagai nama

block scope 
---> variabel yang dideklarasikan di dalam { } hanya bisa dipakai di dalam block itu, dan apabila dipakai diluarnya maka tidak akan terpengaruh
perbedaan setiap scope 

---> (global scope) variabel bisa dipakai dimanapun secara global, mau itu dalam block atau function
---> (function scope) hanya bisa dipanggil didalam function itu sendiri
---> (block scope) variabel yang dideklarasikan didalam block, bisa untuk let dan const, tapi tidak bisa untuk var
                    
perbedaan scope antar variabel 
---> (var) bisa hidup di dalam fungsi, bukan hanya di blok
---> (let) hanya bisa dipakai jika didalam blok dan variabel bisa berubah
---> (const) samm dengan let, bedanya variabel tidak bisa berubah setelah deklarasi

penginisialisasian variabel  
---> (var) bisa diinisialisasi ulang dengan menulis ulang variabel dan isi datanya
---> (let) bisa diubah nilainya, tapi tidak bisa diubah di scope yang sama
---> (const) tidak bisa diubah nilainya kecuali object/array
