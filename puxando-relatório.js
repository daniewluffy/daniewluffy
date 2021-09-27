const cliente = {
    nome: 'andre',
    idade: 36,
    cpf: "12345678911",
    email: 'danielguimaraes224@gmail.com',
    fones: ["93992448585", "93992067020"],
    dependentes: [{
        nome: "sara",
        parentesco: "filha",
        dataNasci: "20/03/2001"
    },{
        nome: "samia maria",
        parentesco: "filha",
        dataNasci: "04/01/2014"
    }
  ],
  saldo: 100,
  
  depositar:function(valor)
  {
      this.saldo += valor
  }
}    

let relatorio = ""

for(let info in cliente)
{
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue
    }else{
    relatorio += ` - ${cliente[info]}
    `
    }
}

console.log(relatorio)