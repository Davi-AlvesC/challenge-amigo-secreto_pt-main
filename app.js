let amigos = [];

function adicionarAmigo() {
    let nomeAtual = document.getElementById('amigo').value;
    if (nomeAtual != null && nomeAtual != '') {
        amigos.push(nomeAtual);
        document.getElementById('amigo').value = '';
        console.log(amigos);
        atualizarLista(nomeAtual)
    }
    else {
        alert('Por favor, insira um nome.');
    }
} 

function atualizarLista(item) {
    let lista = document.getElementById('listaAmigos');
    let aleatorio1 = gerarNumeroAleatorio(2)
    let aleatorio2 = gerarNumeroAleatorio(2)

    // Criando o item da lista 
    let itemLista = document.createElement('li');
    itemLista.onclick = function () {
        removerAmigo(itemLista);
    };
    itemLista.classList.add('valido');

    let lixeiraIcon = document.createElement('i');
    lixeiraIcon.classList.add('bi');
    lixeiraIcon.classList.add('bi-trash3-fill');
    lixeiraIcon.classList.add('trash');
    

    let texto = document.createElement('a');
    texto.classList.add('texto-card');
    texto.textContent = item;

    let divTop = document.createElement('div');
    divTop.classList.add('flexCenter');
    divTop.appendChild(criaNaipe('Preto', 'Cima', aleatorio1))
    divTop.appendChild(criaNaipe('Vermelho', 'Cima', aleatorio2))

    let divMiddle = document.createElement('div');
    divMiddle.classList.add('flexCenter');
    divMiddle.appendChild(texto)
    divMiddle.appendChild(lixeiraIcon)

    let divBotton = document.createElement('div');
    divBotton.classList.add('flexCenter');
    divBotton.appendChild(criaNaipe('Preto', 'Baixo', aleatorio1))
    divBotton.appendChild(criaNaipe('Vermelho', 'Baixo', aleatorio2))


    itemLista.appendChild(divTop)
    itemLista.appendChild(divMiddle);
    itemLista.appendChild(divBotton)
    lista.appendChild(itemLista);
}

function criaNaipe(tipo, posicao, icon){
    let naipe = document.createElement('i');
    let aleatorioIcon;
    naipe.classList.add('bi');

    if (tipo == 'Preto') {
        aleatorioIcon = icon > 1 ? 'bi-suit-spade-fill' : 'bi-suit-club-fill';
        naipe.classList.add(aleatorioIcon);
        naipe.classList.add('naipeVisible');
    } else {
        aleatorioIcon = icon > 1 ? 'bi-suit-diamond-fill' : 'bi-heart-fill';
        naipe.classList.add(aleatorioIcon);
        naipe.classList.add('naipeHidden');
    }

    if (posicao == "Baixo") {
        naipe.classList.add('naipeBaixo');
    } 
    return naipe;
}

function criaDiv() {
    let divBotton = document.createElement('div');
    divBotton.classList.add('flexCenter');
}

// Função para remover um amigo da lista ao clicar no card
function removerAmigo(item) {
    // Remover o item da lista
    if (item.className != 'bordaDourado opaco'){
        amigos.splice(amigos.indexOf(item.querySelector('a').innerHTML), 1);
    }
    item.remove();
}

let sorteadoAnterior;

function sortearAmigo() {
    if (amigos.length > 0){
        let sorteado = gerarNumeroAleatorio(amigos.length) - 1
        console.log('sorteou');
        console.log(amigos[sorteado]);

        if (sorteadoAnterior != null) {
            sorteadoAnterior.classList.add('opaco');
        }

        // Obtendo todos os cards em tela
        let listaAmigos = document.querySelectorAll('#listaAmigos li.valido');
        let listaIcons = listaAmigos[sorteado].querySelectorAll('.naipeVisible');
        let listaTexto = listaAmigos[sorteado].querySelectorAll('a');

        listaAmigos[sorteado].classList.remove('valido');
        listaAmigos[sorteado].classList.add('bordaDourado');
        listaTexto[0].classList.add('corDourada');
        listaIcons[0].removeAttribute('class');
        listaIcons[0].classList.add('corDourada', 'fa-solid', 'fa-crown', 'naipeVisible', 'coroaScale')
        listaIcons[1].removeAttribute("class");
        listaIcons[1].classList.add('corDourada', 'fa-solid', 'fa-crown', 'naipeVisible', 'naipeBaixo', 'coroaScaleBaixo')

        // Exibindo o nome sorteado na lista de resultados
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = amigos[sorteado] + ' foi o seu amigo secreto!';

        amigos.splice(sorteado, 1);
        sorteadoAnterior = listaAmigos[sorteado];
    } else {
        if (sorteadoAnterior == null) {
            alert('Por favor, insira um nome para realizar um sorteio.');
        } else {
            alert('Todos os nomes já foram soteados, insira um novo nome ou reinicie para realizar um novo sorteio.');
        }
        
    }
    



}

function gerarNumeroAleatorio(maximo) {
    console.log(Math.floor((Math.random() * maximo + 1)))
    return Math.floor((Math.random() * maximo + 1))
}