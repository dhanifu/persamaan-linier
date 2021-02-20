let hasilSubstitusi

const metodeSubstitusi = data => {
    let nilai = ubahData(data)
    let persamaan_satu = `${nilai.x_one}x ${nilai.operasi_one} ${nilai.y_one}y = ${nilai.z_one}`
    let persamaan_dua = `${nilai.x_two}x ${nilai.operasi_two} ${nilai.y_two}y = ${nilai.z_two}`

    // Menggunakan persamaan satu
    let perpindahan_ruas = `${cekMinus(nilai.operasi_one, nilai.y_one)}y = ${nilai.z_one} - ${nilai.x_one}x`
    let hitung_pindah_ruas = `y = ${nilai.z_one} - ${nilai.x_one}x / ${nilai.y_one}`
    let hasil = bagiVar('x', pindahRuas(nilai.x_one), nilai.y_one)

    let hasill
    let ykiri = nilai.z_one / nilai.y_one
    let kali_kurung2
    let operasi = ''
    let kali_kurung1 = cekMinus(nilai.operasi_two, nilai.y_two) * ykiri
    if (hasil == '-x' || hasil == '-y') {
        kali_kurung2 = `${nilai.y_two * -1}${hasil.replace('-', '')}`
        let result = hasil.replace('-', '- ')
        hasill = `${ykiri} ${result}`
    } else if (hasil < 0) {
        kali_kurung2 = cekMinus(nilai.operasi_two, nilai.y_two) * hasil
        operasi = kali_kurung2 < 0 ? '-' : '+'
        let result = hasil.toString().replace('-', '- ')
        hasill = `${ykiri} ${result}`
    }
    let kali_kurung22 = kali_kurung2.toString().substr(kali_kurung2.length - 1) == 'x' ? kali_kurung2 : kali_kurung2 + 'x'
    let perpindahan_ruas2 = `${nilai.x_two}x ${operasi} ${kali_kurung22} = ${nilai.z_two} ${pindahRuas(kali_kurung1)}`
    let kondisi = kali_kurung2.toString().substr(kali_kurung2.length - 1)
    let hitung_pindah_ruas2

    if (kondisi == "x" || kondisi == 'y') {
        let ubah_nilai = parseInt(kali_kurung2.replace(kondisi, ''))
        if (ubah_nilai < 0) {
            ubah_nilai *= -1
            hitung_pindah_ruas2 = nilai.x_two - ubah_nilai
        } else {
            hitung_pindah_ruas2 = nilai.x_two - ubah_nilai
        }
    } else {
        nilai.x_two = parseInt(nilai.x_two)
        if (kali_kurung2 < 0) {
            hitung_pindah_ruas2 = nilai.x_two - kali_kurung2
        } else {
            hitung_pindah_ruas2 = nilai.x_two + kali_kurung2
        }
    }
    let hitungkiri = nilai.z_two - (pindahRuas(kali_kurung1) < 0 ? kali_kurung1 : pindahRuas(kali_kurung1))

    $("#hasil").html(`
        <input type ="text" disabled value = "${persamaan_satu}" class="w-full"> <br>
        <input type="text" disabled value="${perpindahan_ruas}" class="w-full"><br>
        <input type="text" disabled value="${hitung_pindah_ruas}" class="w-full"><br>
        <input type="text" disabled value="y = ${hasill}" class="w-full"><br><br>

        <input type="text" disabled value="${persamaan_dua}" class="w-full"><br>
        <input type="text" disabled value="${persamaan_dua.replace('y', '(' + hasill + ')')}" class="w-full"><br>
        <input type="text" disabled value="${nilai.x_two}x ${kali_kurung1 < 0 ? '-' : '+'} ${kali_kurung1} ${operasi} ${kali_kurung22} = ${nilai.z_two}" class="w-full"><br>
        <input type="text" disabled value="${perpindahan_ruas2}" class="w-full"><br>
        <input type="text" disabled value="${hitung_pindah_ruas2}x = ${nilai.z_two - (pindahRuas(kali_kurung1) < 0 ? kali_kurung1 : pindahRuas(kali_kurung1))}" class="w-full"><br>
        <input type="text" disabled value="x = ${hitungkiri} / ${hitung_pindah_ruas2}" class="w-full"><br>
        <input type="text" disabled value="x = ${hitungkiri / hitung_pindah_ruas2}" class="w-full"><br>
    `)

    let x = hitungkiri / hitung_pindah_ruas2
    kali_kurung = kali(nilai.x_two, x)
    let y2 = cekMinus(nilai.operasi_two, nilai.y_two)
    pindah_ruas = pindahRuas(kali_kurung)
    hasil_pindah_ruas2 = parseInt(nilai.z_two) + pindah_ruas
    $("#hasil").append(`
        <br>
        <input disabled value="${nilai.x_two}(${x}) ${nilai.operasi_two} ${nilai.y_two}y = ${nilai.z_two}"><br>
        <input disabled value="${kali_kurung} ${nilai.operasi_two} ${nilai.y_two}y = ${nilai.z_two}"><br>
        <input disabled value="${y2}y = ${nilai.z_two} ${cekRuas(pindah_ruas)}"><br>
        <input disabled value="${y2}y = ${hasil_pindah_ruas2}"><br>
        <input disabled value="y = ${hasil_pindah_ruas2} / ${kurungMinus(y2)}"><br>
        <input disabled value="y = ${hasil_pindah_ruas2 / y2}"><br>
    `)
    let y = hasil_pindah_ruas2 / y2

    return hasilSubstitusi = {
        x: x, y: y
    }
}

substitusi.addEventListener('click', () => {
    let nilai = getValue()

    $('#hasil').html('')

    hasilSubstitusi = metodeSubstitusi(nilai)
})