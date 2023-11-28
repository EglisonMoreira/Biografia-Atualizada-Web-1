function mostrarAlerta() {
    var mensagemDiv = document.getElementById('mensagemDiv');
    mensagemDiv.textContent = 'O botão biografia clicado!';
    mensagemDiv.style.display = 'block';
  
    setTimeout(function() {
      mensagemDiv.style.display = 'none';
      
      window.location.href = 'biografia.html';
    }, 1000);
  }


  function mostrarAlerta2() {
    var mensagemDiv = document.getElementById('mensagemDiv');
    mensagemDiv.textContent = 'O botão legado clicado!';
    mensagemDiv.style.display = 'block';
  
    setTimeout(function() {
      mensagemDiv.style.display = 'none';
      window.location.href = 'legado.html';
    }, 1000);
  }
