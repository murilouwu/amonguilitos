let ini = ()=>{
    var url = "https://profrodolfo.com.br/projeto/?nome=mo";
    fetch(url)
    .then(resposta => { 
        return resposta.json(); 
    })
    .then( function (json){
        var div = document.querySelector('.dados');
        var texto = "";
        for(i = 0; i < json.length ; i++){
            texto += '<div class="uk-card uk-grid-collapse uk-child-width-1-2@s uk-margin uk-card-secondary uk-light" uk-grid> <div class="uk-card-media-left uk-cover-container"> <img src="https://profrodolfo.com.br/projeto/'+json[i].foto+'" alt="" uk-cover> <canvas width="80vw" height="200"></canvas> </div> <div> <div class="uk-card-body"> <h3 class="uk-card-title">'+json[i].nome+'</h3> <p>'+json[i].valor+'</p> </div> </div> </div>';
        };
        div.innerHTML += texto;
    })
    .catch();
}
ini();

document.querySelector('#nome').addEventListener('input', ()=>{
    resultado();
});
document.querySelector('#valor').addEventListener('input', ()=>{
    resultado();
});

function resultado(){
    let div = document.querySelector('.dados');
	div.innerHTML = '';
	let nome = document.querySelector('#nome').value;
    let vl = document.querySelector('#valor').value;
    var url = "https://profrodolfo.com.br/projeto/?nome=mo";
    fetch(url)
    .then(resposta => { 
        return resposta.json(); 
    })
    .then( function (json){
        var texto = "";
        if(nome.length<1 && vl.length<1){
            ini();
        }else if(nome.length>0 && vl.length<1){
            for(let i = 0; i<json.length; i++){
                if(json[i].nome.includes(nome)){
                    texto += '<div class="uk-card uk-grid-collapse uk-child-width-1-2@s uk-margin uk-card-secondary uk-light" uk-grid> <div class="uk-card-media-left uk-cover-container"> <img src="https://profrodolfo.com.br/projeto/'+json[i].foto+'" alt="" uk-cover> <canvas width="80vw" height="200"></canvas> </div> <div> <div class="uk-card-body"> <h3 class="uk-card-title">'+json[i].nome+'</h3> <p>'+json[i].valor+'</p> </div> </div> </div>';
                }
            }
            div.innerHTML = texto;
        }else if(nome.length<1 && vl.length>0){
            for(let i = 0; i<json.length; i++){
                if(json[i].valor<vl){
                    texto += '<div class="uk-card uk-grid-collapse uk-child-width-1-2@s uk-margin uk-card-secondary uk-light" uk-grid> <div class="uk-card-media-left uk-cover-container"> <img src="https://profrodolfo.com.br/projeto/'+json[i].foto+'" alt="" uk-cover> <canvas width="80vw" height="200"></canvas> </div> <div> <div class="uk-card-body"> <h3 class="uk-card-title">'+json[i].nome+'</h3> <p>'+json[i].valor+'</p> </div> </div> </div>';
                }
            }
            div.innerHTML = texto;
        }else{
            for(let i = 0; i<json.length; i++){
                if(json[i].nome.includes(nome) && json[i].valor<vl){
                    texto += '<div class="uk-card uk-grid-collapse uk-child-width-1-2@s uk-margin uk-card-secondary uk-light" uk-grid> <div class="uk-card-media-left uk-cover-container"> <img src="https://profrodolfo.com.br/projeto/'+json[i].foto+'" alt="" uk-cover> <canvas width="80vw" height="200"></canvas> </div> <div> <div class="uk-card-body"> <h3 class="uk-card-title">'+json[i].nome+'</h3> <p>'+json[i].valor+'</p> </div> </div> </div>';
                }
            }
            div.innerHTML = texto;
        }
    })
    .catch();
}
