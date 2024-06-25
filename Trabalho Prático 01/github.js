// Script para carregar os dados do perfil do usuário a partir do GitHub
$.getJSON('https://api.github.com/users/matheusmra', function(data) {
    // Atualiza o nome do usuário com o nome obtido da API do GitHub
    $('#nomeUsuario').text(data.name);
    $('#descricaoUsuario').text(data.bio);
    $('#imagemPerfil').attr('src', data.avatar_url);

    // ... (o restante do seu código para atualizar outros elementos do perfil)
});

$.getJSON('https://api.github.com/users/alicesalim', function(data) {
    // Atualiza o nome do usuário com o nome obtido da API do GitHub
    $('#alice').text(data.name);
    $('#descalice').text(data.bio);
    $('#imagemAlice').attr('src', data.avatar_url);

    // ... (o restante do seu código para atualizar outros elementos do perfil)
});

$.getJSON('https://api.github.com/users/iasminfeo', function(data) {
    // Atualiza o nome do usuário com o nome obtido da API do GitHub
    $('#iasmin').text(data.name);
    $('#desciasmin').text(data.bio);
    $('#imagemIasmin').attr('src', data.avatar_url);

    // ... (o restante do seu código para atualizar outros elementos do perfil)
});

$.getJSON('https://api.github.com/users/ga-amaral2', function(data) {
    $('#gabriel').text(data.name);
    $('#descgabriel').text(data.bio);
    $('#imagemGabriel').attr('src', data.avatar_url);

    // ... (o restante do seu código para atualizar outros elementos do perfil)
});

// Substitua 'USERNAME' pelo seu nome de usuário do GitHub
const username = 'matheusmra';

// Função para criar um card de repositório
function createRepoCard(repo) {
    return `
        <div class="col">
            <div class="card" style="width: 18rem;">
                <img src="${repo.owner.avatar_url}" class="card-img-top" alt="${repo.name}">
                <div class="card-body">
                    <h5 class="card-title">${repo.name}</h5>
                    <p class="card-text">${repo.description || 'Sem descrição.'}</p>
                    <p>⭐ ${repo.stargazers_count} 👁️ ${repo.watchers_count} </p>
                    <a href="${repo.html_url}" class="btn btn-primary">Acessar</a>
                </div>
            </div>
        </div>
    `;
}

// Função para carregar os repositórios do GitHub e adicionar ao HTML
function loadGitHubRepos() {
    $.getJSON(`https://api.github.com/users/matheusmra/repos`, function(repos) {
        const reposHTML = repos.map(createRepoCard).join('');
        // Substitua 'repo-container' pelo ID do elemento onde você quer inserir os cards
        $('#repositorios').html(reposHTML);
    });
}

// Chama a função quando o documento estiver pronto
$(document).ready(loadGitHubRepos);
