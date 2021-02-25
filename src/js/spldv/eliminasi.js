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

    let persamaan1 = `${nilai.x_one}x ${nilai.operasi_one} ${nilai.y_one}y = ${nilai.z_one}`
    let persamaan2 = `${nilai.x_two}x ${nilai.operasi_two} ${nilai.y_two}y = ${nilai.z_two}`
    let x1 = nilai.x_one * kaliKpk.x
    let y1 = nilai.y_one * kaliKpk.x
    let z1 = nilai.z_one * kaliKpk.x
    let x2 = nilai.x_two * kaliKpk.x_2
    let y2 = nilai.y_two * kaliKpk.x_2
    let z2 = nilai.z_two * kaliKpk.x_2
    let eliminasiy = y1 - y2
    let eliminasiz = z1 - z2
    let hasilY = eliminasiz / eliminasiy

    let x_1 = nilai.x_one * kaliKpk.y
    let y_1 = nilai.y_one * kaliKpk.y
    let z_1 = nilai.z_one * kaliKpk.y
    let x_2 = nilai.x_two * kaliKpk.y_2
    let y_2 = nilai.y_two * kaliKpk.y_2
    let z_2 = nilai.z_two * kaliKpk.y_2
    let eliminasix = x_1 - x_2
    let eliminasiz1 = z_1 - z_2
    let hasilX = eliminasiz1 / eliminasix
    
    $("#hasil").html(`
        <p>Eliminasi X</p>
        <textarea class="bg-gray-100 p-4 block w-full" id="foo" disabled>${persamaan1}
${persamaan2}</textarea>
        <textarea class="bg-gray-100 p-4 block w-full" id="foo" disabled>${x1}x + ${kurungMinus(y1)}y = ${z1}
${x2}x + ${kurungMinus(y2)}y = ${z2}</textarea>
    <textarea class="bg-gray-100 p-4 block w-full" id="foo" disabled>${eliminasiy}y = ${eliminasiz}
y = ${hasilY}</textarea>

        <p>Eliminasi X</p>
        <textarea class="bg-gray-100 p-4 block w-full" id="foo" disabled>${persamaan1}
${persamaan2}</textarea>
        <textarea class="bg-gray-100 p-4 block w-full" id="foo" disabled>${x_1}x + ${kurungMinus(y_1)}y = ${z_1}
${x_2}x + ${kurungMinus(y_2)}y = ${z_2}</textarea>
        <textarea class="bg-gray-100 p-4 block w-full" id="foo" disabled>${eliminasix}x = ${eliminasiz1}
x = ${hasilX}</textarea>
<textarea class="bg-gray-100 p-4 block w-full" id="foo" disabled>Himpunan Penyelesaian (${hasilX}, ${hasilY})</textarea>  
    `)
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
