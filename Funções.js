//função simples com parametro
function ImprimiTexto(texto){
    console.log(texto)
}

//ImprimiTexto(soma());
ImprimiTexto('Sensacional');

//função simples sem parametro
/* function soma(){
    const num1 = 3;
    const num2 = 4;
    const somador = num1 + num2;

    return somador;    
} */

//console.log(soma())

function soma(num1 = 0, num2 = 0){
    const somador = num1 + num2;
    return somador;    
}

console.log(soma(145,58))

function NomeIdade(nome = null, idade = null){
return `meu nome é ${nome}  e minha idade é ${idade}`
}

console.log(NomeIdade("Daniel", 21))