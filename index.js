let escolheDate = document.querySelector("#bntDate");
let tituloApod = document.querySelector("#titulo");
let textoApod = document.querySelector("#texto");
let img = document.createElement("img");
let divImg = document.querySelector("#conteiner");
let video = document.createElement("iframe");
let date = document.querySelector("#date");

escolheDate.addEventListener("click",function(e){
    e.preventDefault();
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
            //console.log(result);
            buscaObjeto(result);
        },
        error: function(err) {
          // cenário de error
          alert("data não encontrada");
        }
      });
}
function buscaObjeto(result){    //faz a busca das propriedades do personagem
    if(result.media_type == "image"){
      video.style.display = "none";
      img.style.display = "flex";
      img.src = `${result.url}`;
      img.style.width = "50%";
      img.style.height = "50%";
      divImg.appendChild(img); 
    }else{
      img.style.display = "none";
      video.style.display = "flex";
      video.src = `${result.url}`
      video.style.width = "50%";
      video.style.height = "50%";
      divImg.appendChild(video)
    }
     tituloApod.textContent =`${result.title} `
     textoApod.textContent = `${result.explanation}` 
}
//https://api.nasa.gov/planetary/apod?api_key=Tq28PcxpwMdCgRkIdQfMQpp2VeQJ6EYJZilIxfDE
