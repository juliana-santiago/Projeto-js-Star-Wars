var botaoAdd = document.querySelector("#adicionar-personagem");
botaoAdd.addEventListener("click", function(event){
  event.preventDefault();

  var form = document.querySelector("#form-add");
  var personagem = personagemForm(form);

  var mesErro = valPers(personagem);
  if (mesErro.length > 0) {
    mensagemErros(mesErro);
    return;
  }

  addPersonagemTabela(personagem);

  form.reset();

  var mensagemdeErro = document.querySelector("#mensagem-error")
  mensagemdeErro.innerHTML = "";
});

function addPersonagemTabela(personagem) {

  var personagemTr = montarTr(personagem);
  var tabela = document.querySelector("#tabela-personagem");
  personagemTr.classList.add("personagem-valido");
  tabela.appendChild(personagemTr);

}

function valPers(personagem){
  var erros = [];

  if(personagem.nome.length==0) {erros.push("Nome em Branco");}
  if(personagem.idade.length==0) {erros.push("Idade em Branco");}
  if(personagem.peso.length==0) {erros.push("Peso em Branco");}
  if(personagem.altura.length==0){ erros.push("Altura em Branco");}

  return erros;
}

function mensagemErros(erros){
  var ul = document.querySelector("#mensagem-error");
  ul.innerHTML = "";
  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}
function personagemForm(form){

  var personagem = {
    nome: form.nome.value,
    idade: form.idade.value,
    peso: form.peso.value,
    altura: form.altura.value,
    imc: calImc(form.peso.value, form.altura.value)
  }
  return personagem;
}
function montarTr(personagem){
  var personagemTr = document.createElement ("tr");
  personagemTr.classList.add("personagem");

  personagemTr.appendChild(montarTd(personagem.nome, "info-nome"));
  personagemTr.appendChild( montarTd(personagem.idade, "info-idade"));
  personagemTr.appendChild(montarTd(personagem.peso, "info-peso"));
  personagemTr.appendChild(montarTd(personagem.altura, "info-altura"));
  personagemTr.appendChild(montarTd(personagem.imc, "info-imc"));

  return personagemTr;
}
function montarTd(dado,classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}
