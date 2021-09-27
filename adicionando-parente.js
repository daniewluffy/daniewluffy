const cliente = {
    nome: 'andre',
    idade: 36,
    cpf: "12345678911",
    email: 'danielguimaraes224@gmail.com',
    fones: ["93992448585", "93992067020"]
}

cliente.dependentes = {
    nome: "sara",
    parentesco: "filha",
    dataNasci: "20/03/2001"
}

console.log(cliente.dependentes.nome)