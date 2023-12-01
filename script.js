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

  document.addEventListener("DOMContentLoaded", function () {
    var rotatingContainer = document.getElementById('rotatingContainer');

    rotatingContainer.addEventListener('animationiteration', function() {
      rotatingContainer.classList.remove('rotate-animation');
    });
  });

  function exibirBoasVindas() {
    var mensagem = document.getElementById('mensagemBoasVindas');
    mensagem.textContent = 'Seja muito bem-vindo(a)!';
    mensagem.style.display = 'block';

    // Ocultar a mensagem após 2 segundos (2000 milissegundos)
    setTimeout(function() {
      mensagem.style.display = 'none';
    }, 10000);
  }

  // Exibir a mensagem de boas-vindas após 2 segundos (2000 milissegundos)
  setTimeout(exibirBoasVindas, 100);