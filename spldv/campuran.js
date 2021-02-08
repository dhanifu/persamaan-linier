const campuran = document.getElementById('campuran')
let hasilCampuran

const metodeCampuran = (nilai, x, y) => {
    // 
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