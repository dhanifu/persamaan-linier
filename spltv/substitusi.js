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
    $("#hasil").append(`
        <p>Substitusikan x ke persamaan 2</p>
        <textarea class="bg-gray-100 p-4 w-full" rows="6" cols="30" id="foo">${persamaan2}
${nilai.x_two}(${pindah_ruas}) ${cekruas_y} ${cekruas_z} = ${nilai.a_two}
${new_x}y ${nilai.x_two * zone}z ${cekRuas(nilai.x_two * nilai.a_one)} ${cekRuasVar(nilai.y_two, 'y')} ${cekRuasVar(nilai.z_two, 'z')} = ${nilai.a_two}
${tambah(parseInt(new_x), parseInt(nilai.y_two))}y ${tambah(parseInt(new_z), parseInt(nilai.z_two))}z ${cekRuas(nilai.x_two * nilai.a_two)} = ${nilai.a_two}
${tambah(parseInt(new_x), parseInt(nilai.y_two))}y ${tambah(parseInt(new_z), parseInt(nilai.z_two))}z = ${nilai.a_two} ${cekRuas(pindah_ruas2)}
${tambah(parseInt(new_x), parseInt(nilai.y_two))}y ${tambah(parseInt(new_z), parseInt(nilai.z_two))}z = ${pers1}</textarea>
        <br>
    `)

    // Substitusi x ke pers. 3
    $("#hasil").appen(`
        <p>Substitusikan x ke persamaan 3</p>
        <textarea class="bg-gray-100 p-4 w-full" rows="7" cols="30">Can beres</textarea>
    `)

    return {x: 1, y: 2, z: 3}
};

substitusi.addEventListener("click", function () {
    hasilSubstitusi = metodeSubstitusi()
});
