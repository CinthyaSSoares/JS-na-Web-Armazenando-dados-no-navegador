import { Tarefa } from './CriarTarefa.js';

export const criaData = (data) => {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const dataMoment = moment(data, 'DD/MM/YYYY')
    const dataTop = document.createElement('li');
    const conteudoLi = `<p class="conteudo__data">${dataMoment.format('DD/MM/YYYY')}</p>`;

    dataTop.innerHTML = conteudoLi;

    tarefas.forEach(((tarefa,id) => {
        const dia = moment(tarefa.dataFormatada, 'DD/MM/YYYY');

        const diff = dataMoment.diff(dia);
        
        if(diff == 0) {
            dataTop.appendChild(Tarefa(tarefa,id))
        }
    }))

    return dataTop;
}