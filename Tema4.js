// Tema 4: Variables locales y Globales:

// Uso de variables dentro y fuera de una función.

// Variable global
let nombre = "Kyara";

function mostrarNombre() {

    // Variable local
    let apellido = "Segura";

    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
}

mostrarNombre();