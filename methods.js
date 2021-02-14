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
const pindahRuas = nilai => {
    return nilai * -1
}
const cekRuas = nilai => {
    if (nilai > 0) {
        return `+ ${nilai}`
    } else {
        return `- ${nilai * -1}`
    }
}
const getValue = () => {
    let data = []
    data = [
        {
            x_one: $('#x_one').val(),
            y_one: $('#y_one').val(),
            z_one: $('#z_one').val(),
            operasi_one: $('#operasi_one').val(),
        },
        {
            x_two: $('#x_two').val(),
            y_two: $('#y_two').val(),
            z_two: $('#z_two').val(),
            operasi_two: $('#operasi_two').val(),
        }
    ]

    data[2] = {
        x: kpk(data[0].x_one, data[1].x_two),
        y: kpk(data[0].y_one, data[1].y_two)
    }

    let nilai = []
    nilai.push(data)

    return nilai
}
const ubahData = data => {
    let nilai = {
        kpk_x: data[0][2].x,
        kpk_y: data[0][2].y,
        operasi_one: data[0][0].operasi_one,
        operasi_two: data[0][1].operasi_two,
        x_one: data[0][0].x_one,
        y_one: data[0][0].y_one,
        z_one: data[0][0].z_one,
        x_two: data[0][1].x_two,
        y_two: data[0][1].y_two,
        z_two: data[0][1].z_two,
    }
    return nilai
}

const kali = (a, b) => {
    return a * b
}
const bagi = (a, b) => {
    return a / b
}
const tambah = (a, b) => {
    return a + b
}
const kurang = (a, b) => {
    return a - b
}
const modulus = (a, b) => {
    return a % b
}

const bagiVar = (varr, a, b) => {
    let c = bagi(a, b)
    if (c == 1) {
        return `${varr}`
    } else if (c == -1) {
        return `-${varr}`
    }
    return c
}