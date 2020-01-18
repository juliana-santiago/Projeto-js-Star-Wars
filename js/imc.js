var subtitulo = document.querySelector(".subtitulo");
subtitulo.textContent = "Personagens";

var personagens = document.querySelectorAll(".personagem");

for (var i = 0; i < personagens.length; i++) {

	var personagem = personagens[i];

	var tdPeso = personagem.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = personagem.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = personagem.querySelector(".info-imc");

	var pesoVal = valPeso(peso);
	var alturaVal = valAltura(altura);

	if (!pesoVal) {
		personagem.classList.add("personagem-invalido");
		tdImc.textContent = "Peso Inválida";
	}
	if (!alturaVal) {
		personagem.classList.add("personagem-invalido");
		tdImc.textContent = "Altura Inválida";
	}
	if (pesoVal && alturaVal) {
		var imc = calImc(peso, altura);
		tdImc.textContent = imc;
		personagem.classList.add("personagem-valido");
	}
}

function valPeso(peso) {
	if (peso > 0 && peso < 500) {
		return true;
	}
	else {
		return false;
	}
}
function valAltura(altura) {
	if (altura > 0 && altura < 3.00) {
		return true;
	}
	else {
		return false;
	}
}
function calImc(peso, altura) {
	var imc = 0;
	imc = peso / (altura * altura);
	return imc.toFixed(2);
}
