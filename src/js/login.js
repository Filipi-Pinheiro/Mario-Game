const form = document.getElementById('login_form');
const input = document.querySelector('.login_input')
const botao = document.querySelector('.login_button')

const validarInput = ({ target }) => {
  if(target.value.length > 2){
    botao.removeAttribute('disabled')
    return
  }
    botao.setAttribute('disabled', '')
}

const guardarValores = (event) => {
  event.preventDefault()
  localStorage.setItem('player', input.value)
  window.location = 'src/pages/game.html'
}

input.addEventListener('input', validarInput)
form.addEventListener('submit', guardarValores)
