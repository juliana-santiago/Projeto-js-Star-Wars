var campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var personagens = document.querySelectorAll(".personagem");

    if (this.value.length > 0){
      for (var i = 0; i < personagens.length; i++) {
          var personagem = personagens[i];
          var tdNome = personagem.querySelector(".info-nome");
          var nome = tdNome.textContent;
          var expressao = new RegExp(this.value,"i");

          if (!expressao.test(nome)) {
              personagem.classList.add("invisivel");
          } else {
              personagem.classList.remove("inviivel");
          }
      }
    } else {
      for(var i = 0; i < personagens.length; i++){
        var personagem = personagens[i];
        personagem.classList.remove("invisivel");
      }
    }
});
