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

console.log(penjumlahan(10, 15));
console.log(pengurangan(10, 15));
console.log(perkalian(5, 3));
