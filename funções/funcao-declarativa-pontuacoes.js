function calcularPontuacaoTotal(pontvacoes){
    let pontuacaoTotal = 0;
    for(let i = 0; i < pontvacoes.length; i++){
        pontuacaoTotal += pontvacoes[i];
    }
    console.log("Pontuação total do jogador:", pontuacaoTotal);
}
//Array de pontuações do jogador
const pontuacaoDoJogador = [10, 15, 20, 5, 8];
//Chamando  função para calcular a pontuação total do jogador
calcularPontuacaoTotal(pontuacaoDoJogador);