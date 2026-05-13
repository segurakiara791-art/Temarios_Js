// Tema 16: Buscar elementos en una matriz

// Uso de ciclos para buscar datos dentro de una matriz.

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let buscar = 15;
let encontrado = false;
// Recorrer filas de la matriz:
for (let fila = 0; fila < matriz.length; fila++) {
    // Recorrer columnas de la matriz:
    for (let columna = 0; columna < matriz[fila].length; columna++) {
        // Verificar si el número existe:
        if (matriz[fila][columna] === buscar) {
            encontrado = true;

        }

    }

}
// Verificar resultado de la búsqueda:
if (encontrado) {
    
    // Mostrar mensaje si existe:
    console.log("Número encontrado");
} else {

    // Mostrar mensaje si no existe:
    console.log("Número no encontrado");
}