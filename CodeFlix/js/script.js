// Seleciona todos os cartões de carrossel e adiciona títulos abaixo das imagens
document.querySelectorAll('.cartao-carrossel').forEach(cartao => {
    const recurso = cartao.dataset.recurso;
    const info = infos[recurso]; // Pega as informações da linguagem do arquivo info.js

    if (info) {
        // Cria um elemento de título e adiciona abaixo do banner
        const titulo = document.createElement('h2');
        titulo.textContent = info.titulo;
        titulo.classList.add('titulo-linguagem');
        cartao.appendChild(titulo); // Adiciona o título dentro do cartão
    }

    cartao.addEventListener('click', () => {
        window.location.href = `conteudo.html?recurso=${recurso}`;
    });
});

const pesquisaInput = document.getElementById('pesquisa');

// Função de filtro de pesquisa
pesquisaInput.addEventListener('input', () => {
    const termoPesquisa = pesquisaInput.value.toLowerCase();
    document.querySelectorAll('.cartao-carrossel').forEach(cartao => {
        const recurso = cartao.dataset.recurso;
        const info = infos[recurso];
        if (info && info.titulo.toLowerCase().includes(termoPesquisa)) {
            cartao.style.display = '';
        } else {
            cartao.style.display = 'none';
        }
    });
});

document.getElementById('logo').addEventListener('click', () => {
    // Reseta a exibição dos banners ao clicar na logo
    document.querySelectorAll('.cartao-carrossel').forEach(cartao => {
        cartao.style.display = '';
    });
});
