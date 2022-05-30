window.onload = function(){
    var url = "https://profrodolfo.com.br/projeto/?nome=mo";
    fetch(url)
    .then(resposta => {
        return resposta.json();
    })
    .then( function (json){
        var d = document.querySelector('.dados');
        var texto = '';
        for(i = 0; i < json.length ; i++){
            texto += '<div class="uk-card uk-grid-collapse uk-child-width-1-2@s uk-margin uk-card-secondary uk-light" uk-grid> <div class="uk-card-media-left uk-cover-container"> <img src="https://profrodolfo.com.br/projeto/'+json[i].foto+'" alt="" uk-cover> <canvas width="80vw" height="200"></canvas> </div> <div> <div class="uk-card-body"> <h3 class="uk-card-title">'+json[i].nome+'</h3> <p>'+json[i].valor+'</p> </div> </div> </div>'
        }
        d.innerHTML += texto;
    })
    .catch();
    
}
function filtrar (a, b) {
    var input1 = document.querySelector("#"+a);
    var nome = input1.value;
    var input2 = document.querySelector("#"+b);
    var preco = input2.value;
    var url = "https://profrodolfo.com.br/projeto/?nome=mo";
    
    fetch(url)
    .then(resposta => {
        return resposta.json();
    })
    .then( function (json){
        var d = document.querySelector('.dados');
        var texto = '';
        if(nome.length != 0){
            for(i = 0; i < json.length ; i++){
                        texto += '<div class="uk-card uk-grid-collapse uk-child-width-1-2@s uk-margin uk-card-secondary uk-light" uk-grid> <div class="uk-card-media-left uk-cover-container"> <img src="https://profrodolfo.com.br/projeto/'+json[i].foto+'" alt="" uk-cover> <canvas width="80vw" height="200"></canvas> </div> <div> <div class="uk-card-body"> <h3 class="uk-card-title">'+json[i].nome+'</h3> <p>'+json[i].valor+'</p> </div> </div> </div>'
            }
        }
        d.innerHTML = texto;
    })
    .catch();
}