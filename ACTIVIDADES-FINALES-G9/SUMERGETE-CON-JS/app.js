/*let numeroSecreto;
let numeroMaximoPosible = 100;
let maximosIntentos = 6;
let intentos = 0;
let timer = 0;
let intervalo;

const input = document.getElementById('userInput');
const boton = document.getElementById('guessBtn');
const mensaje = document.getElementById('message');
const dificultad = document.getElementById('difficulty');
const resetBtn = document.getElementById('resetBtn');
const timerDisplay = document.getElementById('timer');

// Inicializa el juego
function iniciarJuego() {
    numeroMaximoPosible = parseInt(dificultad.value);
    numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible) + 1;
    intentos = 0;
    timer = 0;
    mensaje.textContent = `Tienes ${maximosIntentos} intentos para adivinar un número entre 1 y ${numeroMaximoPosible}.`;
    boton.disabled = false;
    input.disabled = false;
    input.value = '';
    input.focus();

    clearInterval(intervalo);
    intervalo = setInterval(() => {
        timer++;
        timerDisplay.textContent = `⏱ Tiempo: ${timer}s`;
    }, 1000);
}

// Verifica el intento del usuario
function verificarIntento() {
    const numeroUsuario = parseInt(input.value);
    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > numeroMaximoPosible) {
        mensaje.textContent = `Ingresa un número entre 1 y ${numeroMaximoPosible}.`;
        return;
    }

    intentos++;

    if (numeroUsuario === numeroSecreto) {
        mensaje.innerHTML = `🎉 ¡Correcto! Lo lograste en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'} y ${timer} segundos.`;
        finalizarJuego();
    } else if (intentos >= maximosIntentos) {
        mensaje.innerHTML = `Se acabaron los intentos. El número era <strong>${numeroSecreto}</strong>.`;
        finalizarJuego();
    } else {
        const pista = numeroUsuario > numeroSecreto ? 'menor' : 'mayor';
        mensaje.textContent = `El número secreto es ${pista}. Intentos restantes: ${maximosIntentos - intentos}`;
        input.value = '';
        input.focus();
    }
}

// Finaliza el juego y detiene temporizador
function finalizarJuego() {
    boton.disabled = true;
    input.disabled = true;
    clearInterval(intervalo);
}

// Evento para reiniciar
function reiniciarJuego() {
    iniciarJuego();
}

// Eventos
boton.addEventListener('click', verificarIntento);
resetBtn.addEventListener('click', reiniciarJuego);
dificultad.addEventListener('change', reiniciarJuego);

// Comienza automáticamente con nivel por defecto
iniciarJuego();
*/
let numeroSecreto;
let numeroMaximoPosible = 100;
let maximosIntentos = 6;
let intentos = 0;
let timer = 0;
let intervalo;

const input = document.getElementById('userInput');
const boton = document.getElementById('guessBtn');
const mensaje = document.getElementById('message');
const dificultad = document.getElementById('difficulty');
const resetBtn = document.getElementById('resetBtn');
const timerDisplay = document.getElementById('timer');

const titulo = document.getElementById('estadoJuego');
const subtitulo = document.getElementById('descripcionJuego');

function iniciarJuego() {
    numeroMaximoPosible = parseInt(dificultad.value);
    numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible) + 1;
    intentos = 0;
    timer = 0;

    mensaje.textContent = `Tienes ${maximosIntentos} intentos para adivinar un número entre 1 y ${numeroMaximoPosible}.`;
    boton.disabled = false;
    input.disabled = false;
    input.value = '';
    input.focus();

    titulo.innerHTML = `<span class="container__texto-azul">Correcto!</span>`;
    subtitulo.textContent = `Descubriste el número secreto!`;

    clearInterval(intervalo);
    intervalo = setInterval(() => {
        timer++;
        timerDisplay.textContent = `⏱ Tiempo: ${timer}s`;
    }, 1000);
}

function verificarIntento() {
    const numeroUsuario = parseInt(input.value);
    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > numeroMaximoPosible) {
        mensaje.textContent = `Ingresa un número entre 1 y ${numeroMaximoPosible}.`;
        return;
    }

    intentos++;

    if (numeroUsuario === numeroSecreto) {
        mensaje.innerHTML = `🎉 ¡Correcto! Lo lograste en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'} y ${timer} segundos.`;
        titulo.innerHTML = `<span class="container__texto-azul">Correcto!</span>`;
        subtitulo.textContent = `Descubriste el número secreto!`;
        finalizarJuego();
    } else if (intentos >= maximosIntentos) {
        mensaje.innerHTML = `Se acabaron los intentos. El número era <strong>${numeroSecreto}</strong>.`;
        titulo.innerHTML = `<span class="container__texto-azul">Incorrecto!</span>`;
        subtitulo.textContent = `Descubre el número secreto!`;
        finalizarJuego();
    } else {
        const pista = numeroUsuario > numeroSecreto ? 'menor' : 'mayor';
        mensaje.textContent = `El número secreto es ${pista}. Intentos restantes: ${maximosIntentos - intentos}`;
        titulo.innerHTML = `<span class="container__texto-azul">Incorrecto!</span>`;
        subtitulo.textContent = `Descubre el número secreto!`;
        input.value = '';
        input.focus();
    }
}

function finalizarJuego() {
    boton.disabled = true;
    input.disabled = true;
    clearInterval(intervalo);
}

function reiniciarJuego() {
    iniciarJuego();
}

boton.addEventListener('click', verificarIntento);
resetBtn.addEventListener('click', reiniciarJuego);
dificultad.addEventListener('change', reiniciarJuego);

iniciarJuego();
