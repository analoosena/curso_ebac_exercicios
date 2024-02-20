function atualizarRelogio() {
    var agora = new Date();
    var horas = agora.getHours();
    var minutos = agora.getMinutes();
    var segundos = agora.getSeconds();

    document.getElementById('relogio').innerText = 'Hora: ' + horas + ':' + minutos + ':' + segundos;
}

setInterval(atualizarRelogio, 1000);