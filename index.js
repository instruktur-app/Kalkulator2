function penjumlahan(a, b) {
  if (typeof a == 'number' && typeof b == 'number') {
    return a + b;
  }
  return 'ini bukan number';
}

const pengurangan = (x, y) => {
  if (typeof x == 'number' && typeof y == 'number') {
    return x - y;
  }
  return 'ini bukan number';
};

function perkalian(d, c) {
  if (typeof d == 'number' && typeof c == 'number') {
    return d * c;
  }
  return 'ini bukan number';
}
function pembagian(s, d) {
  if (typeof s == 'number' && typeof d == 'number') {
    return s / d;
  }
  return 'ini bukan number';
}

function penjumlahan_menurun(bilangan) {
  let angka = 0
  if(bilangan < 1){
    return "angka yang dimasukan harus >= 1"
  }
  for(let i = bilangan; i >= 1; i--){
    angka += i
  }
  return angka
}

function cek_ganjil(bilangan) {
  return bilangan % 2 != 0
}
function mencariKelipatan3(bilangan){
  let angka = ''
  for (let i = 1; i<= bilangan; i++){
    if(i % 3 == 0){
      angka += String(i) + "_"
    }
  }
  return angka
}

function cekKelipatanLimaDanTujuh (bilangan) {
  for (let i = 1; i <= bilangan; i++) {
    if (i %5 == 0) {
      console.log("habis dibagi lima ", i)
    } else if (i %7 == 0) {
      console.log("habis dibagi tujuh ", i)
    } else {  
      console.log(i)
    }
  }
}

console.log(penjumlahan(10, 15));
console.log(pengurangan(10, 15));
console.log(perkalian(5, 3));
console.log(penjumlahan_menurun(1));
console.log(cek_ganjil(5));
console.log (mencariKelipatan3(100))
cekKelipatanLimaDanTujuh(100);
