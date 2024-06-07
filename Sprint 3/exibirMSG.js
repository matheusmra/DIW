const divMensagens = document.querySelector("#msgs");
const receitaSelecionada = 1; 

fetch("db.json").then((response) => {
    response.json().then((dados) => {
        const mensagensFiltradas = dados.msgs.filter((mensagem) => {
            return mensagem.receitaID === receitaSelecionada;
        });

        mensagensFiltradas.forEach((mensagem) => {
            const itemLista = document.createElement("li");
            
            const nomeSpan = document.createElement("span");
            nomeSpan.textContent = mensagem.nome;
            nomeSpan.style.fontWeight = "bold"; 
            
            itemLista.appendChild(nomeSpan);
            itemLista.innerHTML += `: ${mensagem.texto}`;
            
            divMensagens.appendChild(itemLista);
        });
    });
});