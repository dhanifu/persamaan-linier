const matriks = document.getElementById('matriks')

let hasilMatriks = {}


// akan mengembalikan HP nya
const metodeMatriks = (data) => {
    // Nilai HP
    let hasil = {}

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

    let det1 = `[(${nilai.x_one}) (${nilai.y_two}) (${nilai.z_three}) + (${nilai.y_one}) (${nilai.z_two}) (${nilai.x_three}) + (${nilai.z_one}) (${nilai.x_two}) (${nilai.y_three})]`
    let det2 = `[(${nilai.x_three}) (${nilai.y_two}) (${nilai.z_one}) + (${nilai.y_three}) (${nilai.z_two}) (${nilai.x_one}) + (${nilai.z_three}) (${nilai.x_two}) (${nilai.y_one})]`
    let det3 = `[(${nilai.x_one * nilai.y_two * nilai.z_three}) + (${nilai.y_one * nilai.z_two * nilai.x_three}) + (${nilai.z_one * nilai.x_two * nilai.y_three})] - [(${nilai.x_three * nilai.y_two * nilai.z_one}) + (${nilai.y_three * nilai.z_two * nilai.x_one}) + (${nilai.z_three * nilai.x_two * nilai.y_one})]`
    let detA = ((nilai.x_one * nilai.y_two * nilai.z_three) + (nilai.y_one * nilai.z_two * nilai.x_three) + (nilai.z_one * nilai.x_two * nilai.y_three)) - ((nilai.x_three * nilai.y_two * nilai.z_one) + (nilai.y_three * nilai.z_two * nilai.x_one) + (nilai.z_three * nilai.x_two * nilai.y_one))

    let m11 = (nilai.y_two * nilai.z_three) - (nilai.y_three * nilai.z_two)
    let m12 = (nilai.x_two * nilai.z_three) - (nilai.x_three * nilai.z_two)
    let m13 = (nilai.x_two * nilai.y_three) - (nilai.x_three * nilai.y_two)

    let m21 = (nilai.y_one * nilai.z_three) - (nilai.y_three * nilai.z_one)
    let m22 = (nilai.x_one * nilai.z_three) - (nilai.x_three * nilai.z_one)
    let m23 = (nilai.x_one * nilai.y_three) - (nilai.x_three * nilai.y_one)

    let m31 = (nilai.y_one * nilai.z_two) - (nilai.y_two * nilai.z_one)
    let m32 = (nilai.x_one * nilai.z_two) - (nilai.x_two * nilai.z_one)
    let m33 = (nilai.x_one * nilai.y_two) - (nilai.x_two * nilai.y_one)

    let k11 = kofaktor(m11, 1, 1)
    let k12 = kofaktor(m12, 1, 2)
    let k13 = kofaktor(m13, 1, 3)

    let k21 = kofaktor(m21, 2, 1)
    let k22 = kofaktor(m22, 2, 2)
    let k23 = kofaktor(m23, 2, 3)

    let k31 = kofaktor(m31, 3, 1)
    let k32 = kofaktor(m32, 3, 2)
    let k33 = kofaktor(m33, 3, 3)

    let k11_1 = k11 * nilai.a_one
    let k21_1 = k21 * nilai.a_two
    let k31_1 = k31 * nilai.a_three

    let k12_1 = k12 * nilai.a_one
    let k22_1 = k22 * nilai.a_two
    let k32_1 = k32 * nilai.a_three

    let k13_1 = k13 * nilai.a_one
    let k23_1 = k23 * nilai.a_two
    let k33_1 = k33 * nilai.a_three

    let hasil_x = (k11_1 + k21_1 + k31_1) / detA
    let hasil_y = (k12_1 + k22_1 + k32_1) / detA
    let hasil_z = (k13_1 + k23_1 + k33_1) / detA

    $("#hasil").html(`
    <br>
    <textarea class="bg-gray-100 p-4 block w-full" id="foo" disabled rows="3">| ${nilai.x_one} ${nilai.y_one} ${nilai.z_one} | | x | | ${nilai.a_one} |
| ${nilai.x_two} ${nilai.y_two} ${nilai.z_two} | | y | | ${nilai.a_two} |
| ${nilai.x_three} ${nilai.y_three} ${nilai.z_three} | | z | | ${nilai.a_three} |</textarea>

    <textarea class="bg-gray-100 p-4 block w-full mb-2" id="foo" disabled rows="3">| ${nilai.x_one} ${nilai.y_one} ${nilai.z_one} | ${nilai.x_one} ${nilai.y_one}
| ${nilai.x_two} ${nilai.y_two} ${nilai.z_two} | ${nilai.x_two} ${nilai.y_two}
| ${nilai.x_three} ${nilai.y_three} ${nilai.z_three} | ${nilai.x_three} ${nilai.y_three}</textarea>

    <input class="bg-gray-100 p-4 block w-full mb-2" disabled value="det A = ${det1} - ${det2}">
    <input class="bg-gray-100 p-4 block w-full mb-2" disabled value="det A = ${det3}">
    <input class="bg-gray-100 p-4 block w-full mb-2" disabled value="det A = ${detA}">

    <!-- K1 -->
    <p class="bg-gray-100 p-4 block w-full mb-2">M <sub>11</sub> = | ${nilai.y_two} ${nilai.z_two} |<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | ${nilai.y_three} ${nilai.z_three} |<br>
    K <sub>11</sub> = (-1) <sup>1 + 1</sup> (${m11}) = ${k11}</p>

    <p class="bg-gray-100 p-4 block w-full mb-2">M <sub>12</sub> = | ${nilai.x_two} ${nilai.z_two} |<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | ${nilai.x_three} ${nilai.z_three} |<br>
    K <sub>12</sub> = (-1) <sup>1 + 2</sup> (${m12}) = ${k12}</p>

    <p class="bg-gray-100 p-4 block w-full mb-2">M <sub>13</sub> = | ${nilai.x_two} ${nilai.y_two} |<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | ${nilai.x_three} ${nilai.y_three} |<br>
    K <sub>13</sub> = (-1) <sup>1 + 3</sup> (${m13}) = ${k13}</p>

    <!-- K2 -->
    <p class="bg-gray-100 p-4 block w-full mb-2">M <sub>21</sub> = | ${nilai.y_one} ${nilai.z_one} |<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | ${nilai.y_three} ${nilai.z_three} |<br>
    K <sub>21</sub> = (-1) <sup>2 + 1</sup> (${m21}) = ${k21}</p>

    <p class="bg-gray-100 p-4 block w-full mb-2">M <sub>22</sub> = | ${nilai.x_one} ${nilai.z_one} |<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | ${nilai.x_three} ${nilai.z_three} |<br>
    K <sub>22</sub> = (-1) <sup>2 + 2</sup> (${m22}) = ${k22}</p>

    <p class="bg-gray-100 p-4 block w-full mb-2">M <sub>23</sub> = | ${nilai.x_one} ${nilai.y_one} |<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | ${nilai.x_three} ${nilai.y_three} |<br>
    K <sub>23</sub> = (-1) <sup>2 + 3</sup> (${m23}) = ${k23}</p>

    <!-- K3 -->
    <p class="bg-gray-100 p-4 block w-full mb-2">M <sub>31</sub> = | ${nilai.y_one} ${nilai.z_one} |<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | ${nilai.y_two} ${nilai.z_two} |<br>
    K <sub>31</sub> = (-1) <sup>3 + 1</sup> (${m31}) = ${k31}</p>

    <p class="bg-gray-100 p-4 block w-full mb-2">M <sub>32</sub> = | ${nilai.x_one} ${nilai.z_one} |<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | ${nilai.x_two} ${nilai.z_two} |<br>
    K <sub>32</sub> = (-1) <sup>3 + 2</sup> (${m32}) = ${k32}</p>

    <p class="bg-gray-100 p-4 block w-full mb-2">M <sub>33</sub> = | ${nilai.x_one} ${nilai.y_one} |<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | ${nilai.x_two} ${nilai.y_two} |<br>
    K <sub>33</sub> = (-1) <sup>3 + 3</sup> (${m33}) = ${k33}</p>

    <!-- kof A -->
    <textarea class="bg-gray-100 p-4 block w-full mb-2" id="foo" disabled rows="3">             | ${k11} ${k21} ${k31} |
kof A = | ${k12} ${k22} ${k32} |
             | ${k13} ${k23} ${k33} |</textarea>

    <textarea class="bg-gray-100 p-4 block w-full mb-2" id="foo" disabled rows="3">| x |           | ${k11} ${k21} ${k31} | | ${nilai.a_one} |
| y | = 1/${detA} | ${k12} ${k22} ${k32} | | ${nilai.a_two} |
| z |           | ${k13} ${k23} ${k33} | | ${nilai.a_three} |</textarea>

    <textarea class="bg-gray-100 p-4 block w-full mb-2" id="foo" disabled rows="3">| x |           | (${k11_1}) + (${k21_1}) + (${k31_1}) |
| y | = 1/${detA} | (${k12_1}) + (${k22_1}) + (${k32_1}) |
| z |           | (${k13_1}) + (${k23_1}) + (${k33_1}) |</textarea>

    <textarea class="bg-gray-100 p-4 block w-full mb-2" id="foo" disabled rows="3">| x |           | ${k11_1 + k21_1 + k31_1} |
| y | = 1/${detA} | ${k12_1 + k22_1 + k32_1} |
| z |           | ${k13_1 + k23_1 + k33_1} |</textarea>

    <textarea class="bg-gray-100 p-4 block w-full mb-2" id="foo" disabled rows="3">| x |    | ${hasil_x} |
| y | = | ${hasil_y} |
| z |    | ${hasil_z} |</textarea>
    `)
}


matriks.addEventListener('click', function () {
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

    hasilMatriks = metodeMatriks(nilai)
})
