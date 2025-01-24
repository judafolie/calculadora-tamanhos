document.getElementById('sizeForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const busto = parseFloat(document.getElementById('busto').value);
    const cintura = parseFloat(document.getElementById('cintura').value);
    const quadril = parseFloat(document.getElementById('quadril').value);

    let tamanho;

    // Lógica para calcular o tamanho com base nas medidas
    if (busto <= 90 && cintura <= 70 && quadril <= 96) {
        tamanho = 'P';
    } else if (busto <= 98 && cintura <= 78 && quadril <= 104) {
        tamanho = 'M';
    } else if (busto <= 106 && cintura <= 86 && quadril <= 112) {
        tamanho = 'G';
    } else if (busto <= 114 && cintura <= 94 && quadril <= 120) {
        tamanho = 'GG';
    } else {
        tamanho = 'Tamanho não disponível.';
    }

    // Exibe o tamanho no resultado
    document.getElementById('resultado').textContent = `O tamanho ideal é: ${tamanho}`;

    // Conexão com o Google Sheets
    fetch('URL_DO_SEU_WEB_APP', { // Substitua pela URL gerada no Google Apps Script
        method: 'POST',
        body: JSON.stringify({
            busto: busto,
            cintura: cintura,
            quadril: quadril,
            tamanho: tamanho
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.text())
        .then(data => console.log('Dados enviados para a planilha:', data))
        .catch(error => console.error('Erro ao enviar dados:', error));
});
