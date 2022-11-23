
import { BotaoConclui } from './concluiTarefa.js'; //Nome da função a ser exportada e local 
import { BotaoDeleta } from './deletaTarefa.js';
import { carregaTarefa } from './CarregaTarefa.js'

export const criandoCalendario = (evento) => {
    evento.preventDefault();

    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    //Criando calendario 
    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value);
    const horario = data.format('HH:mm');
    const dataFormatada = data.format('DD/MM/YYYY');

    const concluida = false //botao de concluir

    const dados = {
        valor,
        dataFormatada,
        horario,
        concluida
    }

    const tarefasAtualizadas = [...tarefas, dados]

    //Armazenando dados 
    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas))
    input.value = " "; //limpar o valor do imput

    carregaTarefa();
}

export const Tarefa = ({valor, horario, concluida}, id) => {

    const tarefa = document.createElement('li');

    const conteudo = `<p class="content">${horario} * ${valor} </p>`;
    if(concluida) { //ver se concluiu
        tarefa.classList.add('done');
    }
    {
        tarefa.classList.add('task');
    }
    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConclui(carregaTarefa, id));
    tarefa.appendChild(BotaoDeleta(carregaTarefa, id));

    return tarefa;
}
