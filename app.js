//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let nomeAtual = document.getElementById('amigo').value;
    if (nomeAtual != null && nomeAtual != '') {
        amigos.push(nomeAtual);
    }
    else {
        alert('Por favor, insira um nome.');
    }
    document.getElementById('amigo').value = '';
    console.log(amigos);
    atualizarLista(nomeAtual)
} 

function atualizarLista(item) {
    let lista = document.getElementById('listaAmigos');

    // Criando o item da lista 
    let itemLista = document.createElement('li');
    itemLista.onclick = function () {
        removerAmigo(itemLista);
    };
    let lixeiraIcon = document.createElement('i');
    lixeiraIcon.classList.add('bi');
    lixeiraIcon.classList.add('bi-trash3-fill');
    lixeiraIcon.classList.add('trash');
    

    let naipeIcon = document.createElement('i');
    naipeIcon.classList.add('bi');
    naipeIcon.classList.add('bi-suit-spade-fill');
    naipeIcon.classList.add('naipeTopo');

    let texto = document.createElement('a');
    texto.classList.add('texto-card');
    texto.textContent = item;
    itemLista.appendChild(texto);
    itemLista.appendChild(lixeiraIcon)
    itemLista.appendChild(naipeIcon)
    lista.appendChild(itemLista);
}

// Função para remover um amigo da lista
function removerAmigo(item) {
    // Remover o item da lista
    amigos.splice(amigos.indexOf(item.querySelector('a').innerHTML), 1);
    item.remove();
    console.log(amigos);
}

function sortearAmigo() {
    console.log('sorteou')
}