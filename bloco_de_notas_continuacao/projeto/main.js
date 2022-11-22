import { criandoCalendario } from './Componentes/CriarTarefa.js';
import { carregaTarefa } from './Componentes/CarregaTarefa.js';

const novaTarefa = document.querySelector('[data-form-button]');
novaTarefa.addEventListener('click', criandoCalendario);

carregaTarefa();