const cliente = [
    {
    nome: 'andre',
    cpf: "12345678911",
    dependentes: [{
        nome: "sara",
        parentesco: "filha",
        dataNasci: "20/03/2009"
    },
    {
            nome: "samia maria",
            parentesco: "filha",
            dataNasci: "04/01/2014"
    }],
},
  {
    nome: 'juliana',
    cpf: "12345678911",
    dependentes: [{
        nome: "abigail",
        parentesco: "filha",
        dataNasci: "20/03/2001"
  }],
},
{
    nome: 'caio',
    cpf: "12348678911",
    dependentes: [{
        nome: "pablo",
        parentesco: "filho",
        dataNasci: "20/03/2005"
}],
},
]


const listaDependentes = [...cliente[0].dependentes, ...cliente[1].dependentes, ...cliente[2].dependentes]

console.log(listaDependentes)
console.table(listaDependentes)
