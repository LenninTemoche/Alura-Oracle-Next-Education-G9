let numeroUno = 1;
let stringUno = '1';

let numeroTreinta = 30;
let stringTreinta = '30';

let numeroDiez = 10;
let stringDiez = '10';

//1ra Comparación
// numeroUno == stringUno --> compara solo el valor, (1 == '1') = true
// y (&&)
// numeroUno !== stringUno --> compara tipo y valor, si los tipos son distintos da true
if (numeroUno == stringUno && numeroUno !== stringUno) {
  console.log('Las variables numeroUno y stringUno tienen el mismo valor, pero tipos diferentes');
} else {
  console.log('Las variables numeroUno y stringUno no tienen el mismo valor');
}

//2da Comparación
//Con el operador de comparación estricta "===" imprimimos si las dos variables tienen el mismo valor y el mismo tipo
//30 (número) y '30' dará false 
if (numeroTreinta === stringTreinta) {
  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo');
} else {
  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo');
}