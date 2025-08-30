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

