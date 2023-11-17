// Crie uma função que recebe como parâmetro a quantidade de vitórias
// e derrotas de um jogador, depois disso retorne o resultado para uma
// variável, o saldo de rankeadas deve ser feito através do calculo
// (vitórias - derrotas)

//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal

//"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

rankedBalance = balanceWins (22, 8)



function balanceWins (wins, defeats){
    let saldo = wins - defeats
    return saldo   
}

if (rankedBalance <10 ){
    console.log("O heróis tem saldo de " + rankedBalance + " vitórias e está no nível ferro")

}

else if (rankedBalance>=11 && rankedBalance <=20){
    console.log("O heróis tem saldo de " + rankedBalance + " vitórias e está no nível bronze")

}