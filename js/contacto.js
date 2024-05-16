 document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); 

      const email = document.getElementById('exampleInputEmail1').value;
      const password = document.getElementById('exampleInputPassword1').value;
      const select = document.getElementById('exampleSelect1').value;
      const textarea = document.getElementById('exampleTextarea').value;
      const radio = document.querySelector('input[name="optionsRadios"]:checked');
      const checkboxDefault = document.getElementById('flexCheckDefault').checked;
      const checkboxChecked = document.getElementById('flexCheckChecked').checked;
      const radioText = radio.dataset.text;

      const infoHTML = `
        <h2>Ficha de Datos de la Persona</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password.replace(/./g, '*')}</p>
        <p><strong>Te interesa:</strong> ${select}</p>
        <p><strong>Tu Comentario:</strong> ${ textarea.trim() === '' ? 'sin datos' : textarea.trim()}</p>
        <p><strong>Cliente:</strong> ${radioText}</p>
        <p><strong>Recibir novedades:</strong> ${checkboxDefault ? 'Si' : 'No'}</p>
        <p><strong>Terminos y condiciones:</strong> ${checkboxChecked ? 'Si' : 'No'}</p>

        <button class="btn btn-primary" onclick="window.print()">Imprimir</button>
      `;

      const infoDiv = document.getElementById('infoPersona');
      infoDiv.innerHTML = infoHTML;
    });
  });