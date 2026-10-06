let resultadoDado;
let lancamentos = 0;

while (resultadoDado !== 6) {
    resultadoDado = Math.floor(Math.rondom() * 6)  * 1;
lancamentos ++;
console.log('lancamentos ${lancamentos}:resultado do dado: $ {resultadoDado}');
}
console.log('Finalmente! o numero 6 foi obtido após $ {lancamento} lancamentos.');