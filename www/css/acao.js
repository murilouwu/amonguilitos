let pro = [
	{nome: "Mouse", valor:250.00, img: "img//mouse.webp"},
    {nome: "Rodolfo Primocena Araujo", valor:10.00, img: "img//rodolfo.jpg"},
    {nome: "Abelheemo Mousepad", valor:340.75, img: "img//teemo.PNG"}
];

let ini = ()=>{
	let div = document.querySelector('.dados');
	div.innerHTML = '';
	let texto = '';
	for(let i = 0; i<pro.length; i++){
			texto += '<div class="uk-card uk-grid-collapse uk-child-width-1-2@s uk-margin uk-card-secondary uk-light" uk-grid> <div class="uk-card-media-left uk-cover-container"> <img src="https://profrodolfo.com.br/projeto/'+pro[i].img+'" alt="" uk-cover> <canvas width="80vw" height="200"></canvas> </div> <div> <div class="uk-card-body"> <h3 class="uk-card-title">'+pro[i].nome+'</h3> <p>'+pro[i].valor+'</p> </div> </div> </div>'
	}
	div.innerHTML = texto;
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
    let valor = document.querySelector('#valor').value;
	let texto;
	if(nome.length<1 && valor.length<1){
		ini();
	}else if(nome.length>0 && valor.length<1){
		for(let i = 0; i<pro.length; i++){
			if(pro[i].nome.includes(nome)){
				texto += '<div class="uk-card uk-grid-collapse uk-child-width-1-2@s uk-margin uk-card-secondary uk-light" uk-grid> <div class="uk-card-media-left uk-cover-container"> <img src="https://profrodolfo.com.br/projeto/'+pro[i].img+'" alt="" uk-cover> <canvas width="80vw" height="200"></canvas> </div> <div> <div class="uk-card-body"> <h3 class="uk-card-title">'+pro[i].nome+'</h3> <p>'+pro[i].valor+'</p> </div> </div> </div>'
			}
		}
		div.innerHTML = texto;
	}else if(nome.length<1 && valor.length>0){
        for(let i = 0; i<pro.length; i++){
			if(pro[i].valor<valor){
				texto += '<div class="uk-card uk-grid-collapse uk-child-width-1-2@s uk-margin uk-card-secondary uk-light" uk-grid> <div class="uk-card-media-left uk-cover-container"> <img src="https://profrodolfo.com.br/projeto/'+pro[i].img+'" alt="" uk-cover> <canvas width="80vw" height="200"></canvas> </div> <div> <div class="uk-card-body"> <h3 class="uk-card-title">'+pro[i].nome+'</h3> <p>'+pro[i].valor+'</p> </div> </div> </div>'
			}
		}
		div.innerHTML = texto;
    }else{
        for(let i = 0; i<pro.length; i++){
			if(pro[i].nome.includes(nome) && pro[i].valor<valor){
				texto += '<div class="uk-card uk-grid-collapse uk-child-width-1-2@s uk-margin uk-card-secondary uk-light" uk-grid> <div class="uk-card-media-left uk-cover-container"> <img src="https://profrodolfo.com.br/projeto/'+pro[i].img+'" alt="" uk-cover> <canvas width="80vw" height="200"></canvas> </div> <div> <div class="uk-card-body"> <h3 class="uk-card-title">'+pro[i].nome+'</h3> <p>'+pro[i].valor+'</p> </div> </div> </div>'
			}
		}
		div.innerHTML = texto;
    }
}
