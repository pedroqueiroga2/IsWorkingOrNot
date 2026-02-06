async function VerificarHorarioFuncionamento(data = new Date()) {

    const diaDaSemana = data.getDay();

    const hora = data.getHours()
    const minutos = data.getMinutes();

    const horarioAtual = hora * 60 + minutos;

    const dataFormada = data.toISOString().split("T")[0];
     const response = await fetch(
    "https://brasilapi.com.br/api/feriados/v1/2025"
  );
  const feriados = await response.json();
    const Eferiado = feriados.some(f => f.date === dataFormada);

    if (Eferiado) {
        return "Olá, não estamos funcionando devido ao feriado"

    }

    let funcionamento = false;
    if (diaDaSemana >= 1 && diaDaSemana <= 4) {
        const funcionamentoInicial = 8 * 60;
        const funcionamentoFinal = 20 * 60;
        funcionamento = horarioAtual >= funcionamentoInicial && horarioAtual < funcionamentoFinal;
    }

    if (diaDaSemana === 5) {
        const funcionamentoInicial = 8 * 60;
        const funcionamentoFinal = 19 * 60;
        funcionamento = horarioAtual >= funcionamentoInicial && horarioAtual < funcionamentoFinal;

    }



    return funcionamento ? "Olá, o horário está dentro do horário de funcionamento" :
        "Olá, NÃO estamos em horário de funcionamento."
}

VerificarHorarioFuncionamento(new Date("2025-12-25T10:00"))
    .then(resultado => console.log(resultado));

