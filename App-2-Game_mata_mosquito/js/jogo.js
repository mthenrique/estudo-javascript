
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMoscaTempo = 1500

var getNivel = window.location.search
getNivel = getNivel.replace('?', '')

if(getNivel === 'normal'){
    criaMoscaTempo = 1500
}else if(getNivel === 'dificil'){
    criaMoscaTempo = 1000
}else if(getNivel === 'extremo'){
    criaMoscaTempo = 750
}

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
    tempo--
    
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    } else{
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

//Posiciona Randomicamente em X e Y a mosca
function posicaoRandomica(){
    //Remover a mosca anterior caso exista
    if(document.getElementById('mosca')){
        document.getElementById('mosca').remove()

        if(vidas > 3){
            window.location.href = 'fim-de-jogo.html'
        }else{
            document.getElementById('v' + vidas).src = "img/coracao_vazio.png"
            vidas++
        }
    } 

    //Criando posições randomicas
    var posX = Math.floor(Math.random() * largura) - 90
    var posY = Math.floor(Math.random() * altura) - 90

    posX = posX < 0 ? 0 : posX
    posY = posY < 0 ? 0 : posY

    console.log(posX, posY)

    //criar o elemento html
    var mosca = document.createElement('img')
    mosca.src = 'img/mosca.png'
    mosca.className = tamanhoRandomico() + ' ' + ladoRandomico() /*  + ' ' +  esse trcho é apenas para adicionar um espaço entre as classes */ 
    mosca.style.left = posX + 'px'
    mosca.style.top = posY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosca'
    mosca.onclick = function(){
        this.remove() //this faz referencia ao proprio elemento que estamos usando no caso a mosca
    }

    document.body.appendChild(mosca)
}

//Gera 3 tamanhos diferentes aleatoriamente
function tamanhoRandomico(){
    var classe = Math.floor(Math.random() * 3)
    
    switch(classe){
        case 0:
            return 'mosca1'

        case 1:
            return 'mosca2'
        
        case 2:
            return 'mosca3'
    }
}

//Cria a mosca randomicamente olhando para a Direita ou Esquerda
function ladoRandomico(){
    var classe = Math.floor(Math.random() * 2)
    
    switch(classe){
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'

    }
}

//Iniciar Jogo
function iniciarJogo(){
    var nivel = document.getElementById('nivel').value

    if(nivel === ''){
        document.getElementById('msgNivel').innerHTML = 'Selecione um nível para iniciar o jogo'
        return false
    }

    window.location.href = "game.html?" + nivel
}