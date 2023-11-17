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

rankedBalance = balanceWins (587, 246)



function balanceWins (wins, defeats){
    let saldo = wins - defeats
    return saldo   
}

if (rankedBalance >=0 && rankedBalance <=10 ){
    console.log("O heróis tem saldo de " + rankedBalance + " vitórias e está no nível Ferro")
}

else if (rankedBalance>=11 && rankedBalance <=20){
    console.log("O heróis tem saldo de " + rankedBalance + " vitórias e está no nível Bronze")
}

else if (rankedBalance >=21 && rankedBalance <=50){
    console.log("O heróis tem saldo de " + rankedBalance + " vitórias e está no nível Prata")
}

else if (rankedBalance >=51 && rankedBalance <=80){
    console.log("O heróis tem saldo de " + rankedBalance + " vitórias e está no nível Ouro")
}

else if (rankedBalance >=81 && rankedBalance <=90){
    console.log("O heróis tem saldo de " + rankedBalance + " vitórias e está no nível Diamante")
}

else if (rankedBalance >=91 && rankedBalance <=100){
    console.log("O heróis tem saldo de " + rankedBalance + " vitórias e está no nível Lendário")
}

else if (rankedBalance >=101){
    console.log("O heróis tem saldo de " + rankedBalance + " vitórias e está no nível Imortal")
}

else {
	console.log("O jogador não possui vitórias o suficiente para estar no ranking")
}