let textoDoUsuario = 'Cenouras crescem na terra' 

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
// a) Ela serve para ver se tem a palavra usada na variável.
// b) Todas as três vão dar TRUE.
