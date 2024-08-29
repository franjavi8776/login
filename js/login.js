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

  let nombre = d.getElementById("logUser").value.toLowerCase();

  let contrasenia = d.getElementById("logPassword").value.toLowerCase();

  if(nombre.trim() === "" || contrasenia.trim() === "") {
    alert("los campos no pueden ir vacio")
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  let usuarioEncontrado = usuarios.find((usuario)=> usuario.nombre === nombre && usuario.contrasenia === contrasenia)

  if(usuarioEncontrado) {
    localStorage.setItem("nombre", usuarioEncontrado.nombre)
    alert("Ingreso Exitoso!!!")
    window.location.href = "home.html"
  } else {
    alert("Necesitas Registrarse")
    window.location.href = "register.html"
  }

  d.getElementById("logForm").reset()

}

d.getElementById("logForm").addEventListener("submit", registro)
