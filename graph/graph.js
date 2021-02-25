const hasil = document.getElementById('hasil')

hasil.addEventListener('click', function () {
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

        let x_one = data[0].x_one
        let y_one = data[0].y_one
        let z_one = data[0].z_one
        
        let hasilX = z_one / x_one
        let hasilY = z_one / y_one

    let x = board.create('point', [hasilX, 0])
    let y = board.create('point', [0, hasilY])

    let seg = board.create('segment', [x, y])
    let per1 = board.create('perpendicular', [x, y])
    
})