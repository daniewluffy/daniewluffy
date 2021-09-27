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


function OferecerSeguro(obj){
    const propClientes = Object.keys(obj)
    if(propClientes.includes("dependentes")){
        console.log(`oferta de seguro para ${obj.nome}`)
    }else{
        console.log(`não há dependente para ${obj.nome}`)
    }
}

console.log(OferecerSeguro(cliente))

console.log(Object.values(cliente))
console.log(Object.entries(cliente))


