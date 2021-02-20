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

const kofaktor = (varr, a, b) => {
    let c = a + b
    if (c % 2 == 0) {
        return varr
    } else if (c % 2 == 1) {
        return varr * -1
    }
}


const getValueSPLTV = () => {
    let data = [];
    data = [
        {
        x_one: $("#x_one").val(),
        y_one: $("#y_one").val(),
        z_one: $("#z_one").val(),
        a_one: $("#a_one").val(),
        operasi_one: $("#operasi_one").val(),
        operasi_one2: $("#operasi_one2").val(),
        },
        {
        x_two: $("#x_two").val(),
        y_two: $("#y_two").val(),
        z_two: $("#z_two").val(),
        a_two: $("#a_two").val(),
        operasi_two: $("#operasi_two").val(),
        operasi_two2: $("#operasi_two2").val(),
        },
        {
        x_three: $("#x_three").val(),
        y_three: $("#y_three").val(),
        z_three: $("#z_three").val(),
        a_three: $("#a_three").val(),
        operasi_three: $("#operasi_three").val(),
        operasi_three2: $("#operasi_three2").val(),
        },
    ];

    data[3] = {
        z1: kpk(data[0].z_one, data[1].z_two),
        z2: kpk(data[1].z_two, data[2].z_three),
    };

    let nilai = [];
    nilai.push(data);

    return nilai;
}

const getData = () => {
    let data = getValueSPLTV();
    let nilai = {
        kpk_x: data[0][3].z1,
        kpk_y: data[0][3].z2,
        operasi_one: data[0][0].operasi_one,
        operasi_one2: data[0][0].operasi_one2,
        operasi_two: data[0][1].operasi_two,
        operasi_two2: data[0][1].operasi_two2,
        operasi_three: data[0][2].operasi_three,
        operasi_three2: data[0][2].operasi_three2,
        x_one: data[0][0].x_one,
        y_one: data[0][0].y_one,
        z_one: data[0][0].z_one,
        a_one: data[0][0].a_one,
        x_two: data[0][1].x_two,
        y_two: data[0][1].y_two,
        z_two: data[0][1].z_two,
        a_two: data[0][1].a_two,
        x_three: data[0][2].x_three,
        y_three: data[0][2].y_three,
        z_three: data[0][2].z_three,
        a_three: data[0][2].a_three,
    }

    return nilai
}

const cekRuasVar = (nilai, variable) => {
    let cek = cekRuas(nilai) == '+ 1' || cekRuas(nilai) == '- 1'
                ? cekRuas(nilai).substr(0,1) + ` ${variable}` 
                : cekRuas(nilai) + `${variable}`
    return cek
}