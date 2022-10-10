function penjumlahan(a,b) {
    if (typeof(a) == "number" && typeof(b) == "number"){
        return a + b
    }
    return "ini bukan number"
}

const pengurangan = (x,y) => {
    if (typeof(x) == "number" && typeof(y) == "number"){
        return x - y
    }
    return "ini bukan number"
    
}


console.log(penjumlahan(10, 15))
console.log(pengurangan(10, 15))
