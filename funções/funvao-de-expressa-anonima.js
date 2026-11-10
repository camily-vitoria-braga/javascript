//Função de expressão para gerar um número aleatorio entre um intervalo especifico
const gerarNumeroAleatorio = function(min, max) {
    return Math.floor(Math.random() * (max - min  + 1 )) + min;
};
// Chamado a função para gerar um numero aleatorio entre 1 a 100
const numeroAleatorio = gerarNumeroAleatorio(1, 100);
console.log("Número  aleatorio:", numeroAleatorio);