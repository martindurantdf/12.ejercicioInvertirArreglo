/**
  • Almacene en un arreglo de tamaño N los números ingresados
por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero
 */
let dimensionArreglo : number = Number(prompt(`Ingrese la dimensión del arreglo: `));
let arreglo : number[] = new Array (dimensionArreglo);
for (let i = 0; i < arreglo.length; i++) {
  arreglo[i] = Number(prompt(`Indique el nro que va en la posición ${i}: `));
}

console.log ("Los números del arreglo del último al primero son: ")
for (let i = arreglo.length-1; i >= 0; i--) {
  console.log (arreglo[i]);
}