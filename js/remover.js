var personagem = document.querySelectorAll(".personagem");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("delay");
    setTimeout(function(){
      event.target.parentNode.remove();
    }, 500);
});

// tabela.addEventListener("dblclick", function(event){
//           var alvoEvento = event.target;
//           var eventoChave = alvoEvento.parentNode;
//           eventoChave.remove();
//
// });


// personagem.forEach(function(personagem) {
//     personagem.addEventListener("dblclick", function(){
//         this.remove();
//     });
// });
