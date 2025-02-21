function login(){
    let intento = 0
    let identificar = true

    do{
        let username = prompt("Ingrese el nombre de usuario")

        while(username == "" || username == null){
            username = prompt("ingrese un Nombre de usuaro valido")

            intento++
            if(intento >= 3){
                alert("supero el limite de intentos")
                break
            }

        }
        identificar = false

        if(username != "" && username != null){
            alert("Bienvenido nuevamente " + username)
        }
    }while(identificar)



}

login()


//var mala practica de usar

//let indica que voy a inicializar una variable

/*
= asigna valores     let numero = 1

== compara valores   1==1 = true

=== compara valores y tipo de dato 1==="1" false (uno es int y el otro es string)
*/

/*prompt nos da una entrada de teclado donde podemos almacenar algo, cualquier ingreso por teclado va a ser
un string por lo que
si se pide un numero se va a tener que hacer parseInt()*/

//con las comillas se convierte en un string

//parseInt convierte a cualquier string que se pueda a un numero entero parseInt("loQueSeQuieraConvertir")


//---------------------------------------------------------------------------------------------------------------------------------------

// const pi = 3.14

// let numero1 = parseInt(prompt("ingrese el primer numero"))

// let numero2 = parseInt(prompt("ingrese el segundo numero"))

// let resultado = numero1 + parseInt(numero2)

// if(numero1 > numero2){
//     alert("el primer numero ingresado es el mayor")
// }else{
//     alert("el numero 2 es mayor al numero 1")
// }

// variable = confirm("pregunta") -- el confirm hace saltar un cartel de aceptar o cancelar

//---------------------------------------------------------------------------------------------------------------------------------------


// let nombre = prompt("ingrese un nombre")
// let apellido = prompt("ingrese su apellido")

// if(apellido == "" || apellido != String || apellido == null)
// {
//     apellido = prompt("ingrese el apellido  nuevamente")
// }
// else{
//     if(apellido =="mende"){
//         alert("hola mende")
//     }else if(apellido=="perez"){
//         alert("hola perez")
//     }
// }


// ---------------FUNCIONES---------------------------

// SINTAXIS: function nombreDeFuncion(){lo que hace la funcion }

// function saludar(){
//     let nombre = prompt("ingrese su nombre")
//     alert("hola "+ nombre)
// }

// saludar()

// alert("El resultado de la suma de ambosu numeros es " + resultado);

// alert(`El resultado de la suma de ambos numeros es: ${resultado}`);








