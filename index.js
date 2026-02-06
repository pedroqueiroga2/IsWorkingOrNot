function VerificarHorarioFuncionamento() {

    
    const agora = new Date();
    const diaDaSemana = agora.getDay();
    const hora = agora.getHours()
    const minutos = agora.getMinutes();

    const horarioAtual = hora * 60 + minutos;

    let funcionamento = false;
    if (diaDaSemana >= 1 && diaDaSemana <= 4) {
        const funcionamentoInicial = 8 * 60;
        const funcionamentoFinal = 20 * 60;
        funcionamento = horarioAtual >= funcionamentoInicial && horarioAtual <funcionamentoFinal;
    }

    if (diaDaSemana === 5) {
        const funcionamentoInicial = 8 * 60;
        const funcionamentoFinal = 19 * 60;
        funcionamento = horarioAtual >= funcionamentoInicial && horarioAtual < funcionamentoFinal;

    }
    
    

    return funcionamento? "Olá, o horário está dentro do horário de funcionamento" : 
    "Olá, NÃO estamos em horário de funcionamento."
}

console.log(VerificarHorarioFuncionamento());

