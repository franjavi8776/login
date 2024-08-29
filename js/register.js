// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
  })()

const d = document;

const registro = (event) => {
  event.preventDefault()

  let nombre = d.getElementById("regUser").value.toLowerCase();

  let contrasenia = d.getElementById("regPassword").value.toLowerCase();

  if(nombre.trim() === "" || contrasenia.trim() === "") {
    alert("los campos no pueden ir vacio")
    return;
  }

  const usuario = {
    nombre,
    contrasenia
  }

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  let usuarioEncontrado = usuarios.some((usuario)=> usuario.nombre === nombre)

  if(usuarioEncontrado) {
    alert("el usuario ya existe")
  } else {
    usuarios.push(usuario)
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    window.location.href = "login.html"
  }
  d.getElementById("regForm").reset()

}

d.getElementById("regForm").addEventListener("submit", registro)
