let escolheDate = document.querySelector("#bntDate");
let tituloApod = document.querySelector("#titulo");
let textoApod = document.querySelector("#texto");
let img = document.createElement("img")
let divImg = document.querySelector(".conteiner");
let date = document.querySelector("#date");
let imgBack = document.querySelector("body")

escolheDate.addEventListener("click",function(e){
    e.preventDefault();
    //let date =  escolheDate.value;
    //const key = Tq28PcxpwMdCgRkIdQfMQpp2VeQJ6EYJZilIxfDE;
    let req = `https://api.nasa.gov/planetary/apod?api_key=Tq28PcxpwMdCgRkIdQfMQpp2VeQJ6EYJZilIxfDE&date=${date.value}`;
    
    //console.log(req);
    requisicao(req);
})

function requisicao(urls){ // faz a requisição
    $.ajax({
        method: "GET",
        url: urls,
        dataType: "json",

        success:function(result){
            
            console.log(result);
            
            buscaObjeto(result);
        }
      });
}
function buscaObjeto(result){    //faz a busca das propriedades do personagem
    
     tituloApod.textContent =`${result.title} `
     textoApod.textContent = `${result.explanation}`
     img.src = `${result.url}`;
     img.style.width = "100%";
     img.style.height = "100%";
     divImg.appendChild(img);

     imgBack=style.backgroundColor = `${result.url}`;
     
}
//https://api.nasa.gov/planetary/apod?api_key=Tq28PcxpwMdCgRkIdQfMQpp2VeQJ6EYJZilIxfDE
