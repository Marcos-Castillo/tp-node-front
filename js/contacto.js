document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const errorMessagesDiv = document.getElementById('errorMessages');
  const infoDiv = document.getElementById('infoPersona');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); 

      errorMessagesDiv.innerHTML = '';

      const email = document.getElementById('exampleInputEmail1').value;
      const password = document.getElementById('exampleInputPassword1').value;
      const select = document.getElementById('exampleSelect1').value;
      const textarea = document.getElementById('exampleTextarea').value;
      const radio = document.querySelector('input[name="optionsRadios"]:checked');
      const checkboxDefault = document.getElementById('flexCheckDefault').checked;
      const checkboxChecked = document.getElementById('flexCheckChecked').checked;

      let errorMessages = [];

      if (!email) errorMessages.push('El campo Email es requerido.');
      if (!password) errorMessages.push('El campo Password es requerido.');
      if (!select) errorMessages.push('El campo Te interesa es requerido.');
      if (!radio) errorMessages.push('El campo Cliente es requerido.');

      if (errorMessages.length > 0) {
          errorMessagesDiv.innerHTML = errorMessages.map(msg => `<p class="text-danger">${msg}</p>`).join('');
          return;
      }

      const radioText = radio.dataset.text;

      const infoHTML = `
          <h2>Ficha de Datos de la Persona</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Password:</strong> ${password.replace(/./g, '*')}</p>
          <p><strong>Te interesa:</strong> ${select}</p>
          <p><strong>Tu Comentario:</strong> ${textarea.trim() === '' ? 'sin datos' : textarea.trim()}</p>
          <p><strong>Cliente:</strong> ${radioText}</p>
          <p><strong>Recibir novedades:</strong> ${checkboxDefault ? 'Sí' : 'No'}</p>
          <p><strong>Términos y condiciones:</strong> ${checkboxChecked ? 'Sí' : 'No'}</p>
          <button class="btn btn-primary" onclick="window.print()">Imprimir</button>
      `;

      infoDiv.innerHTML = infoHTML;
  });
});
