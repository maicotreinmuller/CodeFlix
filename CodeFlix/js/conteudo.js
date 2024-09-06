// Obtém o parâmetro 'recurso' da URL
const params = new URLSearchParams(window.location.search);
const recurso = params.get('recurso');

// Seleciona a área de conteúdo
const conteudoDiv = document.getElementById('conteudo');

// Carrega o conteúdo da tecnologia selecionada
if (recurso && infos[recurso]) {
    const info = infos[recurso];
    // Adiciona o banner, o título e o texto formatado
    conteudoDiv.innerHTML = `
        <img src="imagens/${recurso}.jpg" alt="${info.titulo}" class="conteudo-banner">
        <div class="conteudo-texto">
            <p>${info.descricao}</p>
            <p><strong>Utilização:</strong> ${info.utilizacao}</p>
            <a href="${info.link}" target="_blank">Mais informações</a>
        </div>
    `;
} else {
    conteudoDiv.innerHTML = `<p>Informações não encontradas.</p>`;
}

// Adiciona funcionalidade ao botão "Voltar"
document.getElementById('voltar').addEventListener('click', () => {
    window.location.href = 'index.html';
});