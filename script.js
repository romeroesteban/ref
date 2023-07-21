// Obtener los elementos del DOM
const submitIcon = document.getElementById("submit-icon");
const emailInput = document.getElementById("email");

// Agregar un evento click al div con id="submit-icon"
submitIcon.addEventListener("click", () => {
  // Obtener el valor del correo electrónico ingresado
  const emailAddress = emailInput.value;

  // Validar si el correo electrónico es válido (puedes agregar una validación más avanzada aquí)
  if (isValidEmail(emailAddress)) {
    // Aquí puedes agregar código para enviar el correo electrónico, por ejemplo, a través de una API o servidor de correo
    console.log("Enviando correo a:", emailAddress);
    alert("¡Correo enviado con éxito!");
  } else {
    alert("Ingresa un correo electrónico válido.");
  }
});

// Función para validar el formato del correo electrónico
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
