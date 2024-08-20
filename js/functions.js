function calcSample() {
    let pop = Number(document.getElementById("sp-pop").value);
    let err = Number(document.getElementById("sp-err").value)/100;
    let conf = confidence(Number(document.getElementById("sp-conf").value));
    let dist = distribution(Number(document.getElementById("sp-dist").value));

    if (pop == "") {
        alert("Por favor preencha o campo de população!");
    }

    if (err == "") {
        alert("Por favor preencha a margem de erro!");
    }

    let d1 = (conf * conf) * dist;
    let d2 = (pop - 1.0) * (err * err) + d1;

    if (d2 > 0.0) {
        document.getElementById("sp-res").innerHTML = Math.ceil(pop * d1 / d2);
    }
}

function calcErr() {
    let pop = Number(document.getElementById('er-pop').value);
    let sample = Number(document.getElementById('er-sample').value);
    let conf = confidence(Number(document.getElementById('er-conf').value));

    if (pop == "") {
        alert("Por favor preencha o campo de população!");
    }

    if (sample == "") {
        alert("Por favor preencha o tamanho da amostra!");
    }

    if (pop < sample) {
        alert("A amostra não pode ser maior do que a população!");
    }

    console.log(pop < sample)

    let err = (Math.sqrt((0.25 / sample)) * conf) * (Math.sqrt((pop - sample) / (pop - 1)) * 100) || 0;

    document.getElementById("er-res").innerHTML = err.toFixed(2) + "%"
}

function confidence(conf_value) {
    if (conf_value == 90) {
        conf = 1.64485
    } else if (conf_value == 95) {
        conf = 1.95996
    } else {
        conf = 2.57583
    }
    return conf
}

function distribution(dist_value) {
    if (dist_value == 8020) {
        dist = .2 * .8
    } else {
        dist = .5**2
    }
    return dist
}