window.onscroll = function () { miFuncion() };

var navbar = document.getElementById('navbar');

var sticky = navbar.offsetTop;

const botonFormulario = document.getElementById('botonFormulario')

function miFuncion() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky');
  }
}
document.getElementById('boton').onclick = function () {
  document.getElementById('main').style.display = ('block')
  document.getElementById('boton').style.display = ('none')
}

const validar = (e) => {
  e.preventDefault();
  const nombreFormulario = document.getElementById('nombreFormulario');
  const emailFormulario = document.getElementById('emailFormulario');
  const mensajeFormulario = document.getElementById('mensajeFormulario')
  if (nombreFormulario.value === "") {
    alert("Por favor, ingrese su nombre.");
    nombreFormulario.focus();
    return false;
  }

  if (emailFormulario.value === "") {
    alert("Por favor, ingrese su correo electrónico");
    emailFormulario.focus();
    return false;
  }

  if (!emailValido(emailFormulario.value)) {
    alert("Por favor, ingrese un correo electrónico válido");
    emailFormulario.focus();
    return false;
  }

  if (mensajeFormulario.value === "") {
    alert("Por favor, ingrese su mensaje");
    mensajeFormulario.focus();
    return false
  }

  return true && alert("Mensaje enviado");

}

const emailValido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

botonFormulario.addEventListener('click', validar)


