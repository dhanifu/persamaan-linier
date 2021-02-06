$("button").click(function () {
    let a = $("#11").val();
    let b = $("#12").val();
    let c = $("#13").val();
    let d = $("#21").val();
    let e = $("#22").val();
    let f = $("#23").val();
    let g = $("#31").val();
    let h = $("#32").val();
    let i = $("#33").val();

    //find determinant
    let det = (a * e * i) + (b * f * g) + (c * d * h) - (g * e * c) - (h * f * a) - (i * d * b);
    $("#det").text("Determinan : " + det);

    //adjoin
    let a11 = (e * i) - (h * f);
    let a12 = (d * i) - (g * f);
    let a13 = (d * h) - (g * e);
    let a21 = (b * i) - (h * c);
    let a22 = (a * i) - (g * c);
    let a23 = (a * h) - (g * b);
    let a31 = (b * f) - (e * c);
    let a32 = (a * f) - (d * c);
    let a33 = (a * e) - (d * b);

    //invers
    let ina11 = (1 / det * (a11 * (1))).toFixed(2);
    let ina12 = (1 / det * (a12 * (-1))).toFixed(2);
    let ina13 = (1 / det * (a13 * (1))).toFixed(2);
    let ina21 = (1 / det * (a21 * (-1))).toFixed(2);
    let ina22 = (1 / det * (a22 * (1))).toFixed(2);
    let ina23 = (1 / det * (a23 * (-1))).toFixed(2);
    let ina31 = (1 / det * (a31 * (1)));
    let ina32 = (1 / det * (a32 * (-1)));
    let ina33 = (1 / det * (a33 * (1)));

    $("#adj").text("Adjoin : ")
    $("#a1").text(a11);
    $("#a2").text(a12);
    $("#a3").text(a13);
    $("#a4").text(a21);
    $("#a5").text(a22);
    $("#a6").text(a23);
    $("#a7").text(a31);
    $("#a8").text(a32);
    $("#a9").text(a33);

    $("#inv").text("Hasil Inverse : ")
    $("#1").text(ina11);
    $("#2").text(ina21);
    $("#3").text(ina31);
    $("#4").text(ina12);
    $("#5").text(ina22);
    $("#6").text(ina32);
    $("#7").text(ina13);
    $("#8").text(ina23);
    $("#9").text(ina33);
});