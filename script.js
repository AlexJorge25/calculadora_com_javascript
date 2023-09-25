var caixa = "";
var caixa2 = "";
var sinal = "";
var botao = document.querySelectorAll(".botao2")
function inserir(num) {
    if (sinal !== "") {
        let numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + num;
        caixa2 += num;
        
    }
    else {
        let numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero + num;
        caixa += num;

    }
}

function excluir() {
    document.getElementById("resultado").textContent = ""
    caixa = "";
    caixa2 = "";
    sinal = "";
}

function somar() {
    document.getElementById("resultado").textContent = ""
    sinal = "+"
}
function subtracao() {
    document.getElementById("resultado").textContent = ""
    sinal = "-"
}
function multiplicacao() {
    document.getElementById("resultado").textContent = ""
    sinal = "x"
}
function divisao() {
    document.getElementById("resultado").textContent = ""
    sinal = "/"
}
function resultado() {
    botao.onclick = function () {
        inserir();
    }
    switch (sinal) {
        case "+":
            var resultado = parseFloat(caixa2) + parseFloat(caixa);
            break;
        case "-":
            var resultado = parseFloat(caixa2) - parseFloat(caixa);
            break;
        case "x":
            var resultado = parseFloat(caixa2) * parseFloat(caixa);
            break;
        case "/":
            var resultado = parseFloat(caixa2) / parseFloat(caixa);
            break;
        default:
            resultado = "Erro";
    }
    document.getElementById("resultado").textContent = resultado;
    caixa = "";
    caixa2 = "";
    sinal = "";
}
