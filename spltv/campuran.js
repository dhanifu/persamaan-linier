const campuran = document.getElementById('campuran')

let hasilCampuran = {}


// akan mengembalikan HP nya
const metodeCampuran = (data) => {
    // Nilai HP
    let hasil = {}

    let kaliKpk = {
        z1: data[0][3].z1 / data[0][0].z_one,
        z2: data[0][3].z1 / data[0][1].z_two,

        z_1: data[0][3].z2 / data[0][1].z_two,
        z_2: data[0][3].z2 / data[0][2].z_three,
    }

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

    console.log('tes');

    let hasilZ1 =  cekMinus(nilai.operasi_one2, kaliKpk.z1)
    let hasilZ2 =  cekMinus(nilai.operasi_two2, kaliKpk.z2)

    let hasil_Z1 =  cekMinus(nilai.operasi_two2, kaliKpk.z_1)
    let hasil_Z2 =  cekMinus(nilai.operasi_three2, kaliKpk.z_2)

    let persamaanBaru = []
    persamaanBaru = [
        {
            new_x1: (nilai.x_one * hasilZ1) - (nilai.x_two * hasilZ2),
            new_y1: (nilai.y_one * hasilZ1) - (nilai.y_two * hasilZ2),
            new_a1: (nilai.a_one * hasilZ1) - (nilai.a_two * hasilZ2),
        },
        {
            new_x2: (nilai.x_two * hasil_Z1) - (nilai.x_three * hasil_Z2),
            new_y2: (nilai.y_two * hasil_Z1) - (nilai.y_three * hasil_Z2),
            new_a2: (nilai.a_two * hasil_Z1) - (nilai.a_three * hasil_Z2),
        }
    ]

    persamaanBaru[2] = {
        x1: kpk(persamaanBaru[0].new_x1, persamaanBaru[1].new_x2),
        y1: kpk(persamaanBaru[0].new_y1, persamaanBaru[1].new_y2),
    }

    let new_kaliKpk = {
        x: persamaanBaru[2].x1 / persamaanBaru[0].new_x1,
        x_1: persamaanBaru[2].x1 / persamaanBaru[1].new_x2,
        y: persamaanBaru[2].y1 / persamaanBaru[0].new_y1,
        y_1: persamaanBaru[2].y1 / persamaanBaru[1].new_y2,
    }

    if(persamaanBaru[2].y1 == 0 && persamaanBaru[1].new_y2 == 0){
        new_kaliKpk.y_1 = 1
    }else if(persamaanBaru[2].x1 == 0 && persamaanBaru[0].new_x1 == 0){
        new_kaliKpk.x = 1
    }else if(persamaanBaru[2].x1 == 0 && persamaanBaru[1].new_x2 == 0){
        new_kaliKpk.x_1 = 1
    }else if(persamaanBaru[2].y1 == 0 && persamaanBaru[0].new_y1 == 0){
        new_kaliKpk.y = 1
    }

    let nilai2 = []
    nilai2.push(persamaanBaru)

    let persamaan1 = `${nilai.x_one}x ${nilai.operasi_one} ${nilai.y_one}y ${nilai.operasi_one2} ${nilai.z_one}z = ${nilai.a_one}`
    let persamaan2 = `${nilai.x_two}x ${nilai.operasi_two} ${nilai.y_two}y ${nilai.operasi_two2} ${nilai.z_two}z = ${nilai.a_two}`
    let persamaan3 = `${nilai.x_three}x ${nilai.operasi_three} ${nilai.y_three}y ${nilai.operasi_three2} ${nilai.z_three}z = ${nilai.a_three}`
    let eliminasi1 = `${persamaanBaru[0].new_x1}x ${nilai.operasi_one} ${persamaanBaru[0].new_y1}y = ${persamaanBaru[0].new_a1}`
    let eliminasi2 = `${persamaanBaru[1].new_x2}x ${nilai.operasi_one} ${persamaanBaru[1].new_y2}y = ${persamaanBaru[1].new_a2}`
    let hasilX = `${((persamaanBaru[0].new_a1 * new_kaliKpk.y) - (persamaanBaru[1].new_a2 * new_kaliKpk.y_1)) / ((persamaanBaru[0].new_x1 * new_kaliKpk.y) - (persamaanBaru[1].new_x2 * new_kaliKpk.y_1))}`
    let hasilY = `${((persamaanBaru[0].new_a1 * new_kaliKpk.x) - (persamaanBaru[1].new_a2 * new_kaliKpk.x_1)) / ((persamaanBaru[0].new_y1 * new_kaliKpk.x) - (persamaanBaru[1].new_y2 * new_kaliKpk.x_1))}`
    let hasilX_1 = nilai.x_one * hasilX
    let hasilY_1 = nilai.y_one * hasilY
   
    
    $("#hasil").html(`
    <br>  
    <p>Eliminasi Z</p>
    <textarea class="bg-gray-100 p-4 w-full" id="foo" disabled>${persamaan1}
${persamaan2}</textarea>

    <input class="bg-gray-100 p-4 w-full mb-2" disabled value="${eliminasi1}">
    <br>
    <textarea class="bg-gray-100 p-4 w-full" id="foo" disabled>${persamaan2}
${persamaan3}</textarea>

    <input class="bg-gray-100 p-4 w-full mb-2" disabled value="${eliminasi2}">
    
    <p class="mt-2">Eliminasi X</p>
    <textarea class="bg-gray-100 p-4 w-full" id="foo" disabled>${eliminasi1}
${eliminasi2}</textarea>

    <textarea class="bg-gray-100 p-4 w-full" id="foo" disabled>${persamaanBaru[0].new_x1 * new_kaliKpk.x}x ${nilai.operasi_one} ${persamaanBaru[0].new_y1 * new_kaliKpk.x}y = ${persamaanBaru[0].new_a1 * new_kaliKpk.x}
${persamaanBaru[1].new_x2 * new_kaliKpk.x_1}x ${nilai.operasi_one} ${persamaanBaru[1].new_y2 * new_kaliKpk.x_1}y = ${persamaanBaru[1].new_a2 * new_kaliKpk.x_1}</textarea>

    
    <input class="bg-gray-100 p-4 w-full mb-2" disabled value="${(persamaanBaru[0].new_y1 * new_kaliKpk.x) - (persamaanBaru[1].new_y2 * new_kaliKpk.x_1)}y = ${(persamaanBaru[0].new_a1 * new_kaliKpk.x) - (persamaanBaru[1].new_a2 * new_kaliKpk.x_1)}">
    
    <input class="bg-gray-100 p-4 w-full mb-2" disabled value="y = ${hasilY}">
    
    
    <p class="mt-2">Subtitusi Y</p>
    <textarea class="bg-gray-100 p-4 w-full" id="foo" disabled>${eliminasi1}
${persamaanBaru[0].new_x1}x ${nilai.operasi_one} ${persamaanBaru[0].new_y1}(${hasilY}) = ${persamaanBaru[0].new_a1}</textarea>

    <textarea class="bg-gray-100 p-4 w-full" id="foo" disabled>${persamaanBaru[0].new_x1}x ${nilai.operasi_one} ${persamaanBaru[0].new_y1 * hasilY} = ${persamaanBaru[0].new_a1}
${persamaanBaru[0].new_x1}x = ${persamaanBaru[0].new_a1} + ${(persamaanBaru[0].new_y1 * hasilY) * -1}</textarea>

    
    <input class="bg-gray-100 p-4 w-full mb-2" disabled value="${persamaanBaru[0].new_x1}x = ${persamaanBaru[0].new_a1 + (persamaanBaru[0].new_y1 * hasilY) * -1}">
    
    <input class="bg-gray-100 p-4 w-full mb-2" disabled value="x = ${hasilX}">

    <p class="mt-2">Hasil Z</p>
    <textarea class="bg-gray-100 p-4 w-full" id="foo" disabled>${nilai.x_one}(${hasilX}) ${nilai.operasi_one} ${nilai.y_one}(${hasilY}) ${nilai.operasi_one2} ${nilai.z_one}z = ${nilai.a_one}
${hasilX_1} ${nilai.operasi_one} ${hasilY_1} ${nilai.operasi_one2} ${nilai.z_one}z = ${nilai.a_one}</textarea>

    <input class="bg-gray-100 p-4 w-full mb-2" disabled value="${hasilX_1 + hasilY_1} ${nilai.operasi_one2} ${nilai.z_one}z = ${nilai.a_one}">
    <input class="bg-gray-100 p-4 w-full mb-2" disabled value="${nilai.z_one}z = ${parseInt(nilai.a_one) + ((hasilX_1 + hasilY_1)*-1)}">
    <input class="bg-gray-100 p-4 w-full mb-2" disabled value="z = ${(parseInt(nilai.a_one) + ((hasilX_1 + hasilY_1)*-1)) / parseInt(nilai.z_one)}  ">
    `)
}


campuran.addEventListener('click', function () {
    let data = []
    data = [
        {
            x_one: $('#x_one').val(),
            y_one: $('#y_one').val(),
            z_one: $('#z_one').val(),
            a_one: $('#a_one').val(),
            operasi_one: $('#operasi_one').val(),
            operasi_one2: $('#operasi_one2').val(),
        },
        {
            x_two: $('#x_two').val(),
            y_two: $('#y_two').val(),
            z_two: $('#z_two').val(),
            a_two: $('#a_two').val(),
            operasi_two: $('#operasi_two').val(),
            operasi_two2: $('#operasi_two2').val(), 
        },
        {
            x_three: $('#x_three').val(),
            y_three: $('#y_three').val(),
            z_three: $('#z_three').val(),
            a_three: $('#a_three').val(),
            operasi_three: $('#operasi_three').val(),
            operasi_three2: $('#operasi_three2').val(), 
        }
    ]

    data[3] = {
        z1: kpk(data[0].z_one, data[1].z_two),
        z2: kpk(data[1].z_two, data[2].z_three)
    }

    let nilai = []
    nilai.push(data)

    hasilCampuran = metodeCampuran(nilai)
})
