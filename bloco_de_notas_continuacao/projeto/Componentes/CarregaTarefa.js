import { criaData } from "./CriaData.js";
import { removeDatasRepetidas, ordenaDatas } from "../service/data.js";

export const carregaTarefa = () => { //aparecendo as tarefas
    const lista = document.querySelector('[data-list]');
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas') || []);//local sotrage

    lista.innerHTML = " "; //limpando a lista para não repetir quando atualiza

    const datasUnicas = removeDatasRepetidas(tarefasCadastradas);
    ordenaDatas(datasUnicas)
    datasUnicas.forEach((dia) => {

        lista.appendChild(criaData(dia))
    })
    
}