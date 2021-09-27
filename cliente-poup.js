class Cliente{
    constructor(nome,email,cpf,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
}

    depositar(valor){
    this.saldo += valor
    }

    exibirValorSaldo(){
    console.log(this.saldo)
    }
}    

class ClientePoupanca extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoupanca){
    super(nome,email,cpf,saldo)
    this.saldoPoupanca = saldoPoupanca
    }
    depositarPoupanca(valor){        
        this.saldoPoupanca += valor
    }
}

const daniel = new ClientePoupanca("Daniel", "danielguimaraes224@gmail.com", '7894959959549', 100, 200)

//console.log(daniel)

daniel.depositar(50)
daniel.depositarPoupanca(50)

console.log(daniel)