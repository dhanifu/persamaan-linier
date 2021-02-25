const subtitusi = document.getElementById('substitusi')

let hasilSubtitusi = {}


// akan mengembalikan HP nya
const metodeSubtitusi = (data) => {
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

    let persamaan1 = `${nilai.x_one}x ${nilai.operasi_one} ${nilai.y_one}y = ${nilai.z_one}`
    let persamaan2 = `${nilai.x_two}x ${nilai.operasi_two} ${nilai.y_two}y = ${nilai.z_two}`
    let xPindah = nilai.x_one * -1
    let hasilX = (parseInt(nilai.z_two) + ((parseInt(nilai.z_one) / parseInt(nilai.y_one)) * parseInt(nilai.y_two) * -1)) / (parseInt(nilai.x_two) + ((xPindah / parseInt(nilai.y_one)) * parseInt(nilai.y_two)))
    
    $("#hasil").html(`
        <p>Persamaan Baru</p>
        <textarea class="bg-gray-100 p-4 w-full" id="foo" disabled>${persamaan1}
${persamaan2}</textarea>

        <textarea class="bg-gray-100 p-4 w-full" id="foo" disabled>${nilai.y_one}y = ${nilai.z_one} + ${xPindah}x
y = ${parseInt(nilai.z_one) / parseInt(nilai.y_one)} + ${xPindah / parseInt(nilai.y_one)}x</textarea>

        <p>Subtitusi Persamaan Baru</p>
        <textarea class="bg-gray-100 p-4 w-full" id="foo" rows="7" disabled>${persamaan2}
${nilai.x_two}x + ${nilai.y_two}(${parseInt(nilai.z_one) / parseInt(nilai.y_one)} + ${xPindah / parseInt(nilai.y_one)}x) = ${nilai.z_two}
${nilai.x_two}x + ${(parseInt(nilai.z_one) / parseInt(nilai.y_one)) * parseInt(nilai.y_two)} + ${(xPindah / parseInt(nilai.y_one)) * parseInt(nilai.y_two)}x = ${nilai.z_two}
${parseInt(nilai.x_two) + ((xPindah / parseInt(nilai.y_one)) * parseInt(nilai.y_two))}x + ${(parseInt(nilai.z_one) / parseInt(nilai.y_one)) * parseInt(nilai.y_two)} = ${nilai.z_two}
${parseInt(nilai.x_two) + ((xPindah / parseInt(nilai.y_one)) * parseInt(nilai.y_two))}x = ${nilai.z_two} + ${(parseInt(nilai.z_one) / parseInt(nilai.y_one)) * parseInt(nilai.y_two) * -1}
${parseInt(nilai.x_two) + ((xPindah / parseInt(nilai.y_one)) * parseInt(nilai.y_two))}x = ${parseInt(nilai.z_two) + ((parseInt(nilai.z_one) / parseInt(nilai.y_one)) * parseInt(nilai.y_two) * -1)} 
x = ${hasilX}</textarea>

        <p>Subtitusi X</p>
        <textarea class="bg-gray-100 p-4 w-full" id="foo" disabled rows="6">${persamaan1}
${nilai.x_one}(${hasilX}) + ${nilai.y_one}y = ${nilai.z_one}
${parseInt(nilai.x_one) * hasilX} + ${nilai.y_one}y = ${nilai.z_one}
${nilai.y_one}y = ${nilai.z_one} + ${(parseInt(nilai.x_one) * hasilX) * -1}
${nilai.y_one}y = ${parseInt(nilai.z_one) + ((parseInt(nilai.x_one) * hasilX) * -1)}
y = ${(parseInt(nilai.z_one) + ((parseInt(nilai.x_one) * hasilX) * -1)) / parseInt(nilai.y_one)}</textarea>

    <textarea class="bg-gray-100 p-4 w-full" id="foo" disabled>Himpunan Penyelesaian (${hasilX}, ${(parseInt(nilai.z_one) + ((parseInt(nilai.x_one) * hasilX) * -1)) / parseInt(nilai.y_one)})</textarea>
    `)
}


subtitusi.addEventListener('click', function () {
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
    console.log("yes");

    hasilSubtitusi = metodeSubtitusi(nilai)
})
