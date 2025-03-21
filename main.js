function Turno(name, age, raza, date) {
    this.name = name;
    this.age = age;
    this.raza = raza;
    this.date = date;
}

let turnos = [];

function agregarTurno() {
    let name = prompt("Ingrese el nombre del perro:");
    let age = prompt("Ingrese la edad del perro:");
    let raza = prompt("Ingrese la raza del perro:");
    let date = prompt("Ingrese la fecha del turno (YYYY-MM-DD):");
    
    let nuevoTurno = new Turno(name, age, raza, date);
    turnos.push(nuevoTurno);
    alert("Turno agregado exitosamente!");
}

function cancelarTurno() {
    let name = prompt("Ingrese el nombre del perro para cancelar el turno:");
    let date = prompt("Ingrese la fecha del turno a cancelar (YYYY-MM-DD):");
    
    let indice = turnos.findIndex(turno => turno.name === name && turno.date === date);
    
    if (indice !== -1) {
        turnos.splice(indice, 1);
        alert("Turno cancelado exitosamente!");
    } else {
        alert("No se encontró un turno con esos datos.");
    }
}

function consultarPrecio() {
    alert("El precio del lavado es $5000");
}

function buscarTurno() {
    let name = prompt("Ingrese el nombre del perro para buscar su turno:");
    let turnoEncontrado = turnos.find(turno => turno.name === name);
    
    if (turnoEncontrado) {
        alert("Turno encontrado: " + turnoEncontrado.name + ", Fecha: " + turnoEncontrado.Turno);
    } else {
        alert("No se encontró un turno para ese perro.");
    }
}

// Menú de opciones
function menu() {
    let opcion;
    do {
        opcion = prompt("¿Qué desea hacer?: 1. Agregar turno 2. Cancelar turno 3. Consultar precio del lavado 4. Buscar turno 5. Salir");
        switch (opcion) {
            case "1":
                agregarTurno();
                break;
            case "2":
                cancelarTurno();
                break;
            case "3":
                consultarPrecio();
                break;
            case "4":
                buscarTurno();
                break;
            case "5":
                alert("Gracias por usar el servicio de lavadero de perros!");
                break;
            default:
                alert("Opción no válida, intente de nuevo.");
        }
    } while (opcion !== "5");
}

menu();
