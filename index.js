var SetaEsquerda = window.document.getElementById("setaesquerda")
var Leonardo = window.document.getElementById("leonardo")
var Samanta = window.document.getElementById("samanta")
var Bruna = window.document.getElementById("bruna")
var SetaDireita = window.document.getElementById("setadireita")

function RolarParaDireita() {
    Leonardo.style ="display:none"
    Bruna.style ="display:flex"
    SetaDireita.style ="display:none"
    SetaEsquerda.style ="display:flex; margin-top:100px; margin-left:50px"
}

function RolarParaEsquerda() {
    Leonardo.style ="display:flex"
    Bruna.style ="display:none"
    SetaDireita.style ="display:flex"
    SetaEsquerda.style ="display:none"
}
