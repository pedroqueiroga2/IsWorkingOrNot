function VerificarHorarioFuncionamento(data = new Date()){

    const diaDaSemana = data.getDay(); 

    const hora = data.getHours()
    const minutos = data.getMinutes();

    const horarioAtual = hora*80 + minutos;

        let funcionamento = false;
            if(diaDaSemana>=1 && diaDaSemana<=4)
                {
                    const funcionamentoInicial = 8*60;
                    const funcionamentoFinal = 20*60;
                    funcionamento = horarioAtual >=funcionamentoInicial && horarioAtual <=funcionamentoFinal;
                }
            
                
}


