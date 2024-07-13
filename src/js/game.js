const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const musicaMario = document.querySelector('.musicaMario')
const tela = document.querySelector('.tela')
let telaType = 'dia'
const somGameOver = document.querySelector('.somGameOver')
const telaGameOver = document.querySelector('.game-over')
const botaoIniciar = document.querySelector('.botao.iniciar')
const botaoReiniciar = document.querySelector('.botao.reiniciar')
let numberScore=0
let numberScore2=0
let numberScore3=0
let interval

clouds.style.animation = 'none'
clouds.style.right = '100%'
pipe.style.animation = 'none'
pipe.style.right = '100%'

const iniciar = () =>{
  clouds.style.animation = 'clouds-animation 20s infinite linear'
  pipe.style.animation = 'pipe-animation 1s infinite linear'
  botaoIniciar.style.display = 'none'
  musicaMario.play()
  
}

const jump = () =>{
  mario.classList.add('jump')

  setTimeout(() =>{
    mario.classList.remove('jump')
    
  }, 500)
}

const gameOver = setInterval(() =>{

  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')

  const cloudsPosition = clouds.offsetLeft
  const pipePosition = pipe.offsetLeft
  
  if(pipePosition <= 80 && pipePosition > 0 && marioPosition < 50){
    
    clouds.style.animation = 'none'
    clouds.style.left = `${cloudsPosition}px`
    
    pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`
    
    mario.style.animation = 'none'
    mario.style.left = `${marioPosition}px`
    
    mario.src = '../imagens/game-over.png'
    mario.style.width = '60px'
    mario.style.marginLeft = '30px'

    clearInterval(interval)
    musicaMario.pause()
    somGameOver.play()
    botaoReiniciar.style.display = 'block'
    setTimeout(() => {
      telaGameOver.style.animation = 'game-over 6s forwards' 
  
    }, 3500)

    clearInterval(gameOver)
  }
}, 10)


document.querySelector('.botao.pulo').addEventListener('click', jump)

document.querySelector('.botao.iniciar').addEventListener('click', iniciar)

botaoReiniciar.addEventListener('click', () => {
  location.reload(true)
})

function digitos(digt){
  if(digt < 10 ){
    return(`00${digt}`)
  }else if(digt > 10 && digt < 100){
    return(`0${digt}`)
  }else{
    return(digt)
  }
}

function iniciou(){
  contagem()
  interval = setInterval(contagem, 10)
}

function contagem(){
  numberScore++
  if(numberScore == 999){
    if(telaType == 'dia'){
      tela.classList.remove('dia')
      tela.classList.add('noite')
      telaType = 'noite'
    }else{
      tela.classList.remove('noite')
      tela.classList.add('dia')
      telaType = 'dia'
    }
    numberScore = 0
    numberScore2++
  }else if(numberScore2 == 999){
    numberScore2 == 0
    numberScore3++
  }

document.querySelector('.score').innerText=digitos(numberScore3)+'.'+digitos(numberScore2)+'.'+digitos(numberScore)
      }
