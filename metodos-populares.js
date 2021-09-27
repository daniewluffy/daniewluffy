function imprimeNomeEmail(tipoCliente){
    console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
   }
   
   const cliente1 = {
    nome: "Carlos",
    email: "c@email.com"
   }
   
   const cliente2 = {
    nome: "Fred",
    email: "f@email.com"
   }

   imprimeNomeEmail.call(cliente1, "cliente especial")
   imprimeNomeEmail.call(cliente2, "cliente estudante")
   //método call 

const clienteEspecial = ["cliente especial", "Rio de Janeiro"]
const clienteEstudante = ["cliente estudante", "Fortaleza"]

imprimeNomeEmail.apply(cliente1, clienteEspecial)
// cliente especial da agência Rio de Janeiro: - nome: Carlos, email: c@email.com

imprimeNomeEmail.apply(cliente2, clienteEstudante)
// cliente estudante da agência Fortaleza: - nome: Fred, email: f@email.com
//metodo apply

const personagemGenerico = personagem.apresentar
console.log(personagemGenerico())
//a personagem é undefined

const personagemDefinido = personagemGenerico.bind(personagem)
console.log(personagemDefinido())
//a personagem é Princesa Leia



