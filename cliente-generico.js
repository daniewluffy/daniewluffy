function Cliente(nome,cpf,email,saldo)
{
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const daniel = new Cliente("Daniel", "70348867255","danielguimaraes224@gmail.com",100) 

console.log(daniel)