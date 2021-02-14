const matriks = document.getElementById('matriks')
let hasilMatriks

const metodeMatriks = (data, x, y) => {
    let persamaan_satu = `${data[0][0].x_one}x ${data[0][0].operasi_one} ${data[0][0].y_one}y = ${data[0][0].z_one}`
    let persamaan_dua = `${data[0][1].x_two}x ${data[0][1].operasi_two} ${data[0][1].y_two}y = ${data[0][1].z_two}`

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
    
    let kali_kurung = kali(data[0][0].y_one, y)
    let pindah_ruas = pindahRuas(kali_kurung)

    let y1 = cekMinus(nilai.operasi_one, nilai.y_one)
    let y3 = cekMinus(nilai.operasi_two, nilai.y_two)

    let invers = (nilai.x_one * y3) - (y1 * nilai.x_two)
    let hasilAtas = (y3 * nilai.z_one) + ((y1 * -1) * nilai.z_two)
    let hasilBawah = ((nilai.x_two * -1) * nilai.z_one) + (nilai.x_one * nilai.z_two)

    $("#hasil").html(`
    <textarea disabled class="form w-full" id="foo">|${nilai.x_one}  ${y1}| |x| = |${nilai.z_one}|
|${nilai.x_two}  ${y3}| |y|   |${nilai.z_two}|</textarea>
    <textarea disabled class="form w-full" id="foo">|x| = |${nilai.x_one}  ${y1}|^-1  |${nilai.z_one}|
|y|    |${nilai.x_two}  ${y3}|       |${nilai.z_two}|</textarea>
    
    <textarea disabled class="form w-full" id="foo">|x| = 1/${nilai.x_one} * ${y3} - ${kurungMinus(y1)} * ${nilai.x_two} |${y3}  ${y1 * -1}| |${nilai.z_one}|
|y|    |${nilai.x_two * -1}  ${nilai.x_one}| |${nilai.z_two}|</textarea>
    
    <textarea disabled class="form w-full" id="foo">|x| = 1/${invers} |${y3}  ${y1 * -1}| |${nilai.z_one}|
|y|              |${nilai.x_two * -1}  ${nilai.x_one}| |${nilai.z_two}|</textarea>
    
    <textarea disabled class="form w-full" id="foo">|x| = 1/${invers} |${hasilAtas}|
|y|              |${hasilBawah}|</textarea>
    <textarea disabled class="form w-full" id="foo">|x| = |${hasilAtas / invers}|
|y|     |${hasilBawah / invers}|</textarea>
`)

    // Baru subtitusi

    return hasilMatriks = {
        x: hasilAtas / invers,
        y: hasilBawah / invers
    }
}

matriks.addEventListener('click', function () {
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

    hasilMatriks = metodeMatriks(nilai, x, y)
})
