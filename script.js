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
        document.getElementById('greeting').innerHTML = bomDiaMensagem
    }
}

for (let index = 0; index < horasTarde.length; index++) {
    const percorreHorasTarde = horasTarde[index]
    if (horaAtual === percorreHorasTarde) {
        document.getElementById('greeting').innerHTML = boaTardeMensagem
    }
}

for (let index = 0; index < horasNoite.length; index++) {
    const percorreHorasNoite = horasNoite[index]
    if (horaAtual === percorreHorasNoite) {
        document.getElementById('greeting').innerHTML = boaNoiteMensagem;
    }
}

