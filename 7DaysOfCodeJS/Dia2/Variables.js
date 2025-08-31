// Pedimos al usuario su nombre
let nombre = prompt("¿Cuál es tu nombre?");

// Validamos que el nombre no esté vacío o sea null (cancelado)
while (!nombre || nombre.trim() === "") {
  nombre = prompt("Por favor, ingresa un nombre válido:");
}
// Pedimos la edad
let edad = prompt("¿Cuántos años tienes?");
// Validamos que la edad no esté vacía, que sea un número, y mayor que cero
while (!edad || isNaN(edad) || Number(edad) <= 0) {
  edad = prompt("Por favor, ingresa una edad válida (número mayor que 0):");
}
// Pedimos qué lenguaje está estudiando
let lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");
// Validamos que el lenguaje no esté vacío
while (!lenguaje || lenguaje.trim() === "") {
  lenguaje = prompt("Por favor, ingresa un lenguaje válido:");
}
// Mostramos el mensaje final personalizado
alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);
// Preguntamos si le gusta estudiar ese lenguaje (1 = sí, 2 = no)
let gusto = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`);
// Validamos que la respuesta sea 1 o 2
while (gusto !== "1" && gusto !== "2") {
  gusto = prompt("Respuesta inválida. Escribe 1 para SÍ o 2 para NO:");
}
// Mostramos mensaje según la respuesta
if (gusto === "1") {
  alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
}
if (gusto === "2") {
  alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
}

