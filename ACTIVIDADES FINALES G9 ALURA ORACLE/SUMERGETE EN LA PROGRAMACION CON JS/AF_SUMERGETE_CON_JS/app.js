/*//Variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 6;


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible}  por favor:`));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;

        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}*/

const numeroMaximoPosible = 100;
const numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible) + 1;
const maximosIntentos = 6;
let intentos = 0;

const input = document.getElementById('userInput');
const boton = document.getElementById('guessBtn');
const mensaje = document.getElementById('message');

boton.addEventListener('click', () => {
    const numeroUsuario = parseInt(input.value);
    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > numeroMaximoPosible) {
        mensaje.textContent = `Por favor, ingresa un número válido entre 1 y ${numeroMaximoPosible}.`;
        return;
    }

    intentos++;

    if (numeroUsuario === numeroSecreto) {
        mensaje.innerHTML = `<strong>¡Correcto! 🎉</strong> Adivinaste el número secreto en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}.`;
        boton.disabled = true;
        input.disabled = true;
    } else if (intentos >= maximosIntentos) {
        mensaje.innerHTML = `😞 ¡Te quedaste sin intentos! El número era <strong>${numeroSecreto}</strong>.`;
        boton.disabled = true;
        input.disabled = true;
    } else {
        const pista = numeroUsuario > numeroSecreto ? 'menor' : 'mayor';
        mensaje.textContent = `❌ El número secreto es ${pista}. Te quedan ${maximosIntentos - intentos} intentos.`;
        input.value = '';
        input.focus();
    }
});
