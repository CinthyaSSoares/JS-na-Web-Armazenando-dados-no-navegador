export const deletarTarefa = (atualiza, id) => {
    const index = id;
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'));
    tarefasCadastradas.splice(index,1); //caminho para remover
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas));

    atualiza()
}

export const BotaoDeleta = (atualiza, id) => {
    const botaoDeleta = document.createElement('button');
    botaoDeleta.classList.add('delete-button');
    botaoDeleta.innerText = 'DELETAR';
    botaoDeleta.addEventListener('click', () => deletarTarefa(atualiza, id));

    return botaoDeleta;
}


