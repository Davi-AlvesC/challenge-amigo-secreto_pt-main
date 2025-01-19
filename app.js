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
    //lista.innerHTML = "";

    // Criando o item da lista
    let itemLista = document.createElement('li');
    itemLista.textContent = item;
    lista.appendChild(itemLista);
}