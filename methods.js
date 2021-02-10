const fpb = (a, b) => {
    a = Math.abs(a)
    b = Math.abs(b)

    if (!b) return b === 0 ? a : NaN;

    let r = a % b
    return fpb(b, r)
}
const kpk = (a, b) => {
    let hasilFPB = fpb(a, b)

    return Math.abs(a * b) / hasilFPB
}
const cekMinus = (operasi, nilai) => {
    if (operasi == '+') {
        return nilai
    } else if (operasi == '-') {
        return nilai * -1
    }
}
const kurungMinus = nilai => {
    nilai = parseInt(nilai)
    if (nilai < 0) {
        return `(${nilai})`
    }
    return nilai
}