function promptTexto() {
    const digiteTexto = prompt(`Digite seu nome:`)
    const textoAMudar = document.querySelector('#text1')
    textoAMudar.innerText = `E aí ${digiteTexto}! Você está deixando o seu site dinâmico.`
}

let contagem = 0
const contador = document.querySelector('#contador')
const textoContador = document.querySelector('#textoContador')

function incrementar() {
    contagem += 1
    textoContador.innerText = `O contador está com ${contagem} cliques`
    contador.innerText = contagem
}

function zerar() {
    contagem = 0
    textoContador.innerText = ''
}