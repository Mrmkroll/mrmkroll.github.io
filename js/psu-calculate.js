function Calc() {

    var a = document.form.cpu_tdp.value;
    var b = document.getElementById("cpu-qty").value;
    var c = document.form.gpu_tdp.value;
    var d = document.getElementById("gpu-qty").value;
    var e = document.getElementById("ram-qty").value;
    var f = document.getElementById("sata-qty").value;
    var g = document.getElementById("nvme-qty").value;
    var h = document.getElementById("hdd-qty").value;
    var i = document.getElementById("fan-qty").value;

    var j = parseInt(a) * 1.2 * b;
    var k = parseInt(c) * 1.2 * d;
    var l = 7 * e;
    var m = 12 * f;
    var n = 25 * g;
    var o = 25 * h;
    var p = 4 * i;

    if (a == "") {
        alert("CPUのTDPを入力してください。");
        document.form.cpu_tdp.focus();
        return
    }
    else if (!a.match(/[0-9]{2}/)) {
        alert("CPUのTDPに入力した値を修正してください。");
        document.form.cpu_tdp.focus();
        return
    }
    else if (c == "") {
        var q = parseInt(j) + parseInt(l) + parseInt(m) + parseInt(n) + parseInt(o) + parseInt(p) + 50;
        var r = parseInt(q) * 2;
    }
    else {
        var q = parseInt(j) + parseInt(k) + parseInt(l) + parseInt(m) + parseInt(n) + parseInt(o) + parseInt(p) + 50;
        var r = parseInt(q) * 2;
    }

    document.form.watt.value = q;
    document.form.recommend_watt.value = r;
}