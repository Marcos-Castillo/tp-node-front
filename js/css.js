document.addEventListener('DOMContentLoaded', function() {
    const switchCSS = document.getElementById('switchCSS');
    const linkElement = document.getElementById('cssLink');

    const cssState = sessionStorage.getItem('cssState');
    if (cssState === 'pink') {
      switchCSS.checked = true;
      linkElement.href = 'https://bootswatch.com/5/journal/bootstrap.min.css';
    }

    switchCSS.addEventListener('change', function() {
      if (this.checked) {
        linkElement.href = 'https://bootswatch.com/5/journal/bootstrap.min.css';
        sessionStorage.setItem('cssState', 'pink');
      } else {
        linkElement.href = './css/bootstrap.min.css';
        sessionStorage.removeItem('cssState');
      }
    });
  });