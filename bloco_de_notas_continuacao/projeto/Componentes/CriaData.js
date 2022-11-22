import { Tarefa } from './CriarTarefa.js';

export const criaData = (data) => {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const dataTop = document.createElement('li');
    const conteudoLi = `<p> class="conteudo__data">${data.format('DD/MM/YYYY')}</p>`;

    dataTop.innerHTML = conteudoLi;

    tarefas.forEach((tarefa => {
        const dia = moment(tarefa.dataFormatada, 'DD/MM/YYYY');

        const diff = data.diff(dia);
        
        if(diff == 0) {
            dataTop.appendChild(Tarefa(tarefa))
        }
    }))

    return dataTop;
}