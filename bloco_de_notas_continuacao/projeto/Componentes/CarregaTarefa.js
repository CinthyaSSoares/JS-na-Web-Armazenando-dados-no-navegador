import { criaData } from "./CriaData.js";


export const carregaTarefa = () => { //aparecendo as tarefas
    const lista = document.querySelector('[data-list]');
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas') || []);

    lista.innerHTML = " "; //limpando a lista para não repetir quando atualiza
    tarefasCadastradas.forEach((tarefa) => {

        const dia = moment(tarefa.dataFormatada, 'DD/MM/YYYY')

        const diff = data.diff(dia);

        if(diff == 0) {
            lista.appendChild(criaData(dia))
        }
    })
}