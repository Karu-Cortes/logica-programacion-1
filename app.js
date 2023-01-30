const numero1 = Number(prompt("ingresa el primer número"));

const numero2 = Number(prompt("ingresa el segundo número"));

const numero3 = Number(prompt("ingresa el tercer número"));

const orden = [numero1, numero2, numero3];
console.log(orden);

if (numero1 === numero2 && numero2 === numero3) {
  console.log("Los números son iguales");
} else if (numero1 >= numero2 && numero2 >= numero3) {
  console.log(`el orden de mayor a menor es:${numero1},${numero2},${numero3}`);
  console.log ('el orden de menor a mayor es: '+ orden.sort((a,b) => a-b));
} else if (numero1 >= numero3 && numero3 >= numero2) {
  console.log(`el orden de mayor a menor es:${numero1},${numero3},${numero2}`);
  console.log ('el orden de menor a mayor es: '+ orden.sort((a,b) => a-b));
} else if (numero2 >= numero1 && numero1 >= numero3) {
  console.log(`el orden de mayor a menor es:${numero2},${numero1},${numero3}`);
  console.log ('el orden de menor a mayor es: '+ orden.sort((a,b) => a-b));
} else if (numero2 >= numero3 && numero3 >= numero1) {
  console.log(`el orden de mayor a menor es:${numero2},${numero3},${numero1}`);
  console.log ('el orden de menor a mayor es: '+ orden.sort((a,b) => a-b));
} else if (numero3 >= numero1 && numero1 >= numero2) {
  console.log(`el orden de mayor a menor es:${numero3},${numero1},${numero2}`);
  console.log ('el orden de menor a mayor es: '+ orden.sort((a,b) => a-b));
} else if (numero3 >= numero2 && numero2 >= numero1) {
  console.log(`el orden de mayor a menor es:${numero3},${numero2},${numero1}`);
  console.log ('el orden de menor a mayor es: '+ orden.sort((a,b) => a-b));
}
