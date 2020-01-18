var botaoLocalizar = document.querySelector("#localizar-personagem");

botaoLocalizar.addEventListener("click", function(){

  var xhr = new XMLHttpRequest();

  xhr.open("GET","https://v2-api.sheety.co/96bd5b83d71d34f290382074695fb75c/personagens/sheet1");

  xhr.addEventListener("load", function(){

    var erroAjax = document.querySelector("#erro-ajax");
    if(xhr.status == 200){
      erroAjax.classList.add("invisivel");
      var resposta = xhr.responseText;
      var personagens = JSON.parse(resposta);
      personagens.sheet1.forEach(function(personagem){
        addPersonagemTabela(personagem);
      });
    } else {
      console.log(erroAjax.responseText);
      erroAjax.classList.remove("invisivel");
    }
  });

  xhr.send();

});
