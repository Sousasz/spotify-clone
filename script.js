let horasManha = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let horasTarde = [12, 13, 14, 15, 16, 17];
let horasNoite = [18, 19, 20, 21, 22, 23];
let inserirData = new Date();
let horaAtual = inserirData.getHours();

const bomDiaMensagem = 'Bom dia';
const boaTardeMensagem = 'Boa tarde';
const boaNoiteMensagem = 'Boa noite';

for (let index = 0; index < horasManha.length; index++) {
    const percorreHorasManha = horasManha[index]
    if (horaAtual === percorreHorasManha) {
        document.getElementById('greeting').innerHTML = bomDiaMensagem;
    }
}

for (let index = 0; index < horasTarde.length; index++) {
    const percorreHorasTarde = horasTarde[index]
    if (horaAtual === percorreHorasTarde) {
        document.getElementById('greeting').innerHTML = boaTardeMensagem;
    }
}

for (let index = 0; index < horasNoite.length; index++) {
    const percorreHorasNoite = horasNoite[index]
    if (horaAtual === percorreHorasNoite) {
        document.getElementById('greeting').innerHTML = boaNoiteMensagem;
    }
}

    // Script para pesquisa do input

    const searchInput = document.getElementById('search-input'); // Busca o elemento do input
    const resultArtist = document.getElementById('result-artist'); // Oculta os cards e mostra somente o card pesquisado
    const resultPlaylist = document.getElementById('result-playlists') // Faz com que as playlists apareçam

    //Função para requisão da API
    const requestApi = (searchTerm) => {
        const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
        fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
    }

    //Função para exibir o resultado da pesquisa na tela
    const displayResults = (result) => {
        resultPlaylist.classList.add('hidden');
        const artistName = document.getElementById('artist-name');
        const artistImage = document.getElementById('artist-img');

        result.forEach(element => {
            artistName.innerText = element.name;
            artistImage.src = element.urlImg
        });

        resultArtist.classList.remove('hidden');

    }

    // OBS: O fetch é um método JavaScript usado para fazer requisição a uma API
    // name_like aplicado para quando for digitado um nome próximo dos artistas da API
    // Método then => Aplicado para fazer requisições, fazer leitura de arquivos, etc
    // Quando aplicamos a variável 'response', estamos aplicando o valor recebido pelo then para a mesma
    // Essa var faz a leitura e transforma tudo aquilo em um arquivo json

    document.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm === '') {
            // Definido como display: none; no CSS
            resultArtist.classList.add('hidden');
            resultPlaylist.classList.remove('hidden');
            return;
        }

        requestApi(searchTerm)
    })

    const notasAlunos = () => {
        
    }
