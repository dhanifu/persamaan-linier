
const eliminasi = document.getElementById('eliminasi')

let eliminasiHP = {}


// akan mengembalikan HP nya
const metodeEliminasi = (data) => {
    // Nilai HP
    let hasil = {}

    let kaliKpk = {
        x: data[0][2].x / data[0][0].x_one,
        y: data[0][2].y / data[0][0].y_one,
        x_2: data[0][2].x / data[0][1].x_two,
        y_2: data[0][2].y / data[0][1].y_two
    }

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

    $("#hasil").html(`
        <p>Eliminasi X</p>
        <input disabled class="form w-full" value="${nilai.kpk_x}x ${nilai.operasi_one} ${kurungMinus(nilai.y_one * kaliKpk.x)}y = ${nilai.z_one * kaliKpk.x}"><br>
        <input disabled class="form w-full" value= "${nilai.kpk_x}x ${nilai.operasi_two} ${kurungMinus(nilai.y_two * kaliKpk.x_2)}y = ${nilai.z_two * kaliKpk.x_2}"><br>
        <input disabled class="form w-full" value="" id="penyelesaian_x"><br>
        <input disabled class="form w-full" value="" id="hasil_x">
        
        <br><br>

        <p>Eliminasi Y</p>
        <input disabled class="form w-full" value="${nilai.x_one * kaliKpk.y}x ${nilai.operasi_one} ${nilai.kpk_y}y = ${nilai.z_one * kaliKpk.y}"><br>
        <input disabled class="form w-full" value= "${nilai.x_two * kaliKpk.y_2}x ${nilai.operasi_two} ${nilai.kpk_y}y = ${nilai.z_two * kaliKpk.y_2}"><br>
        <input disabled class="form w-full" value="" id="penyelesaian_y"><br>
        <input disabled class="form w-full" value="" id="hasil_y">
    `)

    if (nilai.kpk_x - nilai.kpk_x == 0) {
        let x_kiri = cekMinus(nilai.operasi_one, nilai.y_one * kaliKpk.x) - cekMinus(nilai.operasi_two, nilai.y_two * kaliKpk.x_2)
        let x_kanan = (nilai.z_one * kaliKpk.x) - (nilai.z_two * kaliKpk.x_2)
        let penyelesaian_x = `${x_kiri}y = ${x_kanan}`
        let hasil_x = `y = ${x_kanan}/${x_kiri} = ${x_kanan / x_kiri}`

        let y_kiri = (nilai.x_one * kaliKpk.y) + (nilai.x_two * kaliKpk.y_2)
        let y_kanan = (nilai.z_one * kaliKpk.y) + (nilai.z_two * kaliKpk.y_2)
        let penyelesaian_y = `${y_kiri}x = ${y_kanan}`
        let hasil_y = `x = ${y_kanan}/${y_kiri} = ${y_kanan / y_kiri}`

        hasil = {
            x: y_kanan / y_kiri,
            y: x_kanan / x_kiri
        }

        $('#penyelesaian_x').val(penyelesaian_x)
        $('#hasil_x').val(hasil_x)
        $('#penyelesaian_y').val(penyelesaian_y)
        $('#hasil_y').val(hasil_y)

        return hasil
    } else {
        alert("tidak 0")
    }
}


eliminasi.addEventListener('click', function () {
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

    eliminasiHP = metodeEliminasi(nilai)
})
