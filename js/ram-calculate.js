function Calc() {
    var a;
    var b;
    var c;

    a = document.form.clock.value;
    b = document.form.timing.value;
    c = parseInt(b) / (parseInt(a) / 2 * 1000000) * 1000000000;

    if (a == "" && b == "") {
        alert("クロックとタイミングを入力してください。");
    }
    else if (a == "" && !b.match(/[0-9]{2}/)) {
        alert("クロックを入力し、タイミングに入力した値を修正してください。");
    }
    else if (a == "") {
        alert("クロックを入力してください。");
        document.form.clock.focus();
    }
    else if (b == "" && !a.match(/[0-9]{4}/)) {
        alert("タイミングを入力し、クロックに入力した値を修正してください。");
    }
    else if (b == "") {
        alert("タイミングを入力してください。");
        document.form.timing.focus();
    }
    else if (!a.match(/[0-9]{4}/) && !b.match(/[0-9]{2}/)) {
        alert("入力された値が両方とも間違っています。");
    }
    else if (!a.match(/[0-9]{4}/)) {
        alert("クロックに入力された値が間違っています。");
        document.form.clock.focus();
    }
    else if (!b.match(/[0-9]{2}/)) {
        alert("タイミングに入力された値が間違っています。");
        document.form.timing.focus();
    }
    else {
        document.form.ratency.value = Math.floor(c * 100) / 100;
    }
}