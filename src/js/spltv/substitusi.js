let hasilSubstitusi = {};

const metodeSubstitusi = () => {
    let nilai = getData();
    let kaliKpk = {
        z1: bagi(nilai.kpk_x, nilai.z_one),
        z2: bagi(nilai.kpk_x, nilai.z_two),

        z_1: bagi(nilai.kpk_y, nilai.z_two),
        z_2: bagi(nilai.kpk_y, nilai.z_three),
    }

    // Buat persamaan doang (plus minus)
    let persamaan1 = `${nilai.x_one}x ${cekRuasVar(nilai.y_one, 'y')} ${cekRuasVar(nilai.z_one, 'z')} = ${nilai.a_one}`
    let persamaan2 = `${nilai.x_two}x ${cekRuasVar(nilai.y_two, 'y')} ${cekRuasVar(nilai.z_two, 'z')} = ${nilai.a_two}`
    let persamaan3 = `${nilai.x_three}x ${cekRuasVar(nilai.y_three, 'y')} ${cekRuasVar(nilai.z_three, 'z')} = ${nilai.a_three}`

    let z_one = pindahRuas(nilai.z_one)
    let cekruas_z = cekRuas(z_one) == '+ 1' || cekRuas(z_one) == '- 1'? cekRuas(z_one).substr(0,1) + ' z' : cekRuas(z_one) + 'z'

    let pindah_ruas = `${pindahRuas(nilai.y_one)}y ${cekruas_z} ${cekRuas(nilai.a_one)}`
    

    $("#hasil").html(`
        <p>Persamaan 1</p>
        <textarea class="bg-gray-100 p-4 w-full" id="foo" disabled>${persamaan1}
x = ${pindah_ruas}</textarea>
        <br>
    `)

    // Substitusikan x ke pers. 2
    let cekruas_y = cekRuas(nilai.y_two) == '+ 1' || cekRuas(nilai.y_two) == '- 1'? cekRuas(nilai.y_two).substr(0,1) + ' y' : cekRuas(nilai.y_two) + 'y'
    cekruas_z = cekRuas(nilai.z_two) == '+ 1' || cekRuas(nilai.z_two) == '- 1'? cekRuas(nilai.z_two).substr(0,1) + ' z' : cekRuas(nilai.z_two) + 'z'
    let yone = pindahRuas(nilai.y_one)
    let zone = pindahRuas(nilai.z_one)

    let new_x = nilai.x_two * pindahRuas(nilai.y_one)
    let new_z = nilai.x_two * pindahRuas(nilai.z_one)
    
    let pindah_ruas2 = pindahRuas(nilai.x_two * nilai.a_one)
    let pers1 = tambah(parseInt(nilai.a_two), parseInt(pindah_ruas2))

    let pers1_y = tambah(parseInt(new_x), parseInt(nilai.y_two))
    let pers1_z = tambah(parseInt(new_z), parseInt(nilai.z_two))
    let pers1_a = tambah(parseInt(nilai.a_two), parseInt(pindah_ruas2))
    let pers_1 = `${tambah(parseInt(new_x), parseInt(nilai.y_two))}y ${tambah(parseInt(new_z), parseInt(nilai.z_two))}z = ${pers1}`

    $("#hasil").append(`
        <p>Substitusikan x ke persamaan 2</p>
        <textarea class="bg-gray-100 p-4 w-full" rows="6" cols="30" id="foo" disabled>${persamaan2}
${nilai.x_two}(${pindah_ruas}) ${cekruas_y} ${cekruas_z} = ${nilai.a_two}
${new_x}y ${nilai.x_two * zone}z ${cekRuas(nilai.x_two * nilai.a_one)} ${cekRuasVar(nilai.y_two, 'y')} ${cekRuasVar(nilai.z_two, 'z')} = ${nilai.a_two}
${tambah(parseInt(new_x), parseInt(nilai.y_two))}y ${tambah(parseInt(new_z), parseInt(nilai.z_two))}z ${cekRuas(nilai.x_two * nilai.a_two)} = ${nilai.a_two}
${tambah(parseInt(new_x), parseInt(nilai.y_two))}y ${tambah(parseInt(new_z), parseInt(nilai.z_two))}z = ${nilai.a_two} ${cekRuas(pindah_ruas2)}
${tambah(parseInt(new_x), parseInt(nilai.y_two))}y ${tambah(parseInt(new_z), parseInt(nilai.z_two))}z = ${pers1}</textarea>
        <br>
    `)

    // Substitusi x ke pers. 3
    cekruas_y = cekRuas(nilai.y_three) == '+ 1' || cekRuas(nilai.y_three) == '- 1'? cekRuas(nilai.y_three).substr(0,1) + ' y' : cekRuas(nilai.y_three) + 'y'
    cekruas_z = cekRuas(nilai.z_three) == '+ 1' || cekRuas(nilai.z_three) == '- 1'? cekRuas(nilai.z_three).substr(0,1) + ' z' : cekRuas(nilai.z_three) + 'z'
    yone = pindahRuas(nilai.y_one)
    zone = pindahRuas(nilai.z_one)

    new_x = nilai.x_three * pindahRuas(nilai.y_one)
    new_z = nilai.x_three * pindahRuas(nilai.z_one)
    
    pindah_ruas2 = pindahRuas(nilai.x_three * nilai.a_one)
    pers1 = tambah(parseInt(nilai.a_three), parseInt(pindah_ruas2))

    let pers2_y = tambah(parseInt(new_x), parseInt(nilai.y_three))
    let pers2_z = tambah(parseInt(new_z), parseInt(nilai.z_three))
    let pers2_a = tambah(parseInt(nilai.a_three), parseInt(pindah_ruas2))
    let pers_2 = `${tambah(parseInt(new_x), parseInt(nilai.y_three))}y ${tambah(parseInt(new_z), parseInt(nilai.z_three))}z = ${pers1}`

    $("#hasil").append(`
        <p>Substitusikan x ke persamaan 3</p>
        <textarea class="bg-gray-100 p-4 w-full" rows="6" cols="30" id="foo" disabled>${persamaan3}
${nilai.x_three}(${pindah_ruas}) ${cekruas_y} ${cekruas_z} = ${nilai.a_three}
${new_x}y ${nilai.x_three * zone}z ${cekRuas(nilai.x_three * nilai.a_one)} ${cekRuasVar(nilai.y_three, 'y')} ${cekRuasVar(nilai.z_three, 'z')} = ${nilai.a_three}
${tambah(parseInt(new_x), parseInt(nilai.y_three))}y ${tambah(parseInt(new_z), parseInt(nilai.z_three))}z ${cekRuas(nilai.x_three * nilai.a_three)} = ${nilai.a_three}
${tambah(parseInt(new_x), parseInt(nilai.y_three))}y ${tambah(parseInt(new_z), parseInt(nilai.z_three))}z = ${nilai.a_three} ${cekRuas(pindah_ruas2)}
${tambah(parseInt(new_x), parseInt(nilai.y_three))}y ${tambah(parseInt(new_z), parseInt(nilai.z_three))}z = ${pers1}</textarea>
        <br>
    `)

    $("#hasil").append(`
        <p>Buat Persamaan Baru</p>
        <textarea class="bg-gray-100 p-4 w-full" rows="3" id="foo" disabled>${pers_2}
${pers2_y}y =  + ${pindahRuas(pers2_z)}z ${pers2_a}
y = ${pindahRuas(pers2_z)/pers2_y}z + ${pers2_a / pers2_y}</textarea>
        <br>
    `)

    let hasilZ = (pers1_a + ((pers1_y * (pers2_a / pers2_y)) * -1)) / ((pers1_y * (pindahRuas(pers2_z)/pers2_y)) + pers1_z)

    $("#hasil").append(`
    <p>Subtitusi Persamaan Baru</p>
    <textarea class="bg-gray-100 p-4 w-full" rows="6" cols="30" id="foo" disabled>${pers_1}
${pers1_y}(${pindahRuas(pers2_z)/pers2_y}z + ${pers2_a / pers2_y}) + ${pers1_z}z = ${pers1_a}
${pers1_y * (pindahRuas(pers2_z)/pers2_y)}z + ${pers1_y * (pers2_a / pers2_y)} + ${pers1_z}z = ${pers1_a}
${pers1_y * (pindahRuas(pers2_z)/pers2_y)}z + ${pers1_z}z = ${pers1_a} + ${(pers1_y * (pers2_a / pers2_y)) * -1}
${(pers1_y * (pindahRuas(pers2_z)/pers2_y)) + pers1_z}z = ${pers1_a + ((pers1_y * (pers2_a / pers2_y)) * -1)}
z = ${hasilZ}</textarea>
    <br>
`)

    let hasilY = (pers2_a + ((pers2_z * hasilZ) * -1)) / pers2_y
    $("#hasil").append(`
    <p>Subtitusi Z</p>
    <textarea class="bg-gray-100 p-4 w-full" rows="6" cols="30" id="foo" disabled>${pers_2}
${pers2_y}y + ${pers2_z}(${hasilZ}) = ${pers2_a}
${pers2_y}y + ${pers2_z * hasilZ} = ${pers2_a}
${pers2_y}y = ${pers2_a} + ${(pers2_z * hasilZ) * -1}
${pers2_y}y = ${pers2_a + ((pers2_z * hasilZ) * -1)}
y = ${hasilY}</textarea>
<br>
`)

    let hasilX = (parseInt(nilai.a_one) + ((parseInt(nilai.y_one) * hasilY) * -1) + ((parseInt(nilai.z_one) * hasilZ) * -1)) / parseInt(pindahRuas(nilai.z_one))

    $("#hasil").append(`
    <p>Mencari X</p>
    <textarea class="bg-gray-100 p-4 w-full" rows="6" cols="30" id="foo" disabled>${persamaan1}
${parseInt(nilai.x_one)}x + ${parseInt(nilai.y_one)}(${hasilY}) + ${parseInt(nilai.z_one)}(${hasilZ}) = ${parseInt(nilai.a_one)}
${parseInt(nilai.x_one)}x + ${parseInt(nilai.y_one) * hasilY} + ${parseInt(nilai.z_one * hasilZ)} = ${parseInt(nilai.a_one)}
${parseInt(nilai.x_one)}x = ${parseInt(nilai.a_one)} + ${(parseInt(nilai.y_one) * hasilY) * -1} + ${(parseInt(nilai.z_one) * hasilZ) * -1}
${parseInt(nilai.x_one)}x = ${parseInt(nilai.a_one) + ((parseInt(nilai.y_one) * hasilY) * -1) + ((parseInt(nilai.z_one) * hasilZ) * -1)}
x = ${((parseInt(nilai.a_one) + ((parseInt(nilai.y_one) * hasilY) * -1) + ((parseInt(nilai.z_one) * hasilZ) * -1))) / parseInt(nilai.x_one)     }</textarea>
<br>
`)
    return {x: 1, y: 2, z: 3}
};

substitusi.addEventListener("click", function () {
    hasilSubstitusi = metodeSubstitusi()
});
