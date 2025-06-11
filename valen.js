/*
let frutas = ['banana', 'naranja', 'frutilla']; 

console.log(frutas.length);

frutas.push('mango')
frutas.pop()
frutas.shift()
*/

/*
let nombres = ['benja', 'valen', 'juana']

console.log(nombres.length)

nombres.push('facu', 'alejo')
*/

/*
let numeros = [1, 2, 3, 4, 5]

for (let indice = 0; indice < numeros.length; index++) {
    console.log()
    
}
*/

/*
let numero2 = [1, 2, 30, 4];
let suma = 0;

for (let index = 0; index < numero2.length; index++) {
  suma = suma + numero2[index]
}

console.log(suma);
*/

let animales = ['gato', 'perro', 'loro', 'conejo']

for (let i = 0; i < animales.length; i++) {
  if (i % 2 === 0)
  console.log( animales[i]);
  
}

let numeros = [4, 7, 2, 9, 5];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];  // Se va sumando cada número al total
}

console.log("La suma es " + suma);

let datos = [3, 6, 1, 8];

let multiplicados = datos.map(num => num * 2);

console.log(multiplicados);

let alumnos = ["Sofía", "Carlos", "Bruno", "Lucía", "Carla"];
let nombreBuscado = prompt("Introduce un nombre para buscar:");

if (alumnos.includes(nombreBuscado)) {
  console.log("El nombre se encontró en el arreglo.");
} else {
  console.log("El nombre no se encontró en el arreglo.");
}

let valores = [5, 0, 8, 0, 2];

let nuevoArreglo = valores.map(num => num === 0 ? 100 : num);

console.log(nuevoArreglo);

let notas = [8, 7, 9, 10, 6];
let suma1 = notas.reduce((acc, nota) => acc + nota, 0);
let promedio = suma1 / notas.length;

console.log("El promedio es " + promedio);
