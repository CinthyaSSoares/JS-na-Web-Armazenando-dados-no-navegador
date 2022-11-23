
export const concluirTarefa = (atualiza, id) => {
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))
    tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida;
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas))

    atualiza()
}

export const BotaoConclui = (atualiza, id) => {
    const botaoConclui = document.createElement('button');

    botaoConclui.classList.add('check-button');
    botaoConclui.innerText= 'FEITO'
    botaoConclui.addEventListener('click', () => concluirTarefa(atualiza, id));

    return botaoConclui;
}