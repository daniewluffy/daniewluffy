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
    }]
}    

cliente.dependentes.push({
    nome: "samia maria",
    parentesco: "filha",
    dataNasci: "04/01/2014"
})

//console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasci==="04/01/2014")

console.log(filhaMaisNova[0].nome)