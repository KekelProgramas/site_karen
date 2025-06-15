function abrirAba(nomeArquivo) {
    fetch(nomeArquivo)
    .then(res => res.text())
    .then(html => {
        document.querySelector('.conteudo').innerHTML = html;
    })
    .catch(err => console.log("Erro ao carregar a aba:", err));
}

window.onload = function() {
    abrirAba('casa.html');
};

function abrirCarta(carta) {
  const conteudo = carta.querySelector(".carta-conteudo");
  if (conteudo.style.display === "block") {
    conteudo.style.display = "none";
  } else {
    conteudo.style.display = "block";
  }
}

window.addEventListener('load', () => {
  document.body.style.visibility = 'visible';
});
