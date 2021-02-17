const matriks = document.getElementById('matriks')
let hasilMatriks

const metodeMatriks = (data, x, y) => {
    let nilai = ubahData(data)
    let persamaan_satu = `${nilai.x_one}x ${nilai.operasi_one} ${nilai.y_one}y = ${nilai.z_one}`
    let persamaan_dua = `${nilai.x_two}x ${nilai.operasi_two} ${nilai.y_two}y = ${nilai.z_two}`

    let kaliKpk = {
        x: nilai.x / nilai.x_one,
        y: nilai.y / nilai.y_one,
        x_2: nilai.x / nilai.x_two,
        y_2: nilai.y / nilai.y_two
    }

    let kali_kurung = kali(nilai.y_one, y)
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
    let nilai = getValue()

    eliminasiHP = metodeEliminasi(nilai)
    let x = eliminasiHP.x
    let y = eliminasiHP.y
    $('#hasil').html('')

    hasilMatriks = metodeMatriks(nilai, x, y)
})
