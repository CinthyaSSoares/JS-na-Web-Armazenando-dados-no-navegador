
import BotaoConclui from './Componentes/concluiTarefa.js'; //Nome da função a ser exportada e local 
import BotaoDeleta from './Componentes/deletaTarefa.js';

const criandoCalendario = (evento) => {
    evento.preventDefault();

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    //Criando calendario 
    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value);
    const dataFormatada = data.format('DD/MM/YYYY');

    const dados = {
        valor,
        dataFormatada
    }

    const tarefa = criarTarefa(dados);
    lista.appendChild(tarefa);
    input.value = " ";
}

const criarTarefa = ({valor, dataFormatada}) => {

    const tarefa = document.createElement('li');

    tarefa.classList.add('task');

    const conteudo = `<p class="content">${dataFormatada} *
    ${valor} </p>`;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());

    return tarefa;
}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criandoCalendario);