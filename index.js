let heroi = ["Felipao da Dio", 4879]

let nivel = heroi[1]

if (nivel <= 1000){
    nivel = "Ferro"
}
else if (nivel > 1000 && nivel <=2000){
    nivel = "Bronze"
}
else if (nivel > 2000 && nivel <=5000){
    nivel = "Prata"
}
else if (nivel > 5000 && nivel <=7000){
    nivel = "Ouro"
}
else if (nivel > 7000 && nivel <=8000){
    nivel = "Platina"
}
else if (nivel > 8000 && nivel <=9000){
    nivel = "Ascendente"
}else if (nivel > 9000 && nivel <=10000){
    nivel = "Imortal"
}
else if (nivel > 10000){
    nivel = "Radiante"
}


console.log("O Herói de nome " +heroi[0]+" está no nível de "+nivel)