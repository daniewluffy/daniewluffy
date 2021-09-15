function ganhoPorHora(salario, horasTrabalhadasNoMes){
    const salariohora = salario/horasTrabalhadasNoMes;

    //const total = salariohora.toFixed(2);
    const totalEmReais = salariohora.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    return totalEmReais;
}

console.log(ganhoPorHora(1500, 60))