
const primeiroInput = document.getElementById('input-a')
const segundoInput = document.getElementById('input-b')
const formulario = document.getElementById('forms')

function validaNum(p,s){
    let a = s>p
    return a
}


formulario.addEventListener('submit' , function(e){
    e.preventDefault()  
    let first = parseInt (primeiroInput.value)
    let second = parseInt (segundoInput.value)
    if(validaNum(first,second)){
        document.querySelector('.valid-message').style.display= 'block'
        document.querySelector('.invalid-message').style.display= 'none'
        primeiroInput.value = '';
        segundoInput.value = '' ;
    }
    

})

segundoInput.addEventListener('input', function(e){

    let first = parseInt (primeiroInput.value)
    let second = parseInt (segundoInput.value)

    if(!validaNum (first,second)){
    document.querySelector('.invalid-message').style.display= 'block';
    document.querySelector('.valid-message').style.display= 'none';
    segundoInput.classList.add('error');
    }
    else{
        document.querySelector('.invalid-message').style.display= 'none'
        segundoInput.classList.remove('error');
    }
})