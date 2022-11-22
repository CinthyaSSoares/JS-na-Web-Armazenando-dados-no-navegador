
export const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button');
    botaoDeleta.classList.add('delete-button');
    botaoDeleta.innerText = 'DELETAR';
    botaoDeleta.addEventListener('click', deletarTarefa);

    return botaoDeleta;
}

export const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target;
    
    const tarefaCompleta = botaoDeleta.parentElement;
    
    tarefaCompleta.remove();

    return botaoDeleta;
}

