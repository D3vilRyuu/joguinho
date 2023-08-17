var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo(){
    altura = innerHeight
    largura = innerWidth

    console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

function posicaoRandomica() {
    var posicaoX = Math.floor(Math.random() * largura) -90
    var posicaoY = Math.floor(Math.random() * altura) -90

    posicaoX = posicaoX < 0 ? 0 : posicaoX //if else one line
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    
    // Criar o mosquito
    var mosquito = document.createElement("img")
    mosquito.src = "IMGs/mosca.png"
    mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio() //ou mosquito1 ou mosquito2 ou mosquito3
    mosquito.style.left = posicaoX + "px"
    mosquito.style.top = posicaoY + "px"
    mosquito.style.position = "absolute"

    document.body.appendChild (mosquito)
    
}

posicaoRandomica()

setInterval(function(){
    posicaoRandomica()
}, 1000)

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3) 

    switch (classe){
        case 0:
            return "mosquito1"
            break
        case 1:
            return "mosquito2"
            break
        case 2:
            return "mosquito3"
            break
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return "ladoA"
        case 1:
            return "ladoB"
    }
}