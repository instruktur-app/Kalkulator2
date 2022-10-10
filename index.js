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
  if(bilangan %2 != 0 ){
    return "true"
  }
  else{
    return "false"
  }
}

console.log(penjumlahan(10, 15));
console.log(pengurangan(10, 15));
console.log(perkalian(5, 3));
console.log(penjumlahan_menurun(1));
console.log(cek_ganjil(10));