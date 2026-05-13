// Tema 14: Buscar un elemento en un arreglo

// Uso de includes para buscar datos en un arreglo.
let frutas = ["Pera", "Manzana", "Uva", "Fresa","Lucuma","Cereza"];

let buscar = "Piña";

// Verificar si la fruta existe en el arreglo:
if (frutas.includes(buscar)) {

    // Mostrar mensaje si existe:
    console.log("La fruta existe");

} else {

    // Mostrar mensaje si no existe:
    console.log("La fruta no existe");

}