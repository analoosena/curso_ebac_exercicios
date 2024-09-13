$(document).ready(function(){

    const name = $('.profile-name');
    const userName = $('.profile-username');
    const reporsitors = $('#reporsitors');
    const avatar = $('.profile-avatar');
    const followers = $('#follower');
    const following = $('#following');
    const linkProfile = $('.profile-link')

    let erroDetectado = false;

    fetch('https://api.github.com/users/analoosena')
        .then(function(resposta){
            if(!resposta.ok){
                throw new Error("Erro ao buscar dados API");
            }
            return resposta.json();
        })
        .then(function(json){
            name.text(json.name);
            userName.text(json.login);
            reporsitors.text(json.public_repos);
            avatar.attr('src', json.avatar_url);
            followers.text(json.followers);
            following.text(json.following);
            linkProfile.attr('href', json.html_url);
        })
        .catch(function(erro){
            erroDetectado = true;
            console.error("Erro detectado: ", erro);
        })

        $('.profile-link').click(function() {
            if (erroDetectado) {
                alert("ERRO detectado!");
            }
        });

})