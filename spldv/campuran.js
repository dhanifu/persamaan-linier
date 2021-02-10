const campuran = document.getElementById('campuran')
let hasilCampuran

const metodeCampuran = (data, x, y) => {
    let persamaan_satu = `${data[0][0].x_one}x ${data[0][0].operasi_one} ${data[0][0].y_one}y = ${data[0][0].z_one}`
    let persamaan_dua = `${data[0][1].x_two}x ${data[0][1].operasi_two} ${data[0][1].y_two}y = ${data[0][1].z_two}`

    // Menggunakan persamaan satu
    let kali_kurung = kali(data[0][0].y_one, y)
    let pindah_ruas = pindahRuas(kali_kurung)
    let hasil_pindah_ruas = parseInt(data[0][0].z_one) + pindah_ruas

    $("#hasil").html(`
        <input disabled value="${data[0][0].x_one}x ${data[0][0].operasi_one} ${data[0][0].y_one}(${y}) = ${data[0][0].z_one}"><br>
        <input disabled value="${data[0][0].x_one}x ${data[0][0].operasi_one} ${kurungMinus(kali_kurung)} = ${data[0][0].z_one}"><br>
        <input disabled value="${data[0][0].x_one}x = ${data[0][0].z_one} ${cekRuas(pindah_ruas)}"><br>
        <input disabled value="${data[0][0].x_one}x = ${hasil_pindah_ruas}"><br>
        <input disabled value="x = ${hasil_pindah_ruas} / ${data[0][0].x_one}"><br>
        <input disabled value="x = ${hasil_pindah_ruas / data[0][0].x_one}"><br>
    `)

    // Menggunakan persamaan dua
    kali_kurung = kali(data[0][1].x_two, x)
    let y2 = cekMinus(data[0][1].operasi_two, data[0][1].y_two)
    pindah_ruas = pindahRuas(kali_kurung)
    hasil_pindah_ruas2 = parseInt(data[0][1].z_two) + pindah_ruas

    $("#hasil").append(`
        <br>
        <input disabled value="${data[0][1].x_two}(${x}) ${data[0][1].operasi_two} ${data[0][1].y_two}y = ${data[0][1].z_two}"><br>
        <input disabled value="${kali_kurung} ${data[0][1].operasi_two} ${data[0][1].y_two}y = ${data[0][1].z_two}"><br>
        <input disabled value="${y2}y = ${data[0][1].z_two} ${cekRuas(pindah_ruas)}"><br>
        <input disabled value="${y2}y = ${hasil_pindah_ruas2}"><br>
        <input disabled value="y = ${hasil_pindah_ruas2} / ${kurungMinus(y2)}"><br>
        <input disabled value="y = ${hasil_pindah_ruas2 / y2}"><br>
    `)


    return hasilCampuran = {
        x: hasil_pindah_ruas / data[0][0].x_one,
        y: hasil_pindah_ruas2 / y2
    }
}

campuran.addEventListener('click', function () {
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
    let x = eliminasiHP.x
    let y = eliminasiHP.y
    $('#hasil').html('')

    hasilCampuran = metodeCampuran(nilai, x, y)
})
