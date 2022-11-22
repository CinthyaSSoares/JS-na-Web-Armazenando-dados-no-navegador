import { Tarefa } from "./CriarTarefa.js"

export const carregaTarefa = () => { //aparecendo as tarefas
    const lista = document.querySelector('[data-list]');
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas') || []);

    lista.innerHTML = " "; //limpando a lista para não repetir quando atualiza
    tarefasCadastradas.forEach((tarefa) => {
        lista.appendChild(Tarefa(tarefa));
    })
}