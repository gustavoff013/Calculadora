/*let listaDeBotoes = document.querySelectorAll('button');
// Vai me retornar uma lista de Botões

listaDeBotoes.forEach(function(botao){
    botao.addEventListener('click', mostrarNumero);
});

// Quando eu clicar em cada botão da lista de botões, será chamada a função mostrarNumero

function mostrarNumero(e){
    let numero = e.target.textContent;

    let saida = document.getElementById('output');
    saida.textContent += numero;
}
*/
let botaoDeLimpar = document.getElementById("limpar");
let listaDeBotoes = document.querySelectorAll('#number');
//let botaoDeSomar = document.getElementById('somar');

for(let i = 0; i < listaDeBotoes.length; i++){
    let botoes = listaDeBotoes[i];
    botoes.addEventListener('click', mostrarNumero);
}

function mostrarNumero(event){
    
    let saida = document.getElementById("output");
    let numero = event.target.textContent;
    saida.textContent += numero;
}

function limparNumeros(){
    let saida = document.getElementById('output');
    saida.textContent = "";
}

function soma(a,b){
    return a + b;
}

function subtracao(a,b){
    return a - b;
}

function multiplicacao(a,b){
    return a * b;
}

function divisao(a,b){
    return a / b;
}

function realizarOperacao(operacao){
}

botaoDeLimpar.addEventListener('click', limparNumeros);
//botaoDeSomar.addEventListener('click', realizarOperacao);
