const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');


const validateInput = ({ target }) => {
  if (target.value.length >= 3) {
    button.removeAttribute('disabled');
    return;
  }

  button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
  event.preventDefault();

  localStorage.setItem('player', input.value);

  var nome = input.value; 
  
  fetch("/usuarios/cadastrar", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        nomeServer: nome,
    })
    
  })

  window.location = '4-Jogo.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);


