const eliminasi = document.getElementById('eliminasi')

let eliminasiHP = {}


// akan mengembalikan HP nya
const metodeEliminasi = () => {
    // Nilai HP
    let hasil = {}

    let nilai = getData();
    let kaliKpk = {
        z1: bagi(nilai.kpk_x, nilai.z_one),
        z2: bagi(nilai.kpk_x, nilai.z_two),

        z_1: bagi(nilai.kpk_y, nilai.z_two),
        z_2: bagi(nilai.kpk_y, nilai.z_three),
    }

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
    
    
    <p class="mt-2">Eliminasi Y</p>
    <textarea class="bg-gray-100 p-4 w-full" id="foo" disabled>${eliminasi1}
${eliminasi2}</textarea>

    <textarea class="bg-gray-100 p-4 w-full" id="foo" disabled>${persamaanBaru[0].new_x1 * new_kaliKpk.y}x ${nilai.operasi_one} ${persamaanBaru[0].new_y1 * new_kaliKpk.y}y = ${persamaanBaru[0].new_a1 * new_kaliKpk.y}
${persamaanBaru[1].new_x2 * new_kaliKpk.y_1}x ${nilai.operasi_one} ${persamaanBaru[1].new_y2 * new_kaliKpk.y_1}y = ${persamaanBaru[1].new_a2 * new_kaliKpk.y_1}</textarea>

    
    <input class="bg-gray-100 p-4 w-full mb-2" disabled value="${(persamaanBaru[0].new_x1 * new_kaliKpk.y) - (persamaanBaru[1].new_x2 * new_kaliKpk.y_1)}y = ${(persamaanBaru[0].new_a1 * new_kaliKpk.y) - (persamaanBaru[1].new_a2 * new_kaliKpk.y_1)}">
    
    <input class="bg-gray-100 p-4 w-full mb-2" disabled value="x = ${hasilX}">

    <p class="mt-2">Hasil Z</p>
    <textarea class="bg-gray-100 p-4 w-full" id="foo" disabled>${nilai.x_one}(${hasilX}) ${nilai.operasi_one} ${nilai.y_one}(${hasilY}) ${nilai.operasi_one2} ${nilai.z_one}z = ${nilai.a_one}
${hasilX_1} ${nilai.operasi_one} ${hasilY_1} ${nilai.operasi_one2} ${nilai.z_one}z = ${nilai.a_one}</textarea>

    <input class="bg-gray-100 p-4 w-full mb-2" disabled value="${hasilX_1 + hasilY_1} ${nilai.operasi_one2} ${nilai.z_one}z = ${nilai.a_one}">
    <input class="bg-gray-100 p-4 w-full mb-2" disabled value="${nilai.z_one}z = ${parseInt(nilai.a_one) + ((hasilX_1 + hasilY_1)*-1)}">
    <input class="bg-gray-100 p-4 w-full mb-2" disabled value="z = ${(parseInt(nilai.a_one) + ((hasilX_1 + hasilY_1)*-1)) / parseInt(nilai.z_one)}  ">
    `)
}


eliminasi.addEventListener('click', function () {
    eliminasiHP = metodeEliminasi()
})
