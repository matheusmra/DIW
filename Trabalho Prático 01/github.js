
$.getJSON('https://api.github.com/users/matheusmra', function(data) {

    $('#nomeUsuario').text(data.name);
    $('#descricaoUsuario').text(data.bio);
    $('#imagemPerfil').attr('src', data.avatar_url);


});

$.getJSON('https://api.github.com/users/alicesalim', function(data) {

    $('#alice').text(data.name);
    $('#descalice').text(data.bio);
    $('#imagemAlice').attr('src', data.avatar_url);

});

$.getJSON('https://api.github.com/users/iasminfeo', function(data) {

    $('#iasmin').text(data.name);
    $('#desciasmin').text(data.bio);
    $('#imagemIasmin').attr('src', data.avatar_url);

});

$.getJSON('https://api.github.com/users/ga-amaral2', function(data) {
    $('#gabriel').text(data.name);
    $('#descgabriel').text(data.bio);
    $('#imagemGabriel').attr('src', data.avatar_url);


});

const username = 'matheusmra';


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


function loadGitHubRepos() {
    $.getJSON(`https://api.github.com/users/matheusmra/repos`, function(repos) {
        const reposHTML = repos.map(createRepoCard).join('');

        $('#repositorios').html(reposHTML);
    });
}
$(document).ready(loadGitHubRepos);
