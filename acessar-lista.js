const cliente = {
    nome: 'andre',
    idade: 36,
    cpf: "12345678911",
    email: 'danielguimaraes224@gmail.com'
}

const chaves = ["nome", 'idade', 'cpf','email']

console.log(cliente[chaves[0]])
//acessar cliente com chaves com array

chaves.forEach(info => console.log(cliente[info]))