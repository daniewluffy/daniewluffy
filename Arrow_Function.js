function apresentar(nome){
    return `meu nome é ${nome}`
}

//console.log(apresentar("Daniel"))

const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1,num2) => num1 + num2;

console.log(apresentarArrow("Daniel"))
console.log()
console.log(soma(85,45))
console.log()

const somaNumerosPequenos = (num1,num2) => {
    if(num1 || num2 < 10){
        return "somente numeros pequenos";
    }else{
        return num1 + num2;
    }
}

console.log(somaNumerosPequenos(2,9))