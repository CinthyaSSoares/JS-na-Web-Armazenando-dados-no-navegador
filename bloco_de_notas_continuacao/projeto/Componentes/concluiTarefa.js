
export const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');

    botaoConclui.classList.add('check-button');
    botaoConclui.innerText= 'FEITO'
    botaoConclui.addEventListener('click', concluirTarefa);

    return botaoConclui;
}

export const concluirTarefa = (evento) => {
    const botaoConclui = evento.target;

    const tarefaCompleta = botaoConclui.parentElement;

    tarefaCompleta.classList.toggle('done');
}

export default BotaoConclui //Sinalizando a exportação no arquivo sinalizado "main.js"