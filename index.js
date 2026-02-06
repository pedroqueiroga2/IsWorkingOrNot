function VerificarHorarioFuncionamento(data = new Date()) {

    const diaDaSemana = data.getDay();

    const hora = data.getHours()
    const minutos = data.getMinutes();

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

console.log(VerificarHorarioFuncionamento(new Date("2026-02-08T10:00")));

