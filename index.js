//desafio do Felipão 
// objetivo, armazenar nome e quantantidade XP, depois apresentação de mensagem

let nickname = "Leonardo"
let nivelXp = ["Nivel Ferro" , "Nivel Bronze" , "Nivel Prata" , "Nivel Ouro" , "Nivel Platina" , "Nivel Diamante" , "Imortal"]
let pontuacaoMinima = 1.552
let pontuacaoMaxima = 5.000
let resultado = pontuacaoMinima + pontuacaoMaxima

console.log("Desafio do Felipão_DIO!")
console.log("Bem vindo ao desafio, " + nickname + "!")
console.log("Você prescisa juntas as quantidades necessárias de XP, para poder passar de Nivel, e ir adquirindo mais experiência para os proximos desafios.")
console.log("Quantidade de XP adquirida é " + resultado + " Parabéns seu " + nivelXp[3])


const messagemHeroi = "O Herói de nome "
const messagem2 = "Parabéns você está no"
console.log("Continue melhorando seu desempenho para ir a proxima fase.")

console.log(messagemHeroi +
    nickname + ", " +
    messagem2 + ", " +
    nivelXp[3]
)