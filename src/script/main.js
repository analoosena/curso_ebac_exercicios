document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(){
        let numeroMaximo = document.getElementById('numero-maximo').value;

        let numeroAleatorio = Math.random() * numeroMaximo;
        alert(numeroAleatorio);
    })
})